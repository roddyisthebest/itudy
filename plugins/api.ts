export default function ({
  $axios,
  redirect,
  store,
}: {
  $axios: any
  redirect: any
  store: any
}) {
  $axios.onRequest((config: any) => {
    console.log(store.state.user)
    $axios.setToken(store.state.user.accessToken, 'Bearer')
    return config
  })
}
