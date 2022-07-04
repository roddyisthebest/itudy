import { ActionContext } from 'vuex'

interface info {
  idx: number | null
  email: string
  imageUrl: string
  nickname: string
  oauth: 'KAKAO' | string
  createdAt: Date
}

interface State {
  info: info | {}
  online: boolean
  snsLoginFlag: boolean
  refreshToken: string
  accessToken: string
}
export const state = () => ({
  info: {},
  online: false,
  snsLoginFlag: false,
  refreshToken: '',
  accessToken: '',
})

export const mutations = {
  login(state: State, payload: { refresh: string; access: string }) {
    // state.info = payload
    state.online = true
    state.snsLoginFlag = true
    state.refreshToken = payload.refresh
    state.accessToken = payload.access
    console.log(payload)
  },
  logout(state: State) {
    state.info = {}
    state.online = false
  },
  setInfo(state: State, payload: { info: info }) {
    state.info = payload.info
  },
}

export const getters = {
  getSnsFlag(state: State) {
    return state.snsLoginFlag
  },
}
// export const actions = {
//   async login({ commit }) {
//     const {data} =await
//   },
// }
