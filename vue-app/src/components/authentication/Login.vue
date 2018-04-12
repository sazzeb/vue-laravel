<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="form-group">
          <input
          v-model="email"
          class="form-control"
          type="email"
          placeholder="Enter your email">
        </div>
        <div class="form-group">
          <input
          v-model="password"
          class="form-control"
          type="password"
          placeholder="Enter correct password">
        </div>
        <button type="button" @click="login" class="btn btn-outline-secondary btn-lg">Login</button>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      var data = {
        client_id: 2,
        client_secret: 'Y6XTGgZzcGMjDW3YXOXUloSYmQYMQsM1cK7Ecaih',
        grant_type: 'password',
        username: this.email,
        password: this.password
      }
      this.$http.post('oauth/token', data)
        .then(response => {
          this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
          this.$router.push('/feed')
        })
    }
  }
}
</script>
<style >
.redgar {
  background-color: gray;
}
</style>
