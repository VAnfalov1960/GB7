<template>
  <div>
    <b-modal
      id="modal-compare"
      size="lg"
      centered
      title="Compare"
      :hide-footer="true"
      :hide-header="true"
      v-if="openCompare"
    >
      <div class="row compare-modal">
        <div class="col-lg-12">
          <button class="close" type="button" href="javascript:void(0)" @click="closeCompare(openCompare)">
            <span>×</span>
          </button>
          <div class="media">
            <img
              :src="getImgUrl(productData.images[0].src)"
              class="img-fluid"
              :alt="productData.images[0].alt"
            />
            <div class="media-body align-self-center text-center">
              <h5>
                <i class="fa fa-check"></i>Товар
                <span>{{productData.title}}</span>
                <span>успешно добавлен в ваш список сравнения</span>
              </h5>
              <div class="buttons d-flex justify-content-center">
                <nuxt-link
                  :to="{ path: '/page/compare/compare-1'}"
                  class="btn-sm btn-solid"
                  style="border: 1px solid white; border-radius: 10px;"
                >Просмотр списка сравнения</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
  export default {
    props: ["openCompare", "productData"],
    methods: {
      // Get Image Url
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      },
      closeCompare(val) {
        val = false;
        this.$emit("closeCompare", val);
      }
    }
  };
</script>
