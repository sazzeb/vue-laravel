<template>
  <div class="container">
    <div class="row">
        <my-product
          v-for="product in products"
          @delete-product = "deleteProduct(product)"
          :product="product"
          :authenticatedUser="authenticatedUser"
          v-bind:key="product.id">
        </my-product>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import swal from 'sweetalert'
export default {
  data () {
    return {
      products: []
    }
  },
  computed: {
    authenticatedUser () {
      return this.$auth.getAuthenticatedUser()
    }
  },
  components: {
    'myProduct': Product
  },
  created () {
    this.$http.get('api/products')
      .then(response => {
        this.products = response.body
      })
  },
  methods: {
    deleteProduct (product) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this product!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$http.delete('api/products/' + product.id)
              .then(response => {
                let index = this.products.indexOf(product)
                this.products.splice(index, 1)
                console.log(response)
                // after deleting from the server(database) it will not not trigger or effect desame change from the domC vue from end) until you refresh your browser.
                // to delete thesame event on the dom you have to trigger an event using emet
              })
            swal('Poof! Your product has been deleted!', {
              icon: 'success'
            })
          } else {
            swal('Your product is safe!')
          }
        })
    }
  }
}
</script>

<style>

</style>
