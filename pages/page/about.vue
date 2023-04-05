<template>
  <div>
    <Header />
    <h1 hidden="true">О нас (Документы)</h1>
    <Breadcrumbs title="О нас (Документы)" />
    <section class="faq-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="accordion theme-accordion" id="accordionExample">
              <b-card no-body class="mb-1" v-for="(item, index) in accordeon" :key="index">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    href="#"
                    v-b-toggle="'accordion-' + index"
                    variant="info"
                  >{{item.question}}</b-button>
                </b-card-header>
                <b-collapse
                  :id="'accordion-' + index"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      <p style="border-color: transparent" v-if="item.answer">{{item.answer}}</p>
                      <p style="border-color: transparent" v-if="item.answer2">{{item.answer2}}</p>
                      <p style="border-color: transparent" v-if="item.answer3">{{item.answer3}}</p>
                      <p style="border-color: transparent" v-if="item.answer4">{{item.answer4}}</p>
                      <p style="border-color: transparent" v-if="item.answer5">{{item.answer5}}</p>
                      <p style="border-color: transparent" v-if="item.answer6">{{item.answer6}}</p>
                      <p style="border-color: transparent" v-if="item.answer7">{{item.answer7}}</p>
                      <p style="border-color: transparent" v-if="item.answer8">{{item.answer8}}</p>
                      <p style="border-color: transparent" v-if="item.answer9">{{item.answer9}}</p>
                      <p style="border-color: transparent" v-if="item.answer10">{{item.answer10}}</p>
                      <p style="border-color: transparent" v-if="item.answer11">{{item.answer11}}</p>
                      <p style="border-color: transparent" v-if="item.answer12">{{item.answer12}}</p>
                      <p style="border-color: transparent" v-if="item.answer13">{{item.answer13}}</p>
                      <p style="border-color: transparent" v-if="item.answer31">{{item.answer31}}</p>
                      <p style="border-color: transparent" v-if="item.answer32">{{item.answer32}}</p>
                      <p style="border-color: transparent" v-if="item.answer33">{{item.answer33}}</p>
                      <p style="border-color: transparent" v-if="item.answer34">{{item.answer34}}</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
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
  import Footer from "../../components/footer/footer";
  import Breadcrumbs from "../../components/widgets/breadcrumbs";

  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 20,
          breakpoints: {
            991: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }
        },
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
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        },
        accordeon: [
          {
            question: "Название организации",
            answer:
              'Общество с ограниченной ответственностью "Киноконцертный клуб "Луч"',
            diploma_src:
              "https://fs06.infourok.ru/files/kursy/diplomy/PP147415.pdf",
            imgsrc: require("@/assets/images/courses/1000.jpg")
          },
          {
            question: "Дата регистрации",
            answer: "27.04.2005"
          },
          {
            question: "Реквизиты",
            answer31: "ОГРН	1056320105731 от 27 апреля 2005 года",
            answer32: "ИНН 6322032537",
            answer33: "КПП 632401001",
            answer34: "ОКПО 576792357"
          },
          {
            question: "Основной вид деятельности",
            answer: "59.14 Деятельность в области демонстрации кинофильмов"
          },
          {
            question: "Дополнительные ОКВЭД",
            videosrc:
              "https://www.youtube.com/watch?v=N6k7ClfhbEs&ab_channel=%D0%9A%D1%82%D0%BE%D0%B1%D1%8B%D0%BC%D0%BE%D0%B3%D0%BF%D0%BE%D0%B4%D1%83%D0%BC%D0%B0%D1%82%D1%8C%21",
            answer: "62.01 Разработка компьютерного программного обеспечения",
            answer2:
              "62.02	Деятельность консультативная и работы в области компьютерных технологий",
            answer3:
              "62.09	Деятельность, связанная с использованием вычислительной техники и информационных технологий, прочая",
            answer4:
              "63.11	Деятельность по обработке данных, предоставление услуг по размещению информации и связанная с этим деятельность",
            answer5:
              "63.11.1	Деятельность по созданию и использованию баз данных и информационных ресурсов",
            answer6: "85.42	Образование профессиональное дополнительное",
            answer7:
              "85.42.9	Деятельность по дополнительному профессиональному образованию прочая, не включенная в другие группировки",
            answer8: "90.04	Деятельность учреждений культуры и искусства",
            answer9: "93.2	Деятельность в области отдыха и развлечений",
            answer10: "93.29	Деятельность зрелищно-развлекательная прочая",
            answer11: "93.29.2	Деятельность танцплощадок, дискотек, школ танцев",
            answer12:
              "93.29.9	Деятельность зрелищно-развлекательная прочая, не включенная в другие группировки",
            answer13:
              "95.11	Ремонт компьютеров и периферийного компьютерного оборудования"
          },
          {
            question: "Директор",
            answer: "Анфалов Влпдимир Иванович"
          }
        ]
      };
    }
  };
</script>
