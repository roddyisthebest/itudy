<template>
  <div id="container">
    <div id="navbarWrapper">
      <div id="navbar" :class="$mq">
        <div id="left">
          <nuxt-link to="/" :style="{ display: 'flex', alignItems: 'center' }">
            <img
              class="img"
              :src="require('@/assets/logo/ItudyLogo.png')"
              alt=""
          /></nuxt-link>

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
          <button
            v-if="!$store.state.user.online"
            id="loginButton"
            @click="popDown(false)"
          >
            <span id="loginText">로그인</span>
          </button>
          <nuxt-link to="/myinfo/" v-else>
            <span class="material-icons link-right">account_circle</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div id="popup" v-if="popup && !this.$store.state.user.snsLoginFlag">
      <Popup
        :title="'LOGIN'"
        @popDown="popDown(true)"
        :width="400"
        :height="200"
      >
        <div id="popupContent" slot="content">
          <img
            :src="require('@/assets/img/kakao_login_large_narrow.png')"
            alt=""
            :style="{ width: '100%', cursor: 'pointer' }"
            @click="kakaoLogin"
          />
          <img
            :src="
              require('@/assets/img/btn_google_signin_dark_normal_web@2x.png')
            "
            alt=""
            :style="{ width: '100%', marginTop: '20px', cursor: 'pointer' }"
          />
        </div>
      </Popup>
    </div>
    <nuxt></nuxt>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextVue from '~/components/TextVue.vue'
import Popup from '~/components/Popup.vue'
export default Vue.extend({
  name: 'IndexPage',
  computed: {
    snsLoginCheck() {
      return this.$store.getters['user/getSnsFlag']
    },
  },
  methods: {
    test() {
      console.log('jello')
    },
    kakaoLogin() {
      window.open(
        'http://api.i-tudy.com/oauth2/authorization/kakao',
        '카카오 로그인',
        'width=600, height=700, left=420, top:471,toolbar=no, menubar=no, scrollbars=no, resizable=no'
      )
    },
    popDown(popup: boolean) {
      console.log('clicked')
      if (!popup) {
        this.$data.popup = true
        document.body.style.overflow = 'hidden'
      } else {
        this.$data.popup = false
        document.body.style.overflow = 'auto'
      }
    },
  },
  created() {},
  components: {
    TextVue,
    Popup,
  },
  data() {
    return {
      popup: false,
    }
  },
  watch: {
    snsLoginCheck(value) {
      if (value) {
        document.body.style.overflow = 'auto'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
#container {
  position: relative;
}

#popup {
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;

  #popupContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
}
#navbarWrapper {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e1e1e1;
}
#navbar {
  width: 1100px;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  &.infinity {
    padding: 0;
  }
  #left {
    display: flex;
    gap: 25px;
    align-items: center;

    .img {
      width: 150px;
      cursor: pointer;
    }
    .link {
      font-size: 17px;
      color: #050a30;
      font-family: bold;
      &:hover {
        color: #4f56f3;
      }
      transition: all 200ms ease;
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

    #loginButton {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      width: 60px;
      border: 1px solid #9a9ab0;
      border-radius: 15px;
      background-color: white;
      #loginText {
        font-size: 12px;
        font-family: regular;
        color: #9a9ab0;
      }
      transition: all 200ms ease;
      &:hover {
        border-color: #4f56f3;
        background-color: #4f56f3;

        #loginText {
          color: white;
        }
      }
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
