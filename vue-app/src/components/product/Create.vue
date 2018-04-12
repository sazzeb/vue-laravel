<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent='create'>
            <div class="input-group mb-3">
              <input type="file" class="form-control"
                aria-label="Amount (to the nearest dollar)"
                @change="imageChanged"><div class="input-group-prepend">
                <span class="input-group-text">Upload file</span>
              </div>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Name:</span>
              </div>
              <input type="text"
                class="form-control"
                name="name"
                v-model="product.name"
                v-validate="'required'"
                aria-label="Amount (to the nearest dollar)">

            </div>
            <div  class=" alert alert-danger"
                  v-show="errors.has('name')">
                  {{errors.first('name')}}
                </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" type="number">Price:</span>
              </div>
              <input type="text" name="price"
              class="form-control"
              v-model="product.price"
              v-validate="'min_value:1|max_value:50'"
              aria-label="Amount (to the nearest dollar)">
            </div>
            <div  class=" alert alert-danger"
                  v-show="errors.has('price')">
                  {{errors.first('price')}}
                </div>

            <div class="input-group mb-3">
              <textarea type="text" cols="10" rows="5"
              v-model="product.description"
              class="form-control"
              aria-label="Amount (to the nearest dollar)"></textarea>
            </div>
            <div class="input-group">
              <div class="input-group-append">
                <input class="btn btn-outline-secondary pull-right"
                @click="create"
                value="Create"
                type="button">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        name: '',
        price: 0,
        description: '',
        image: ''
      }
    }
  },
  methods: {
    imageChanged (e) {
      console.log(e.target.files[0])
      var fileReader = new FileReader()
      fileReader.readAsDataURL(e.target.files[0])
      fileReader.onload = (e) => {
        this.product.image = e.target.result
      }
      console.log(this.product)
    },
    create () {
      this.$validator.validateAll().then(() => {
        this.$http.post('api/products', this.product)
          .then(response => {
            this.$router.push('/feed')
          })
      })
    }
  }
}
</script>
