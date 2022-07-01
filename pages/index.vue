<template>
  <div class="div">
    <span id="hello">heello</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss">
.div {
  #hello {
    display: none;
  }
}
</style>
