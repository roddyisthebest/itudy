<template>
  <div id="container">
    <input id="titleInput" placeholder="프로젝트 제목을 입력해주세요." />
    <div id="statusWrapper">
      <button class="item" :disabled="round === 1" @click="setRound(1)">
        <div class="circle" :style="{ backgroundColor: '#4F56F3' }">
          <span
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
        </div>
        <TextVue
          :color="'black'"
          :contents="'포지션'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 1 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 2" @click="setRound(2)">
        <div
          class="circle"
          :style="{ backgroundColor: round <= 1 ? '#949394' : '#4F56F3' }"
        >
          <span
            v-if="round >= 2"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'2'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 1 ? '#949394' : 'black'"
          :contents="'프로젝트'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 2 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 3" @click="setRound(3)">
        <div
          class="circle"
          :style="{ backgroundColor: round >= 3 ? '#4F56F3' : '#949394' }"
        >
          <span
            v-if="round >= 3"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'3'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 2 ? '#949394' : 'black'"
          :contents="'기술스택'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 3 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 4" @click="setRound(4)">
        <div
          class="circle"
          :style="{ backgroundColor: round >= 4 ? '#4F56F3' : '#949394' }"
        >
          <span
            v-if="round >= 4"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'4'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 3 ? '#949394' : 'black'"
          :contents="'첨부파일'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 4 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 5" @click="setRound(5)">
        <div
          class="circle"
          :style="{ backgroundColor: round >= 5 ? '#4F56F3' : '#949394' }"
        >
          <span
            v-if="round >= 5"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'5'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 4 ? '#949394' : 'black'"
          :contents="'자기소개'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextVue from '~/components/TextVue.vue'

export default Vue.extend({
  layout: 'studymall',
  components: {
    TextVue,
  },
  middleware: ['auth'],
  methods: {
    setRound(round: number) {
      this.round = round
    },
    da() {
      console.log('fucs')
    },
  },
  data() {
    return {
      round: 1,
    }
  },

  // created() {
  //   console.log(this.$router)
  // },
})
</script>

<style lang="scss" scoped>
#container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;

  #titleInput {
    padding: 15px 20px;
    background-color: #f5f7fd;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
  }

  #statusWrapper {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    gap: 0 30px;
    border: 1px solid #e1e1e1;
    border-radius: 20px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px 0;
      border: none;
      background-color: transparent;
      .circle {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
      }
    }
    .lineWrapper {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      .line {
        height: 1px;
        width: 100%;
        /* background-color: #dcdcdc; */
      }
    }
  }
}
</style>
