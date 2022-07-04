export default function ({ store, redirect }: { store: any; redirect: any }) {
  if (store.state.user.accessToken.length === 0) {
    redirect('/')
  }
}
