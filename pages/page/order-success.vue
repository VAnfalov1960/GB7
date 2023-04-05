<template>
  <div>
    <Header />
    <section class="p-0" v-if="order==''">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="error-section">
              <h1>404</h1>
              <h2>страница не найдена</h2>
              <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'">вернуться домой</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- thank-you section start -->
    <section class="section-b-space light-layout" v-if="order!=''">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="success-text">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              <h2>спасибо</h2>
              <p>Оплата успешно произведена, и ваш заказ уже в пути</p>
              <p>Идентификатор транзакции (ID):{{order.token}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <!-- order-detail section start -->
    <section class="section-b-space" v-if="order!=''">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product-order">
              <h3>детали вашего заказа</h3>
              <div
                class="row product-order-detail"
                v-for="(item,index) in order.product"
                :key="index"
              >
                <div class="col-3">
                  <img :src="getImgUrl(item.images[0].src)" alt class="img-fluid" />
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>название продукта</h4>
                    <h5>{{item.title}}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>количество</h4>
                    <h5>{{item.quantity}}</h5>
                  </div>
                </div>
                <div class="col-3 order_detail">
                  <div>
                    <h4>цена</h4>
                    <h5>{{ item.price * item.quantity }} руб.</h5>
                  </div>
                </div>
              </div>
              <div class="total-sec">
                <ul>
                  <li>
                    Итого
                    <span>{{ cartTotal }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row order-success-sec">
              <div class="col-sm-6">
                <h4>summery</h4>
                <ul class="order-detail">
                  <li>order ID: {{order.token}}</li>
                  <li>Order Date: April 1, 2023</li>
                  <li>Order Total: {{ cartTotal }}</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h4>shipping address</h4>
                <ul class="order-detail">
                  <li>адрес доставки</li>
                  <li>568, suite ave.</li>
                  <li>Austrlia, 235153</li>
                  <li>Contact No. 987456321</li>
                </ul>
              </div>
              <div class="col-sm-12 payment-mode">
                <h4>способ оплаты</h4>
                <p>Оплата при доставке (Наличными/Картой). Возможна наложенный платеж (наложенный платеж). Прием банковских карт/нетто-банкинга зависит от наличия устройства.</p>
              </div>
              <div class="col-md-12">
                <div class="delivery-sec">
                  <h3>ожидаемая дата доставки</h3>
                  <h2>october 22, 2020</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <Footer />
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import Header from "../../components/header/header1";
  import Footer from "../../components/footer/footer";
  export default {
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapGetters({
        order: "products/getOrder",
        cartTotal: "cart/cartTotalAmount",
        curr: "products/changeCurrency"
      })
    },
    methods: {
      getImgUrl(path) {
        return require("@/assets/images/" + path);
      }
    }
  };
</script>
