<template>
  <nuxt-link to="/">
    <div id="container">
      <div class="left">
        <TextVue
          :color="'#9a9ab0'"
          :contents="$props.position"
          :size="15"
          :weight="'regular'"
        />
        <div class="content">
          <TextVue
            :color="'black'"
            :contents="$props.title"
            :size="20"
            :weight="'bold'"
          />
          <div class="subContent">
            <span
              class="material-icons"
              :style="{ color: 'black', fontSize: '15px' }"
              >receipt</span
            >
            <TextVue
              :color="'black'"
              :contents="'3'"
              :size="15"
              :weight="'regular'"
            />
            <span
              :style="{
                backgroundColor: '#e1e1e1',
                height: '15px',
                width: '1px',
              }"
            ></span>
            <div class="stackColumn">
              <img
                :src="stack.img"
                class="imgSize"
                v-for="stack in $props.stacks"
                :key="stack.id"
                :alt="stack.name"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <TextVue
          :color="'#7E7E7E'"
          :contents="'2022-06-17 18:01:36'"
          :size="15"
          :weight="'regular'"
        />
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
interface stackType {
  id: number
  name: string
  img: string
}
import Vue, { PropType } from 'vue'
import TextVue from '~/components/TextVue.vue'
export default Vue.extend({
  components: { TextVue },
  props: {
    position: String,
    title: String,
    stacks: Array as PropType<stackType[]>,
  },
})
</script>

<style lang="scss" scoped>
#container {
  &:hover {
    transform: translateY(-10px);
  }
  transition: all 200ms ease;
  border: 1px solid #e1e1e1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .content {
      display: flex;
      align-items: flex-end;
      gap: 25px;
      margin-top: 5px;
      .subContent {
        display: flex;
        align-items: center;
        gap: 10px;
        .stackColumn {
          display: flex;
          align-items: center;
          gap: 5px;
          .imgSize {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
}
</style>
