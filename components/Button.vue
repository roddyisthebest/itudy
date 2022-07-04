<template>
  <button
    @click="$props.func"
    :style="{
      width: `${$props.width}px`,
      height: `${$props.height}px`,
      backgroundColor: $props.bgColor,
    }"
    id="container"
  >
    <span
      :style="{
        fontSize: `${$props.textSize}px`,
        color: `${$props.textColor}`,
        fontFamily: 'bold',
      }"
    >
      {{ $props.text }}</span
    >

    <span
      :style="{
        fontSize: `${$props.iconSize}px`,
        color: `${$props.textColor}`,
      }"
      class="material-icons"
    >
      {{ $props.iconText }}</span
    >
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    func: Function,
    text: String,
    textSize: String,
    textColor: String,
    bgColor: String,
    iconText: String,
    width: Number,
    height: Number,
    iconSize: String,
  },
})
</script>

<style lang="scss" scoped>
#container {
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
}
</style>
