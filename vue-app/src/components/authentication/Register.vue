<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="form-group">
          <input
          v-model="name"
          class="form-control"
          type="text"
          placeholder="Your Full name">
        </div>
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
        <button type="button" class="btn btn-outline-secondary btn-lg">Dark</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  }
}
</script>
<style>
.redgar {
  background-color: gray;
}
</style>
