<template>
  <div
    :style="{
      color: `${$props.color}`,
      fontFamily: `${$props.weight}`,
      fontSize: `${$props.size}px`,
    }"
  >
    {{ $props.contents }}
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'TextVue',
  props: {
    color: String,
    weight: String as PropType<'bold' | 'light' | 'regular' | 'thin'>,
    size: Number,
    contents: String,
  },
})
</script>
