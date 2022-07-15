<template>
  <div id="container">
    <div id="headerWrapper">
      <TextVue
        :color="'black'"
        :contents="'포트폴리오 등록'"
        :size="25"
        :weight="'bold'"
      ></TextVue>
      <div id="headerButtonColumn">
        <button
          class="button"
          :style="{ borderColor: '#4F56F3', backgroundColor: 'white' }"
          @click="$router.back()"
        >
          <TextVue
            :color="'#4F56F3'"
            :contents="'취소'"
            :size="13"
            :weight="'bold'"
          ></TextVue>
        </button>
        <button
          :class="able ? 'button submit' : 'button notSubmit'"
          :disabled="!able"
        >
          <TextVue
            :color="'white'"
            :contents="'등록'"
            :size="13"
            :weight="'bold'"
          ></TextVue>
        </button>
      </div>
    </div>
    <input id="titleInput" placeholder="프로젝트 제목을 입력해주세요." />
    <div id="statusWrapper">
      <button class="item" :disabled="round === 1" @click="setRound(1)">
        <div class="circle" :style="{ backgroundColor: '#4F56F3' }">
          <span
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
        </div>
        <TextVue
          :color="'black'"
          :contents="'포지션'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 1 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 2" @click="setRound(2)">
        <div
          class="circle"
          :style="{ backgroundColor: round <= 1 ? '#949394' : '#4F56F3' }"
        >
          <span
            v-if="round >= 2"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'2'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 1 ? '#949394' : 'black'"
          :contents="'프로젝트'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 2 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 3" @click="setRound(3)">
        <div
          class="circle"
          :style="{ backgroundColor: round >= 3 ? '#4F56F3' : '#949394' }"
        >
          <span
            v-if="round >= 3"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'3'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 2 ? '#949394' : 'black'"
          :contents="'기술스택'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 3 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 4" @click="setRound(4)">
        <div
          class="circle"
          :style="{ backgroundColor: round >= 4 ? '#4F56F3' : '#949394' }"
        >
          <span
            v-if="round >= 4"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'4'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 3 ? '#949394' : 'black'"
          :contents="'첨부파일'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="lineWrapper">
        <div
          class="line"
          :style="{ backgroundColor: round <= 4 ? '#dcdcdc' : '#4F56F3' }"
        ></div>
      </div>
      <button class="item" :disabled="round === 5" @click="setRound(5)">
        <div
          class="circle"
          :style="{ backgroundColor: round >= 5 ? '#4F56F3' : '#949394' }"
        >
          <span
            v-if="round >= 5"
            class="material-icons"
            :style="{ color: 'white', fontSize: '25px' }"
            >check</span
          >
          <TextVue
            v-else
            :color="'white'"
            :contents="'5'"
            :size="15"
            :weight="'bold'"
          ></TextVue>
        </div>
        <TextVue
          :color="round <= 4 ? '#949394' : 'black'"
          :contents="'자기소개'"
          :size="20"
          :weight="'bold'"
        ></TextVue>
      </button>
    </div>
    <div
      id="headerWrapper"
      :style="{
        borderTop: '1px solid #e1e1e1',
        borderBottom: 'none',
        padding: '30px 0 0 0 ',
      }"
    >
      <TextVue
        :color="'black'"
        :contents="'당신의 포지션을 선택해주세요.'"
        :size="22"
        :weight="'bold'"
      ></TextVue>

      <div id="headerButtonColumn">
        <button class="button submit" :disabled="!able">
          <TextVue
            :color="'white'"
            :contents="'다음'"
            :size="13"
            :weight="'bold'"
          ></TextVue>
        </button>
      </div>
    </div>
    <div id="positionWrapper" v-if="round === 1" key="1">
      <button
        id="postionButton"
        :class="positionIdx === 0 ? 'checked' : 'notChecked'"
        @click="setPosition(0)"
        :disabled="positionIdx === 0"
      >
        <span
          class="material-icons"
          :class="positionIdx === 0 ? 'checked' : 'notChecked'"
          :style="{ fontSize: '70px' }"
          >brush</span
        >
        <TextVue
          :color="positionIdx === 0 ? 'white' : '#656bf5'"
          :contents="'디자이너'"
          :size="22"
          :weight="'bold'"
        ></TextVue>
      </button>
      <button
        id="postionButton"
        :class="positionIdx === 1 ? 'checked' : 'notChecked'"
        @click="setPosition(1)"
        :disabled="positionIdx === 1"
      >
        <span
          class="material-icons"
          :class="positionIdx === 1 ? 'checked' : 'notChecked'"
          :style="{ fontSize: '70px' }"
          >desktop_mac</span
        >
        <TextVue
          :color="positionIdx === 1 ? 'white' : '#656bf5'"
          :contents="'개발자'"
          :size="22"
          :weight="'bold'"
        ></TextVue>
      </button>
      <button
        id="postionButton"
        :class="positionIdx === 2 ? 'checked' : 'notChecked'"
        @click="setPosition(2)"
        :disabled="positionIdx === 2"
      >
        <span
          class="material-icons"
          :class="positionIdx === 2 ? 'checked' : 'notChecked'"
          :style="{ fontSize: '70px' }"
          >border_color</span
        >
        <TextVue
          :color="positionIdx === 2 ? 'white' : '#656bf5'"
          :contents="'기획자'"
          :size="22"
          :weight="'bold'"
        ></TextVue>
      </button>
    </div>
    <div id="projectWrapper" v-if="round === 2" key="2">
      <button id="projectAddButton">
        <TextVue
          :color="'#4f56f3'"
          :contents="'+ 프로젝트 추가'"
          :size="13"
          :weight="'bold'"
        ></TextVue>
      </button>
      <div class="project">
        <div class="project-item">
          <div class="label">
            <TextVue
              :color="'red'"
              :contents="'*'"
              :size="23"
              :weight="'bold'"
            ></TextVue
            ><TextVue
              :color="'black'"
              :contents="'프로젝트 제목'"
              :size="23"
              :weight="'regular'"
            ></TextVue>
          </div>
          <input class="input" :style="{ width: '35%' }" />
        </div>
        <div class="project-item">
          <div class="label">
            <TextVue
              :color="'red'"
              :contents="'*'"
              :size="23"
              :weight="'bold'"
            ></TextVue
            ><TextVue
              :color="'black'"
              :contents="'프로젝트 설명'"
              :size="23"
              :weight="'regular'"
            ></TextVue>
          </div>
          <textarea class="textarea" />
        </div>
        <div class="project-item">
          <div class="label">
            <TextVue
              :color="'black'"
              :contents="'사용스택'"
              :size="23"
              :weight="'regular'"
            ></TextVue>
          </div>
          <div id="stackSearchWrapper">
            <ul>
              <!-- <li>
                <div class="stackItem not-input">
                  <span class="name">리액트</span>
                  <button>
                    <span class="material-icons">clear</span>
                  </button>
                </div>
              </li> -->

              <li>
                <input
                  class="stackItem"
                  type="text"
                  :style="{ padding: 0 }"
                  placeholder="스택을 입력해주세요."
                />
              </li>
            </ul>
          </div>
          <div id="stackContentWrapper">
            <button>
              <span class="name">REACT</span>
              <img
                src="https://holaworld.io/images/languages/react.svg"
                alt=""
              />
            </button>
            <button>
              <span class="name">NODE JS</span>
              <img
                src="https://holaworld.io/images/languages/nodejs.svg"
                alt=""
              />
            </button>
            <button>
              <span class="name">VUE</span>
              <img src="https://holaworld.io/images/languages/vue.svg" alt="" />
            </button>
            <button>
              <span class="name">GO</span>
              <img src="https://holaworld.io/images/languages/go.svg" alt="" />
            </button>
            <button>
              <span class="name">NEST JS</span>
              <img
                src="https://holaworld.io/images/languages/nestjs.svg"
                alt=""
              />
            </button>
            <button>
              <span class="name">PHP</span>
              <img src="https://holaworld.io/images/languages/php.svg" alt="" />
            </button>
            <button>
              <span class="name">JAVA</span>
              <img
                src="https://holaworld.io/images/languages/java.svg"
                alt=""
              />
            </button>
            <button>
              <span class="name">PYTHON</span>
              <img
                src="https://holaworld.io/images/languages/python.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div class="project-item">
          <div class="label">
            <TextVue
              :color="'black'"
              :contents="'프로젝트 링크'"
              :size="23"
              :weight="'regular'"
            ></TextVue>
          </div>
          <input class="input" :style="{ width: '35%' }" />
        </div>
        <div id="buttonColumn">
          <div class="button cancle">취소</div>
          <div class="button create">생성</div>
        </div>
      </div>
      <div class="projectCreated">
        <div class="titleColumn">
          <span class="title">새 프로젝트</span>
          <div class="buttonColumn">
            <button class="button cancle">수정</button>
            <button class="button create">삭제</button>
          </div>
        </div>
        <p class="content">
          프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다.
          프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다.
          프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다.
          프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다.
          프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다.
          프로젝트 설명입니다. 프로젝트 설명입니다. 프로젝트 설명입니다.
          프로젝트 설명입니다. 프로젝트
        </p>
        <div class="stacksWrapper">
          <img
            src="https://holaworld.io/images/languages/python.svg"
            alt=""
            class="img"
          />
        </div>
        <div class="link">
          <span class="dot"></span>
          <span class="text">www.namver.kil</span>
        </div>
      </div>
    </div>
    <div id="stackWrapper" v-if="round === 3" key="3">
      <div id="stackSearchWrapper">
        <ul>
          <li>
            <div class="stackItem not-input">
              <span class="name">리액트</span>
              <button>
                <span class="material-icons">clear</span>
              </button>
            </div>
          </li>

          <li>
            <input
              class="stackItem"
              type="text"
              :style="{ padding: 0 }"
              placeholder="스택을 입력해주세요."
            />
          </li>
        </ul>
      </div>
      <div id="stackContentWrapper">
        <button>
          <span class="name">REACT</span>
          <img src="https://holaworld.io/images/languages/react.svg" alt="" />
        </button>
        <button>
          <span class="name">NODE JS</span>
          <img src="https://holaworld.io/images/languages/nodejs.svg" alt="" />
        </button>
        <button>
          <span class="name">VUE</span>
          <img src="https://holaworld.io/images/languages/vue.svg" alt="" />
        </button>
        <button>
          <span class="name">GO</span>
          <img src="https://holaworld.io/images/languages/go.svg" alt="" />
        </button>
        <button>
          <span class="name">NEST JS</span>
          <img src="https://holaworld.io/images/languages/nestjs.svg" alt="" />
        </button>
        <button>
          <span class="name">PHP</span>
          <img src="https://holaworld.io/images/languages/php.svg" alt="" />
        </button>
        <button>
          <span class="name">JAVA</span>
          <img src="https://holaworld.io/images/languages/java.svg" alt="" />
        </button>
        <button>
          <span class="name">PYTHON</span>
          <img src="https://holaworld.io/images/languages/python.svg" alt="" />
        </button>
      </div>
    </div>
    <div id="fileWrapper" v-if="round === 4" key="4">
      <div id="titleColumn">
        <button>+ 파일추가</button>
        <div id="alertColumn">
          <span class="text"
            >*파일 사이즈는 <strong>10MB</strong>를 초과할 수 없습니다.
          </span>
        </div>
      </div>
      <DropDown @file="setFile" v-if="!file"></DropDown>

      <div id="fileStatusWrapper" v-else>
        <span class="text">{{ file.name }}</span>
        <div id="column">
          <span class="text"
            >용량
            <strong>{{ (file.size / 1000000).toFixed(1) }}</strong> MB</span
          >
          <span
            @click="resetFile"
            class="material-icons"
            :style="{ color: 'lightgray', fontSize: '25px', cursor: 'pointer' }"
            >clear</span
          >
        </div>
      </div>
    </div>
    <div id="introducingWrapper" v-if="round === 5" key="5">
      <textarea></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextVue from '~/components/TextVue.vue'
