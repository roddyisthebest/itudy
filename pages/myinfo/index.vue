<template>
  <div id="container">
    <div id="content">
      <div class="sectionColumn">
        <div class="sectionItem" :style="{ marginLeft: '30px' }">
          <div class="title">
            <TextVue
              :color="'black'"
              :contents="'내 정보'"
              :size="25"
              :weight="'bold'"
            ></TextVue>
          </div>
          <div class="myInfoWrapper">
            <div id="myInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1499021634715668480/FrKd2k3S_400x400.jpg"
                alt=""
                :style="{
                  width: '110px',
                  height: '110px',
                  borderRadius: '125px',
                  border: '1px solid #EAEAEA',
                  marginLeft: '30px',
                }"
              />
              <div id="row">
                <div>
                  <TextVue
                    :color="'black'"
                    :contents="'애강'"
                    :size="20"
                    :weight="'bold'"
                  ></TextVue>
                  <TextVue
                    :color="'#A3A3A3'"
                    :contents="'RHKD6351@naver.com'"
                    :size="13"
                    :weight="'bold'"
                  ></TextVue>
                </div>

                <button id="editButton">
                  <span id="text">개인정보 수정</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="sectionItem" :style="{ marginRight: '30px' }">
          <div class="title">
            <TextVue
              :color="'black'"
              :contents="'회원 내역'"
              :size="25"
              :weight="'bold'"
            ></TextVue>
          </div>
          <div class="myInfoWrapper">
            <div id="myStatus">
              <div class="row" :style="{ marginLeft: '30px' }">
                <TextVue
                  :color="'black'"
                  :contents="'이력서'"
                  :size="17.5"
                  :weight="'regular'"
                ></TextVue>
                <nuxt-link to="/">
                  <TextVue
                    :color="'#4F56F3'"
                    :contents="'2'"
                    :size="45"
                    :weight="'thin'"
                  ></TextVue
                ></nuxt-link>
              </div>
              <div class="row">
                <TextVue
                  :color="'black'"
                  :contents="'지원현황'"
                  :size="17.5"
                  :weight="'regular'"
                ></TextVue>
                <nuxt-link to="/">
                  <TextVue
                    :color="'black'"
                    :contents="'0'"
                    :size="45"
                    :weight="'thin'"
                  ></TextVue>
                </nuxt-link>
              </div>
              <div class="row">
                <TextVue
                  :color="'black'"
                  :contents="'이력서'"
                  :size="17.5"
                  :weight="'regular'"
                ></TextVue>
                <TextVue
                  :color="'#4F56F3'"
                  :contents="'1'"
                  :size="45"
                  :weight="'thin'"
                ></TextVue>
              </div>
              <div class="row" :style="{ marginRight: '30px' }">
                <TextVue
                  :color="'black'"
                  :contents="'이력서'"
                  :size="17.5"
                  :weight="'regular'"
                ></TextVue>
                <nuxt-link to="/">
                  <TextVue
                    :color="'#4F56F3'"
                    :contents="'1'"
                    :size="45"
                    :weight="'thin'"
                  ></TextVue>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="navigateColumn">
        <button class="navigateButton">
          <nuxt-link to="/myinfo/">
            <TextVue
              :color="$route.name === 'myinfo-index' ? 'black' : '#CECECE'"
              :contents="'이력서 정보'"
              :size="18"
              :weight="'bold'"
            ></TextVue>
          </nuxt-link>
        </button>
        <button class="navigateButton">
          <nuxt-link to="/myinfo/apply">
            <TextVue
              :color="
                $route.name === 'myinfo-index-apply' ? 'black' : '#CECECE'
              "
              :contents="'지원현황'"
              :size="18"
              :weight="'bold'"
            ></TextVue
          ></nuxt-link></button
        ><button class="navigateButton">
          <nuxt-link to="/myinfo/study">
            <TextVue
              :color="
                $route.name === 'myinfo-index-study' ? 'black' : '#CECECE'
              "
              :contents="'스터디'"
              :size="18"
              :weight="'bold'"
            ></TextVue
          ></nuxt-link></button
        ><button class="navigateButton">
          <nuxt-link to="/myinfo/favorite">
            <TextVue
              :color="
                $route.name === 'myinfo-index-favorite' ? 'black' : '#CECECE'
              "
              :contents="'찜'"
              :size="18"
              :weight="'bold'"
            ></TextVue
          ></nuxt-link>
        </button>
      </div>
      <nuxt-child />
    </div>
    <!-- <div id="navigateColumn">
        <button class="navigateButton">
          <TextVue
            :color="'black'"
            :contents="'내 정보'"
            :size="25"
            :weight="'bold'"
          ></TextVue>
        </button>
      </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextVue from '~/components/TextVue.vue'

export default Vue.extend({
  layout: 'studymall',
  components: {
    TextVue,
  },
  middleware: ['auth'],

  // created() {
  //   console.log(this.$router)
  // },
})
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  justify-content: center;
  background-color: #f5f7fd;
  padding: 0 30px;
  flex-direction: row;

  #content {
    background-color: white;
    width: 1100px;

    padding: 30px 0;

    .sectionColumn {
      height: 270px;
      display: flex;
      gap: 0 40px;
      width: 100%;
      .sectionItem {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px 0;
        width: 100%;
        .title {
          padding-bottom: 20px;
          border-bottom: 1px solid #e1e1e1;
          height: 30px;
        }

        .myInfoWrapper {
          width: 100%;
          flex: 1;
          #myInfo {
            height: 100%;
            width: 100%;
            border: 1px solid #e1e1e1;
            border-radius: 20px;
            display: flex;
            gap: 0 30px;
            align-items: center;

            #row {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              height: 110px;
              #editButton {
                border: 1px solid #e1e1e1;
                background-color: white;
                padding: 10px;
                border-radius: 10px;

                #text {
                  color: black;
                  font-size: 13px;
                  font-family: regular;
                }

                /* &:hover{
                
                } */
              }
            }
          }
          #myStatus {
            height: 100%;
            width: 100%;
            border: 1.5px solid #f5f7fd;
            border-radius: 20px;
            display: flex;
            gap: 0 30px;
            align-items: center;
            background-color: #f5f7fd;

            .row {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
              flex: 1;
            }
          }
        }
      }
    }
    #navigateColumn {
      margin: 50px 30px;
      display: flex;
      padding-bottom: 25px;
      gap: 0 25px;
      border-bottom: 1px solid #e1e1e1;
      .navigateButton {
        border: none;
        background-color: transparent;
      }
    }
  }
}
</style>
