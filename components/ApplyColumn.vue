<template>
  <nuxt-link to="/">
    <div id="container">
      <div class="top">
        <span class="topic">
          <TextVue
            :color="'#4FB8F3'"
            :contents="$props.topic"
            :size="12.5"
            :weight="'bold'"
          />
        </span>
        <div class="portFolioColumn">
          <span
            class="material-icons"
            :style="{ color: '#7E7E7E', fontSize: '15px' }"
            >receipt</span
          >
          <TextVue
            :color="'#7E7E7E'"
            :contents="'안녕하세요 주니어개발자 임예광 입니다!'"
            :size="15"
            :weight="'regular'"
          />
        </div>
      </div>
      <div class="bottom">
        <div class="content">
          <TextVue
            :color="'black'"
            :contents="$props.title"
            :size="20"
            :weight="'bold'"
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
    topic: String,
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
  flex-direction: column;
  gap: 10px 0;
  .top {
    display: flex;
    align-items: center;
    gap: 20px;
    .topic {
      width: 80px;
      height: 30px;
      background-color: #e1f4fe;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .portFolioColumn {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .content {
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
</style>
