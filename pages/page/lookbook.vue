<template>
  <div>
    <Header />
    <Breadcrumbs title="Наши актёры" />
    <section class="lookbook section-b-space ratio_square">
      <div class="container">
        <div class="row">
          <div class="col-md-12" v-for="(item, index) in items" :key="index">
            <div class="lookbook-block">
              <div>
                <img
                  :src="item.imagepath"
                  class="img-fluid"
                  alt
                />
              </div>
              <div class="lookbook-dot">
                <span>Виолетта</span>
                <!-- <a href="#"> -->
                  <div class="dot-showbox">
                    <img :src="item.pro1image" class="img-fluid" alt />
                    <div class="dot-info">
                      <h5 class="title">{{item.pro1title}}</h5>
                      <h5>{{item.pro1price}}</h5>
                    </div>
                  </div>
                <!-- </a> -->
              </div>
              <div class="lookbook-dot dot2">
                <span>Ирина</span>
                <!-- <a href="#"> -->
                  <div class="dot-showbox">
                    <img :src="item.pro2image" class="img-fluid" alt />
                    <div class="dot-info">
                      <h5 class="title">{{item.pro2title}}</h5>
                      <h5>{{item.pro2price}}</h5>
                    </div>
                  </div>
                <!-- </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Header from '../../components/header/header1'
  import Footer from '../../components/footer/footer'
  import Breadcrumbs from '../../components/widgets/breadcrumbs'
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs
    },
    data() {
      return {
        items: [
          {
            imagepath: require('@/assets/images/theatre/r/r1.jpg'),
            pro1image: require('@/assets/images/theatre/2004_z1.jpg'),
            pro1title: 'Виолетта',
            pro1price: '',
            pro1link: '/home',
            pro2image: require('@/assets/images/theatre/2004_z2.jpg'),
            pro2title: 'Ирина',
            pro2price: '',
            pro2link: '/home'
       
          }
        ]
      }
    }
  }
</script>
