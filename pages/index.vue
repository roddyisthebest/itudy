<template>
  <div>
    <div id="bannerSection">
      <div id="banner" :class="$mq">
        <div id="left">
          <div>
            <TextVue
              :color="'white'"
              :contents="'스터디 · 프로젝트 모집부터 관리까지'"
              :size="20"
              :weight="'bold'"
            ></TextVue>
            <TextVue
              :color="'white'"
              :contents="'A to Z 솔루션'"
              :size="20"
              :weight="'bold'"
            ></TextVue>
          </div>
          <img class="img" :src="require('@/assets/logo/ItudyLogoWhite.png')" />
        </div>
        <div id="right">
          <img
            class="img"
            :src="require('@/assets/img/bannerImg.png')"
            :class="$mq"
          />
        </div>
      </div>
    </div>
    <div id="contentsSection" :class="$mq">
      <div class="contents">
        <div class="sectionTitle" :style="{ width: '270px' }">
          <TextVue
            :color="'black'"
            :contents="'개발자를 찾고있어요! 💻'"
            :size="25"
            :weight="'bold'"
          ></TextVue>
        </div>
        <div class="stackColumn">
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="true"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
        </div>
        <div class="sectionTitle" :style="{ width: '410px' }">
          <TextVue
            :color="'black'"
            :contents="'기초부터 탄탄히! 스터디원 모집해요 🎓'"
            :size="25"
            :weight="'bold'"
          ></TextVue>
        </div>
        <div class="stackColumn">
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="true"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
        </div>
        <div class="sectionTitle" :style="{ width: '410px' }">
          <TextVue
            :color="'black'"
            :contents="'기초부터 탄탄히! 스터디원 모집해요 🎓'"
            :size="25"
            :weight="'bold'"
          ></TextVue>
        </div>
        <div class="stackColumn">
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="true"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
          <Recruiment
            :subTitle="'안녕하세요. 저희는 한달에 10억 수익을 얻을 수 있는 어플을 개발 중입니다. 이거 들어오시면 바로 카카오한테...'"
            :title="'안드로이드  어플리케이션 개발'"
            :stacks="stacks"
            :favorite="false"
          ></Recruiment>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextVue from '~/components/TextVue.vue'
import Recruiment from '~/components/Recruiment.vue'
export default Vue.extend({
  name: 'IndexPage',
  layout: 'studymall',
  components: { TextVue, Recruiment },
  data() {
    return {
      stacks: [
        {
          id: 0,
          name: 'vue',
          img: 'https://holaworld.io/images/languages/vue.svg',
        },
        {
          id: 1,
          name: 'react',
          img: 'https://holaworld.io/images/languages/react.svg',
        },
      ],
    }
  },
  beforeUpdate() {
    console.log('im rerender!')
  },
  updated() {
    console.log('im rerender!')
  },
})
</script>

<style lang="scss">
#bannerSection {
  height: 300px;

  background-color: #4f56f3;
  display: flex;
  justify-content: center;
  #banner {
    height: 100%;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 30px;
    &.infinity {
      padding: 0;
    }
    #left {
      flex-direction: column;
      justify-content: space-evenly;
      align-content: center;
      height: 100%;
      display: flex;
      .img {
        width: 250px;
      }
    }
    #right {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .img {
        width: 438px;
        height: 293px;
        transform: translateY(50px);
        /* &.tablet {
        width: 368px;
        height: 223px;
      } */
      }
    }
  }
}

#contentsSection {
  display: flex;
  justify-content: center;
  background-color: #f5f7fd;
  flex-direction: row;
  &.infinity {
    padding: 0;
  }

  .sectionTitle {
    border-bottom: 5px solid black;
    padding: 15px 0;
    margin-left: 30px;
    margin-bottom: 28px;
  }

  .contents {
    background-color: white;
    width: 1100px;
    justify-content: center;
    display: flex;
    padding: 70px 0;
    flex-direction: column;
    .stackColumn {
      display: flex;
      gap: 20px 20px;
      width: auto;
      flex-wrap: wrap;
      margin-bottom: 25px;
      padding: 0 30px;
    }
  }
}
</style>
