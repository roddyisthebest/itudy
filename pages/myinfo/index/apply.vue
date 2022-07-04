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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '~/components/Button.vue'
export default Vue.extend({
  components: { Button },
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
</style>
