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
      <nuxt-link to="/portfolio/write">
        <Button
          :func="test"
          :bgColor="'#4F56F3'"
          :height="35"
          :width="100"
          :iconText="'create'"
          :text="'새 글 쓰기'"
          :textColor="'white'"
          :textSize="13"
          :iconSize="13"
        ></Button>
      </nuxt-link>
    </div>
    <div id="containerList">
      <RecruitmentColumn
        :title="'안녕하세요 주니어개발자 임예광 입니다!'"
        :position="'개발자'"
        :stacks="stacks"
      ></RecruitmentColumn>
      <RecruitmentColumn
        :title="'안녕하세요 주니어개발자 임예광 입니다!'"
        :position="'개발자'"
        :stacks="stacks"
      ></RecruitmentColumn>
      <RecruitmentColumn
        :title="'안녕하세요 주니어개발자 임예광 입니다!'"
        :position="'개발자'"
        :stacks="stacks"
      ></RecruitmentColumn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/Button.vue'
import RecruitmentColumn from '~/components/RecruimentColumn.vue'
export default Vue.extend({
  components: { Button, RecruitmentColumn },
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
