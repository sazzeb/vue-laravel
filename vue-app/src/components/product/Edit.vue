<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card">
        <div class="card-body">

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
              v-model="product.name"
              aria-label="Amount (to the nearest dollar)">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" type="number">Price:</span>
            </div>
            <input type="text"
            class="form-control"
            v-model="product.price"
            aria-label="Amount (to the nearest dollar)">
          </div>
          <div class="input-group mb-3">
            <textarea type="text" cols="10" rows="5"
            v-model="product.description"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"></textarea>
          </div>

          <div class="input-group">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary text-right"
              @click="update"
              v-show="product.name && product.price && product.description"
              type="button">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  created () {
    this.getProduct()
  },
  data () {
    return {
      product: { }
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
    getProduct () {
      this.$http.get('api/products/' + this.$route.params.product)
        .then(response => {
          this.product = response.body
        })
    },
    update () {
      this.$http.put('api/products/' + this.$route.params.product, this.product)
        .then(response => {
          swal('Updated!', 'Your product has been updated successfully', 'success')
        })
    }
  }
}
</script>
