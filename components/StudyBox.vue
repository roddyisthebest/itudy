<template>
  <nuxt-link
    to="/studyroom/idx"
    id="container"
    :style="{ borderColor: backColor }"
  >
    <div id="column">
      <span id="title">{{ name }}</span>
      <div id="category" :style="{ backgroundColor: backColor }">
        <span :style="{ color: textColor }">{{ category }}</span>
      </div>
    </div>
    <div id="column">
      <div id="user">
        <span class="text">👑</span>
        <span class="text">{{ boss }}</span>
      </div>
      <div id="user">
        <span
          class="material-icons"
          :style="{ color: 'black', fontSize: '15px' }"
          >people_alt</span
        >
        <span class="text">{{ people }}</span>
      </div>
    </div>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard
    </p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    category: String as PropType<'웹개발' | '인공지능' | '앱개발' | '블록체인'>,
    name: String,
    boss: String,
    people: Number,
  },
  created() {
    if (this.category === '웹개발') {
      this.backColor = '#E5F0FF'
      this.textColor = '#418EFA'
    } else if (this.category === '앱개발') {
      this.backColor = '#E5E7FF'
      this.textColor = '#4F56F3'
    } else if (this.category === '인공지능') {
      this.backColor = '#E1F4FE'
      this.textColor = '#4FB8F3'
    } else {
      this.backColor = '#F7E4FF'
      this.textColor = '#BE4EF3'
    }
  },
  data() {
    return {
      backColor: '',
      textColor: '',
    }
  },
})
</script>

<style scoped lang="scss">
#container {
  padding: 20px;
  border-width: 1px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  width: 290px;
  border-radius: 15px;
  #column {
    display: flex;
    align-items: center;
    gap: 0 20px;

    #title {
      font-size: 20px;
      font-family: regular;
      color: black;
    }
    #category {
      padding: 5px 15px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      /* background-color: #e5e7ff; */
      span {
        font-size: 10px;
        font-family: bold;
        /* color: #4f56f3; */
      }
    }
    #user {
      display: flex;
      align-items: center;
      gap: 0 5px;
      .text {
        font-size: 12px;
        font-family: regular;
        color: black;
      }
    }
  }
  p {
    font-size: 13px;
    font-weight: regular;
    color: #8a8a8a;
    margin: 0;
  }

  &:hover {
    transform: translateY(-10px);
  }
  transition: all 200ms ease;
}
</style>
