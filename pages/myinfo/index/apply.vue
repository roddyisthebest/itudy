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
    </div>
    <div id="containerList">
      <ApplyColumn
        :stacks="stacks"
        :title="'안드로이드  어플리케이션 개발자 모집합니다.'"
        :topic="'블록체인'"
      ></ApplyColumn>
      <ApplyColumn
        :stacks="stacks"
        :title="'안드로이드  어플리케이션 개발자 모집합니다.'"
        :topic="'블록체인'"
      ></ApplyColumn>
      <ApplyColumn
        :stacks="stacks"
        :title="'안드로이드  어플리케이션 개발자 모집합니다.'"
        :topic="'블록체인'"
      ></ApplyColumn>
      <ApplyColumn
        :stacks="stacks"
        :title="'안드로이드  어플리케이션 개발자 모집합니다.'"
        :topic="'블록체인'"
      ></ApplyColumn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/Button.vue'
import ApplyColumn from '~/components/ApplyColumn.vue'
export default Vue.extend({
  components: { Button, ApplyColumn },
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
  padding: 30px 0 15px 0;
}

#containerList {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  margin: 20px 0;
}
</style>
