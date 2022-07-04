<template>
  <div class="container">
    <div class="topSection">
      <span class="typeSection">
        <text-vue
          :color="'#4FB8F3'"
          :contents="'블록체인'"
          :size="10"
          :weight="'bold'"
        ></text-vue>
      </span>
      <button class="favoriteButton" @click="setFavorite">
        <span class="material-icons icon">{{
          $data.fav ? 'star' : 'star_border'
        }}</span>
      </button>
    </div>
    <div class="centerSection">
      <text-vue
        :color="'black'"
        :contents="$props.title"
        :size="14"
        :weight="'bold'"
      ></text-vue>
      <p class="centerSub">{{ $props.subTitle }}</p>

      <div class="stacksSection">
        <img
          v-for="stack in $props.stacks"
          :key="stack.id"
          :src="stack.img"
          :alt="stack.name"
          class="img"
        />
      </div>
    </div>
    <section class="bottomSection">
      <text-vue
        :color="'black'"
        :contents="'개발자 3'"
        :size="10"
        :weight="'regular'"
      ></text-vue>
      /
      <text-vue
        :color="'black'"
        :contents="'디자이너 1'"
        :size="10"
        :weight="'regular'"
      ></text-vue>
      /
      <text-vue
        :color="'black'"
        :contents="'기획자 1'"
        :size="10"
        :weight="'regular'"
      ></text-vue>
    </section>
  </div>
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
    title: String,
    subTitle: String,
    stacks: Array as PropType<stackType[]>,
    favorite: Boolean,
  },
  data() {
    return { fav: false }
  },
  created() {
    this.$data.fav = this.$props.favorite
  },

  methods: {
    setFavorite() {
      this.$data.fav = !this.$data.fav
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  flex: 0 0 auto;

  width: 190px;
  border: 1px solid #e1f4fe;
  border-radius: 20px;
  padding: 25px 25px 18px 25px;
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 15px 0;
  .topSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1.5;
    .typeSection {
      padding: 5px 15px;
      border-radius: 25px;
      background-color: #e1f4fe;
    }
    .favoriteButton {
      border: none;
      background: transparent;
      cursor: pointer;
      color: rgb(255, 238, 0);
    }
  }
  .centerSection {
    flex: 4;
    flex-direction: column;
    display: flex;
    gap: 10px 0;
    width: 100%;
    .centerSub {
      font-size: 5px;
      font-family: thin;
      color: gray;
    }
    .stacksSection {
      height: 35px;
      display: flex;
      gap: 10px;
      .img {
        width: 35px;
        height: 35px;
      }
    }
  }
  .bottomSection {
    flex: 1;
    border-top-style: solid;
    border-top-color: #e1f4fe;
    border-top-width: 1px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    color: #e1f4fe;
    font-size: 10px;
  }

  &:hover {
    transform: translateY(-10px);
  }
  transition: all 200ms ease;
  cursor: pointer;
}
</style>
