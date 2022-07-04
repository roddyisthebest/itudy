<template>
  <div
    id="container"
    @click="tes"
    :style="{ width: `${$props.width}px`, height: `${$props.height}` }"
  >
    <div id="header">
      <span id="headerText">{{ $props.title }}</span>
      <button id="deleteButton" @click="popDown">
        <span
          class="material-icons"
          :style="{ color: 'white', fontSize: '35px' }"
          >clear</span
        >
      </button>
    </div>
    <div id="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: String,
    width: Number,
    height: Number,
  },
  methods: {
    popDown() {
      this.$emit('popDown')
    },
  },
})
</script>

<style lang="scss" scoped>
#container {
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  z-index: 51;
  #header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px 30px 0 0;
    background-color: #4f56f3;
    position: relative;
    padding: 20px 60px;
    #headerText {
      color: white;
      font-size: 35px;
      font-family: bold;
    }

    #deleteButton {
      width: 35px;
      height: 35px;
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  #content {
    flex: 4;
    background-color: white;
    border-radius: 0 0 30px 30px;
    padding: 60px;
  }
}
</style>
