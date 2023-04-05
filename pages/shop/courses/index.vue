<template>
  <div class="container-fluid layout-8">
    <Header />
    <Breadcrumbs title="Курсы" />
    <h1 hidden="true">Курсы</h1>
    <!-- <Slider /> -->
    <!-- <CollectionBanner /> -->
    <div class="layout-8-bg">
      <ProductTab
        :products="products"
        :category="category"
        @openQuickview="showQuickview"
        @openCompare="showCoampre"
        @openCart="showCart"
      />
    </div>
    <!-- Сопутствующие товары -->
    <!-- <relatedProduct :productTYpe="productTYpe" :productId="productId" /> -->
    <!-- <Form /> -->
    <Footer />
    <!-- Добавляет товар в корзину -->
    <cartModel
      :openCart="showcartmodal"
      :productData="cartproduct"
      @closeCart="closeCartModal"
      :products="products"
    />
    <!-- Внимание! Добавляет товар в список желаний находится в product_tab -->
    <!-- Быстрый просмотр -->
    <quickviewModel :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <!-- Добавляет товар в список сравнения -->
    <compareModel
      :openCompare="showcomparemodal"
      :productData="comapreproduct"
      @closeCompare="closeCompareModal"
    />
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
  import Slider from "./components/slider";
  import CollectionBanner from "./components/collection_banner";
  import ProductTab from "./components/product_tab";
  import relatedProduct from "../../../components/widgets/related-products";
  import Form from "../../../components/widgets/form1";

  export default {
    components: {
      Header,
      Breadcrumbs,
      Slider,
      CollectionBanner,
      ProductTab,
      Footer,
      quickviewModel,
      compareModel,
      cartModel,
      relatedProduct,
      Form
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
          if (item.type === "курсы") {
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
