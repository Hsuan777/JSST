<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-primary font-weight-bold">
      <div class="container">
        <router-link to="/" class="navbar-brand text-primary">
          <h1 class="h2 d-flex align-items-center">
            admin
          </h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">產品管理</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- router-link的頁面會被放入 router-view -->
    <router-view :token="token.api_token" v-if="checkSucces" />

    <!-- signout Modal -->
    <div
      class="modal fade"
      id="signoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title font-weight-bold">是否登出 ?</h5>
            <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action>
              <div class="d-flex justify-content-around">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="signout"
                  data-dismiss="modal"
                >登出</button>
                <button type="button" class="btn btn-outline-secondary text-dark" data-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: {
        api_token: ''
      },
      checkSucces: false
    }
  },
  methods: {
    signout (e) {
      e.preventDefault()
      // 將存放在瀏覽器的 cookie清空
      document.cookie = 'hexToken=; expires=; path=/'
      this.$router.push('/')
    },
    checkToken () {
      const vm = this
      // eslint-disable-next-line
      vm.token.api_token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, '$1')
      if (vm.token.api_token === '') {
        vm.$router.push('/')
      } else {
        vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`
        vm.axios
          .post(`${process.env.VUE_APP_APIPATH}auth/check`, vm.token)
          .then((res) => {
            vm.checkSucces = true
          })
          .catch(() => vm.$router.push('/'))
      }
    }
  },
  created () {
    this.checkToken()
  }
}
</script>
