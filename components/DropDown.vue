<template>
  <div id="container-dropdown">
    <div
      id="dropBox"
      @drop="onDrop"
      @click="onClick"
      @dragover="onDragover"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      :class="isDroping ? 'border-dashed' : 'border-solid'"
    >
      <div id="column">
        <span
          class="material-icons"
          :style="{ color: '#9a9ab0', fontSize: '25px' }"
          >{{ isDroping ? 'pan_tool' : 'upload_file' }}</span
        >
        <span class="text">
          {{
            isDroping
              ? '파일을 drop 해주세요!'
              : '첨부할 파일을 마우스로 끌어서 추가할 수 있습니다.'
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { isDroping: false }
  },
  methods: {
    onDrop(event: any) {
      event.preventDefault()
      this.$emit('file', event.dataTransfer.files[0])
      if (this.isDroping) {
        this.isDroping = false
      }
    },
    onClick(event: Event) {
      console.log('click')
    },
    onDragleave(event: Event) {
      if (this.isDroping) {
        this.isDroping = false
      }
      console.log('drag leave')
      //   this.isDroping = false
    },
    onDragover(event: Event) {
      if (!this.isDroping) {
        this.isDroping = true
        console.log('dropover')
      }
      event.preventDefault()
    },
    onDragenter(event: Event) {
      if (!this.isDroping) {
        this.isDroping = true
      }
      event.preventDefault()
    },
  },
})
</script>

<style scoped lang="scss">
#container-dropdown {
  display: flex;
  gap: 20px 0;
  flex-direction: column;
  padding: 30px 0;

  #dropBox {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-width: 1px;

    #column {
      display: flex;
      align-items: center;
      gap: 0 15px;

      .text {
        color: #9a9ab0;
        font-size: 20px;
        font-family: bold;
      }
    }
  }
  .border-solid {
    border-style: solid;
    border-color: #e1e1e1;
  }
  .border-dashed {
    border-style: dashed;
    border-color: #b2b2b2;
  }
}
</style>
