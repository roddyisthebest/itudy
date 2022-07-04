<template>
  <div id="container">
    <span id="text">
      {{ isItRight ? '잠시만 기다려주세요.' : '잘못된 접근입니다.' }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  beforeMount() {
    if (this.$route.query.access && this.$route.query.refresh) {
      opener.$nuxt.$store.commit('user/login', {
        access: this.$route.query.access,
        refresh: this.$route.query.refresh,
      })
      this.$data.isItRight = true
      close()
    }
  },
  data() {
    return {
      isItRight: false,
    }
  },
})
</script>

<style lang="scss" scoped>
#container {
  padding: 150px 0;
  display: flex;
  justify-content: center;

  #text {
    font-size: 50px;
    font-family: bold;
  }
}
</style>
