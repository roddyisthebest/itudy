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
        :bgColor="'#4F56F3'"
        :height="35"
        :width="100"
        :iconText="'add_box'"
        :text="'새 스터디'"
        :textColor="'white'"
        :textSize="13"
        :iconSize="13"
      ></Button>
    </div>
    <div id="containerList">
      <StudyBox
        :boss="'rhkd6351'"
        :category="'웹개발'"
        :name="'LB STUDIO'"
        :people="5"
      ></StudyBox>
      <StudyBox
        :boss="'rhkd6351'"
        :category="'앱개발'"
        :name="'LB STUDIO'"
        :people="5"
      ></StudyBox>
      <StudyBox
        :boss="'rhkd6351'"
        :category="'블록체인'"
        :name="'LB STUDIO'"
        :people="5"
      ></StudyBox>
      <StudyBox
        :boss="'rhkd6351'"
        :category="'인공지능'"
        :name="'LB STUDIO'"
        :people="5"
      ></StudyBox>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/Button.vue'
import StudyBox from '~/components/StudyBox.vue'
export default Vue.extend({
  components: { Button, StudyBox },
  methods: {
    test() {
      console.log('test')
    },
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
  justify-content: flex-start;
}
</style>
