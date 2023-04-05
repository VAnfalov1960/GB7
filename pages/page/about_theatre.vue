<template>
  <div>
    <Header />
    <Breadcrumbs title="О кинотеатре" />
    <section class="pt-0">
      <div
        class="full-banner parallax text-center p-left"
        v-bind:style="{ 'background-image': `url(${imagepath1})` }"
      >
        <img :src="imagepath" alt class="bg-img d-none" />
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="banner-contain">
                <h2>{{title}}</h2>
                <h3>{{subtitle}}</h3>
                <h4>{{text}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-section">
              <img :src="aboutbanner" class="img-fluid" alt />
            </div>
          </div>
          <div class="col-sm-12">
            <h4>{{aboutTitle}}</h4>
            <p>{{aboutText}}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="team section-b-space ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2>Наши актёры</h2>
            <div v-swiper:mySwiper2="swiperOption2">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(team, index) in teams" :key="index">
                  <div>
                    <div>
                      <img :src="team.imagepath" class="img-fluid" alt />
                    </div>
                    <h4>{{team.name}}</h4>
                    <h6>{{team.post}}</h6>
                  </div>
                </div>
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
  import Header from "../../components/header/header1";
  import Footer from '../../components/footer/footer'
  import Breadcrumbs from '../../components/widgets/breadcrumbs'
  import Banner from "../../components/widgets/banner";
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs,
      Banner
    },
    data() {
      return {
        imagepath1: require('@/assets/images/parallax/r1.jpg'),
        imagepath2: require('@/assets/images/parallax/r2.jpg'),
        imagepath3: require('@/assets/images/parallax/r3.jpg'),
        title: 'Луч',
        subtitle: 'Познавательно-развлекательные программы',
        text: 'для детей дошкольного возраста',

        swiperOption2: {
          slidesPerView: 4,
          spaceBetween: 20,
          breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            420: {
              slidesPerView: 1,
              spaceBetween: 20
            }
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        teams: [
          {
            imagepath: require('@/assets/images/team/1.jpg'),
            name: 'Татьяна',
            post: 'актёр'
          },
          {
            imagepath: require('@/assets/images/team/2.jpg'),
            name: 'Виолетта',
            post: 'актёр'
          },
          {
            imagepath: require('@/assets/images/team/3.jpg'),
            name: 'Ирина',
            post: 'актёр'
          },
          {
            imagepath: require('@/assets/images/team/7.jpg'),
            name: 'Александра',
            post: 'актёр'
          }
        ],
        aboutbanner: require('@/assets/images/about/10.jpg'),
        aboutTitle:
          '"Спасательная экспедиция"',
        aboutText:
          'Фрагмент физкультминутки'
      }
    }
  }
</script>
