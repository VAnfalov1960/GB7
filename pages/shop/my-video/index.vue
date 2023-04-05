<template>
  <div class="container-fluid layout-8">
    <Header />
    <Breadcrumbs title="Видеосъёмка" />
    <h1 hidden="true">Видеосъёмка</h1>
    <PedDopObr2023 />
    <!-- <DtdmNewYear2023 /> -->
    <!-- <DetSadNewYear2023 /> -->
    <!-- <Form /> -->
    <Footer />

  </div>
</template>
<script>
  import { mapState } from "vuex";
  import Header from "../../../components/header/header1";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  import Footer from "../../../components/footer/footer";
  import quickviewModel from "../../../components/widgets/quickview";
  import compareModel from "../../../components/widgets/compare-popup";
  import cartModel from "../../../components/cart-model/cart-modal-popup";
  import relatedProduct from "../../../components/widgets/related-products";
  import Form from "../../../components/widgets/form1";
  import PedDopObr2023 from "./components/ped_dop_obr_2023";
  import DtdmNewYear2023 from "./components/dtdm_new_year_2023";
  import DetSadNewYear2023 from "./components/det_sad_new_year_2023";
  

  export default {
    components: {
      Header,
      Breadcrumbs,
      Footer,
      quickviewModel,
      compareModel,
      cartModel,
      relatedProduct,
      Form,
      DetSadNewYear2023,
      DtdmNewYear2023,
      PedDopObr2023
    },
    data() {
      return {
        products: [],
        category: [],
        showquickviewmodel: false,
        showcomparemodal: false,
        showcartmodal: false,
        quickviewproduct: {},
        comapreproduct: {},
        cartproduct: {}
      };
    },
    computed: {
      ...mapState({
        productslist: state => state.products.productslist
      })
    },
    mounted() {
      this.productsArray();
    },
    methods: {
      productsArray: function() {
        this.productslist.map(item => {
          if (item.type === "кино и театр") {
            this.products.push(item);
            item.collection.map(i => {
              const index = this.category.indexOf(i);
              if (index === -1) this.category.push(i);
            });
          }
        });
      },
      showQuickview(item, productData) {
        this.showquickviewmodel = item;
        this.quickviewproduct = productData;
      },
      showCoampre(item, productData) {
        this.showcomparemodal = item;
        this.comapreproduct = productData;
      },
      closeCompareModal(item) {
        this.showcomparemodal = item;
      },
      showCart(item, productData) {
        this.showcartmodal = item;
        this.cartproduct = productData;
      },
      closeCartModal(item) {
        this.showcartmodal = item;
      }
    }
  };
</script>