import DropDown from '~/components/DropDown.vue'
export default Vue.extend({
  layout: 'studymall',
  components: {
    TextVue,
    DropDown,
  },
  middleware: ['auth'],
  methods: {
    setRound(round: number) {
      this.round = round
    },
    setPosition(position: number) {
      this.positionIdx = position
    },
    setFile(file: File) {
      this.file = file
      console.log(file)
    },
    resetFile() {
      this.file = null
    },
  },
  data() {
    return {
      round: 1,
      able: false,
      positionIdx: null as number | null,
      file: null as null | File,
    }
  },
})
</script>

<style lang="scss" scoped>
#container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  min-height: 675px;
  #headerWrapper {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
    #headerButtonColumn {
      display: flex;
      gap: 0 10px;
      align-self: flex-end;
      .button {
        padding: 7px 20px;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
      }
      .notSubmit {
        border-color: lightgray;
        background-color: lightgray;
      }
      .submit {
        border-color: #4f56f3;
        background-color: #4f56f3;
      }
    }
  }

  #titleInput {
    padding: 15px 20px;
    background-color: #f5f7fd;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
  }

  #statusWrapper {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    gap: 0 30px;
    border: 1px solid #e1e1e1;
    border-radius: 20px;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px 0;
      border: none;
      background-color: transparent;
      .circle {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
      }
    }
    .lineWrapper {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      .line {
        height: 1px;
        width: 100%;
        /* background-color: #dcdcdc; */
      }
    }
  }
  .fade-enter-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  #positionWrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 200px;
    #postionButton {
      width: 180px;
      height: 180px;
      border-radius: 20px;
      border: 1px solid #656bf5;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      .checked {
        color: white;
      }
      .notChecked {
        color: #656bf5;
      }
    }

    .checked {
      background-color: #656bf5;
    }
    .notChecked {
      background-color: white;
    }
  }
  #projectWrapper {
    display: flex;
    flex-direction: column;
    gap: 30px 0;

    #projectAddButton {
      width: 120px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #4f56f3;
      background-color: white;
      border-radius: 10px;
    }

    .project {
      padding: 35px;
      border: 1px solid #e1e1e1;
      border-radius: 20px;
      display: flex;
      gap: 30px 0;
      flex-direction: column;
      .project-item {
        display: flex;
        flex-direction: column;
        gap: 15px 0;

        .label {
          display: flex;
          gap: 0 5px;
          align-items: center;
        }
        .input {
          padding: 15px 20px;
          background-color: #f5f7fd;
          border: none;
          border-radius: 10px;
          outline: none;
          font-size: 15px;
        }

        .textarea {
          padding: 20px;
          background-color: #f5f7fd;
          border: none;
          border-radius: 10px;
          outline: none;
          font-size: 15px;
          height: 120px;
          resize: none;
        }
      }
    }

    .projectCreated {
      padding: 35px;
      border: 1px solid #e1e1e1;
      border-radius: 20px;
      display: flex;
      gap: 20px 0;
      flex-direction: column;
      .titleColumn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 30px;
          font-family: bold;
        }
        .buttonColumn {
          display: flex;
          align-items: center;
          gap: 0 10px;
          .button {
            padding: 0 20px;
            height: 35px;
            border-radius: 10px;
            border-width: 1px;
            border-style: solid;
            font-size: 12.5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cancle {
            border-color: #4f56f3;
            background-color: white;
            color: #4f56f3;
          }
          .create {
            border-color: #4f56f3;
            background-color: #4f56f3;
            color: white;
          }
        }
      }
      .content {
        font-size: 15px;
        font-family: regular;
        color: black;
      }
      .stacksWrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 10px;
        .img {
          width: 50px;
          height: 50px;
        }
      }

      .link {
        display: flex;
        align-items: center;
        gap: 0 10px;
        .dot {
          width: 5px;
          height: 5px;
          background-color: black;
          border-radius: 5px;
        }
        .text {
          color: black;
          font-size: 15px;
          font-family: regular;
        }
      }
    }

    #buttonColumn {
      padding-top: 20px;
      display: flex;
      gap: 0 10px;
      justify-content: flex-end;

      border-top: 1px solid #e1e1e1;
      .button {
        padding: 7px 20px;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
      }
      .cancle {
        border-color: #4f56f3;
        background-color: white;
        color: #4f56f3;
      }
      .create {
        border-color: #4f56f3;
        background-color: #4f56f3;
        color: white;
      }
    }
  }

  #stackWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }

  #fileWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    #titleColumn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 90px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #4f56f3;
        background-color: white;
        border-radius: 10px;
        color: #4f56f3;
        font-size: 13px;
        font-family: bold;
      }
      #alertColumn {
        .text {
          color: #9a9ab0;
          font-size: 15px;
          font-family: regular;
          strong {
            color: #4f56f3;
          }
        }
      }
    }
    #fileStatusWrapper {
      width: calc(100% - 40px);
      height: calc(80px - 40px);
      padding: 20px;
      border: 1px solid #e1e1e1;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .text {
        font-size: 20px;
        font-weight: bold;
        color: black;
        strong {
          color: #4f56f3;
        }
      }

      #column {
        display: flex;
        align-items: center;
        gap: 0 15px;
      }
    }
  }

  #introducingWrapper {
    textarea {
      height: calc(500px - 60px);
      background-color: #f5f7fd;
      /* color: #cdcffc; */
      font-size: 20px;
      width: calc(100% - 60px);
      border-radius: 15px;
      border: none;
      outline: none;
      padding: 30px;
    }
  }
  #stackSearchWrapper {
    padding: 15px 20px;
    background-color: #f5f7fd;
    border: none;
    border-radius: 10px;
    gap: 10px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      padding: 0 0.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 -0.25rem !important;
      gap: 10px 10px;
      li {
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;

        border: 0;
        border-radius: 0.25rem;
        color: #263747;
        overflow: hidden;
        box-shadow: none;
        list-style: none;
        cursor: pointer;
        height: 20px;

        .stackItem {
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          border: 0;
          border-radius: 0.25rem;
          color: #263747;
          overflow: hidden;
          list-style: none;
          cursor: pointer;
          height: 20px;
          align-items: center;
          padding: 0 10px;
          display: flex;
          gap: 0 5px;
          .name {
            color: #4f56f3;
            font-size: 10px;
            font-family: regular;
          }
          button {
            background-color: transparent;
            border: none;
            display: flex;
            padding: 0;
            span {
              font-size: 10px;
              color: #a4a4a4;
            }
          }
        }
        input {
          width: 100%;
          color: #263747;
          font-size: 1rem;
          border: none;
          padding: 0;
          font-size: 20px;
          outline: none;
          background-color: transparent;
        }
        .not-input {
          background-color: white;
        }
      }
    }
  }
  #stackContentWrapper {
    padding: 20px;
    background-color: #f5f7fd;
    border-radius: 0 0 10px 10px;
    gap: 10px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    button {
      padding: 10px 20px;
      border: none;
      background-color: white;
      display: flex;
      gap: 0 10px;
      align-items: center;
      border-radius: 5px;
      .name {
        color: black;
        font-size: 18px;
        font-family: thin;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
