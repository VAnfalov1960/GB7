<template>
  <div>
    <b-modal
      id="modal-cart"
      centered
      title="Добавить в корзину"
      :hide-footer="true"
      :hide-header="true"
      v-if="openCart"
    >
      <div class="row cart-modal">
        <div class="col-lg-12">
          <a
            href="javascript:void(0)"
            class="close" type="button" @click="closeCart(openCart)">
            <span>×</span>
          </a>
          <div class="media">
            <img
              :src="getImgUrl(productData.images[0].src)"
              class="img-fluid"
              :alt="productData.images[0].alt"
            />
            <div class="media-body align-self-center text-center">
              <h5>
                <i class="fa fa-check"></i>Товар
                <span> {{productData.title}} </span>
                <span> добавлен в корзину</span>
              </h5>
              <div class="buttons d-flex justify-content-center">
                <nuxt-link
                  :to="{ path: '/page/account/cart'}"
                  class="btn-sm btn-solid mr-2"
                  style="border: 1px solid white; border-radius: 40px;"
                >Просмотр корзины</nuxt-link>
                <nuxt-link
                  :to="{ path: '/page/account/checkout'}"
                  class="btn-sm btn-solid mr-2"
                  style="border: 1px solid white; border-radius: 40px"
                >Оплата</nuxt-link>
                <nuxt-link :to="{ path: '/collection/leftsidebar/'}" class="btn-sm btn-solid" style="border: 1px solid white; border-radius: 40px;">Продолжить покупки</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    props: ["openCart", "productData", "products", "category"],
    computed: {
      ...mapState({
        currency: state => state.products.currency
      }),
      ...mapGetters({
        curr: "products/changeCurrency"
      })
    },
    methods: {
      // Get Image Url
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      closeCart(val) {
        val = false;
        this.$emit("closeCart", val);
      },
      discountedPrice(product) {
        return product.price - (product.price * product.discount) / 100;
      }
    }
  };
</script>
