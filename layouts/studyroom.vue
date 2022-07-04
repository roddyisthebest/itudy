<template>
  <div>
    <div id="navbar">
      <div id="left">
        <img
          @click="test"
          class="img"
          :src="require('@/assets/logo/ItudyLogo.png')"
          alt=""
        />
        <nuxt-link to="/">
          <span class="link">커뮤니티</span>
        </nuxt-link>
        <nuxt-link to="/">
          <span class="link">고객센터</span>
        </nuxt-link>
      </div>
      <div id="right">
        <div id="searchBar">
          <input id="searchInput" />
          <nuxt-link to="/">
            <span class="material-icons" id="icon">search</span>
          </nuxt-link>
        </div>
        <nuxt-link to="/">
          <span class="material-icons link-right">notifications_none</span>
        </nuxt-link>
        <nuxt-link to="/">
          <span class="material-icons link-right">account_circle</span>
        </nuxt-link>
      </div>
    </div>
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    test() {
      console.log('jello')
    },
  },
})
</script>

<style lang="scss" scoped>
#navbar {
  /* width: 100%; */
  height: 80px;
  background-color: white;
  padding: 0 200px;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #left {
    display: flex;
    gap: 25px;
    align-items: center;

    .img {
      width: 150px;
      cursor: pointer;
    }
    .link {
      font-size: 20px;
      color: black;
    }
  }
  #right {
    display: flex;
    gap: 20px;
    align-items: center;
    .link-right {
      font-size: 25px;
      color: #9a9ab0;
    }
    #searchBar {
      gap: 5px;

      width: 220px;
      height: 10px;
      border-radius: 15px;
      background-color: white;
      border: 1px solid #9a9ab0;
      display: flex;
      align-items: center;
      padding: 10px 10px 10px 15px;
      #icon {
        font-size: 15px;
        color: #9a9ab0;
      }
    }
    #searchInput {
      flex: 1;
      border: none;
      outline: none;
      font-size: 12.5px;
    }
  }
}
</style>
