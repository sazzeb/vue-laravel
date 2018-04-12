<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal">Intro Company</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-dark" href="#">Features</a>
      <router-link
      to="/feed"
      v-if=" isAuth "
      class="p-2 text-dark" x>
      Feed
      </router-link>
      <a class="p-2 text-dark" href="#">Support</a>
      <a class="p-2 text-dark" href="#">Pricing</a>
  </nav>
  <router-link
    to="/products/create"
    v-if=" isAuth "
    class="btn btn-outline-primary" style="margin-right:10px;">
    Create
    </router-link>
  <router-link
    to="/logout"
    v-if=" isAuth "
    class="btn btn-outline-primary" style="margin-right:10px;">
    Logout
    </router-link>
    <router-link
    to="/login"
    v-if=" ! isAuth "
    class="btn btn-outline-primary" style="margin-right:10px;">
    Login
    </router-link>
    <router-link
    v-if=" ! isAuth "
    to="/register"
    class="btn btn-outline-primary" style="margin-right:10px;">
    Register
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAuth: null
    }
  },
  created () {
    this.isAuth = this.$auth.isAuthenticated()
    this.setAuthenticatedUser()
  },
  methods: {
    setAuthenticatedUser () {
      this.$http.get('api/user')
        .then(response => {
          this.$auth.setAuthenticatedUser(response.body)
          console.log(this.$auth.getAuthenticatedUser())
        })
    }
  }
}
</script>

<style>

</style>
