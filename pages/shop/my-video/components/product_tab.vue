<template>
  <div>
    <h2 hidden="true">Коллекция товаров и услуг</h2>
    <section class="section-b-space ratio_square">
      <div class="container-fluid">
        <div class="title2">
          <h4>{{subtitle}}</h4>
          <h3 class="title-inner2">{{title}}</h3>
        </div>
        <div class="row">
          <div class="col">
            <div class="theme-tab layout7-product">
              <b-tabs content-class="mt-3">
                <b-tab :title="collection" v-for="(collection,index) in category" :key="index">
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in getCategoryProduct(collection)"
                      :key="index"
                    >
                      <productBox1
                        @opencartmodel="showCartModal"
                        @showCompareModal="showcomparemodal"
                        @openquickview="showquickview"
                        @showalert="alert"
                        @alertseconds="alert"
                        :product="product"
                        :index="index"
                      />
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p style="color: red">Товар успешно добавлен в ваш список желаний.</p>
    </b-alert>
  </div>
</template>
<script type="text/javascript">
  import productBox1 from "../../../../components/product-box/product-box1";
  export default {
    props: ["products", "category"],
    components: {
      productBox1
    },
    data() {
      return {
        subtitle:
          "кино и театр",
        title: "познавательно-развлекательные программы",
        showCart: false,
        showquickviewmodel: false,
        showcomapreModal: false,
        quickviewproduct: {},
        comapreproduct: {},
        cartproduct: {},
        dismissSecs: 5,
        dismissCountDown: 0
      };
    },
    methods: {
      getCategoryProduct(collection) {
        return this.products.filter(item => {
          if (item.collection.find(i => i === collection)) {
            return item;
          }
        });
      },
      alert(item) {
        this.dismissCountDown = item;
      },
      showCartModal(item, productData) {
        this.showCart = item;
        this.cartproduct = productData;
        this.$emit("openCart", this.showCart, this.cartproduct);
      },
      showquickview(item, productData) {
        this.showquickviewmodel = item;
        this.quickviewproduct = productData;
        this.$emit(
          "openQuickview",
          this.showquickviewmodel,
          this.quickviewproduct
        );
      },
      showcomparemodal(item, productData) {
        this.showcomapreModal = item;
        this.comapreproduct = productData;
        this.$emit("openCompare", this.showcomapreModal, this.comapreproduct);
      }
    }
  };
</script>
