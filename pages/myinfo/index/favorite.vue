<template>
  <div>
    <div id="filterColumn">
      <Button
        :func="test"
        :bgColor="'#F4F4F5'"
        :height="35"
        :width="100"
        :iconText="'arrow_drop_down'"
        :text="'최신순'"
        :textColor="'black'"
        :textSize="13"
        :iconSize="20"
      ></Button>
      <Button
        :func="test"
        :bgColor="'#F4F4F5'"
        :height="35"
        :width="100"
        :iconText="'arrow_drop_down'"
        :text="'공고'"
        :textColor="'black'"
        :textSize="13"
        :iconSize="20"
      ></Button>
    </div>
    <div id="containerList">
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/Button.vue'
import Recruiment from '~/components/Recruiment.vue'

export default Vue.extend({
  components: { Button, Recruiment },
  methods: {
    test() {
      console.log('test')
    },
  },
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
})
</script>

<style lang="scss" scoped>
#filterColumn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  padding: 30px 0;
}

#containerList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 20px;
  margin: 20px 0;
}
</style>
