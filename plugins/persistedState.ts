import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req }: { store: any; req: any }) => {
  createPersistedState({
    paths: ['user'],
    storage: {
      getItem: (key) => {
        if (process.server) {
          console.log(req.headers.cookie)

          let headerCookie = req.headers.cookie
          if (typeof headerCookie !== 'string') {
            headerCookie = ''
          }
          const parsedCookies = cookie.parse(headerCookie)
          return parsedCookies[key]
        } else {
          return Cookies.get(key)
        }
      },
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: false }),

      removeItem: (key) => Cookies.remove(key),
    },
  })(store)
}
