<template>
  <div>
    <Header />
    <Breadcrumbs title="Моё портфолио" />
    <section class="filter-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="title1">
              <h2 class="title-inner1">Моё портфолио</h2>
            </div>
            <div class="filter-container isotopeFilters">
              <ul class="list-inline filter">
                <li :class="{ active: isActive('all') }">
                  <a href="javascript:void(0)" @click="updateFilter('all')">Все</a>
                </li>
                <li :class="{ active: isActive('category1') }">
                  <a href="javascript:void(0)" @click="updateFilter('category1')">Дипломы</a>
                </li>
                <li :class="{ active: isActive('category2') }">
                  <a href="javascript:void(0)" @click="updateFilter('category2')">Удостоверения</a>
                </li>
                <li :class="{ active: isActive('category3') }">
                  <a href="javascript:void(0)" @click="updateFilter('category3')">Обучение</a>
                </li>
                <li :class="{ active: isActive('category4') }">
                  <a href="javascript:void(0)" @click="updateFilter('category4')">Прочие</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="portfolio-section portfolio-padding pt-0 port-col zoom-gallery">
      <div class="container-fluid">
        <no-ssr>
          <div
            v-masonry
            transition-duration="3s"
            item-selector=".item"
            class="masonry-container isotopeContainer row"
          >
            <div
              v-masonry-tile
              class="col-sm-2 isotopeSelector item"
              :key="index"
              v-for="(item, index) in filteredImages"
            >
              <div class="overlay">
                <div v-if="item.imagepathsmall" class="border-portfolio">
                  <a v-if="item.imagepath" :title="item.title" :href="item.imagepath" target="_blank">
                    <!-- <div class="overlay-background"></div> -->
                    <img :src="item.imagepathsmall" class="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </no-ssr>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
  import NoSSR from "vue-no-ssr";
  import Header from "../../../components/header/header1";
  import Footer from "../../../components/footer/footer";
  import Breadcrumbs from "../../../components/widgets/breadcrumbs";
  export default {
    components: {
      Header,
      Footer,
      Breadcrumbs,
      "no-ssr": NoSSR
    },
    data() {
      return {
        galleryFilter: "category1",
        imagearray: [
          {
            id: 1001,
            title: "Методист онлайн образования",
            alt: "диплом",
            filter: "category1",
            imagepathsmall: require("@/assets/images/diploma/1001small.jpg"),
            imagepath: require("@/assets/images/diploma/1001.jpg")
          },
          {
            id: 1002,
            title: "Педагог среднего профессионального образования",
            alt: "диплом",
            filter: "category1",
            imagepathsmall: require("@/assets/images/diploma/1002small.jpg"),
            imagepath: require("@/assets/images/diploma/1002.jpg")
          },
          {
            id: 1003,
            title: "Учитель математики и информатики",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1003small.jpg"),
            imagepath: require("@/assets/images/diploma/1003.jpg")
          },
          {
            id: 1006,
            title: "Педагогика дополнительного образования детей и взрослых",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1006small.jpg"),
            imagepath: require("@/assets/images/diploma/1006.jpg")
          },
          {
            id: 1007,
            title: "Воспитатель (включая старшего)",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1007small.jpg"),
            imagepath: require("@/assets/images/diploma/1007.jpg")
          },
          {
            id: 1008,
            title: "Воспитатель детей дошкольного возраста с отклонениями в развитии",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1008small.jpg"),
            imagepath: require("@/assets/images/diploma/1008.jpg")
          },
          {
            id: 1009,
            title: "Учитель информатики",
            alt: "диплом",
            filter: "category1",
            imagepathsmall: require("@/assets/images/diploma/1009small.jpg"),
            imagepath: require("@/assets/images/diploma/1009.jpg")
          },
          {
            id: 1014,
            title: "Применение облачных сервисов",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1014small.jpg"),
            imagepath: require("@/assets/images/diploma/1014.jpg")
          },
          {
            id: 1015,
            title: "Компьютерная зависимость",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1015small.jpg"),
            imagepath: require("@/assets/images/diploma/1015.jpg")
          },
          {
            id: 1017,
            title: "Профориентация школьников",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1017small.jpg"),
            imagepath: require("@/assets/images/diploma/1017.jpg")
          },
          {
            id: 1018,
            title: "Базовые технологии графического дизайна",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1018small.jpg"),
            imagepath: require("@/assets/images/diploma/1018.jpg")
          },
          {
            id: 1019,
            title: "Создание и развитие персонального сайта учителя",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1019small.jpg"),
            imagepath: require("@/assets/images/diploma/1019.jpg")
          },
          {
            id: 1020,
            title: "Современные подходы к организации дополнительного образования детей в условиях очного и дистанционного обучения",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1020small.jpg"),
            imagepath: require("@/assets/images/diploma/1020.jpg")
          },
          {
            id: 1021,
            title: "Методика организации театрализованной деятельности",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1021small.jpg"),
            imagepath: require("@/assets/images/diploma/1021.jpg")
          },
          {
            id: 1022,
            title: "Теория и практика психологического консультирования в сексологии",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1022small.jpg"),
            imagepath: require("@/assets/images/diploma/1022.jpg")
          },
          {
            id: 1023,
            title: "Компьютерная зависимость",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1023small.jpg"),
            imagepath: require("@/assets/images/diploma/1023.jpg")
          },
          {
            id: 1024,
            title: "Использование гелотологии (смехотерапии) в практической деятельности психолога",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1024small.jpg"),
            imagepath: require("@/assets/images/diploma/1024.jpg")
          },
          {
            id: 1025,
            title: "Основы блогинга",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1025small.jpg"),
            imagepath: require("@/assets/images/diploma/1025.jpg")
          },
          {
            id: 1027,
            title: "Ментальная арифметика",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1027small.jpg"),
            imagepath: require("@/assets/images/diploma/1027.jpg")
          },
          {
            id: 1028,
            title: "Использование сказкотерапии с тревожными детьми",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1028small.jpg"),
            imagepath: require("@/assets/images/diploma/1028.jpg")
          },
          {
            id: 1029,
            title: "Видеотехнологии и мультипликация",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1029small.jpg"),
            imagepath: require("@/assets/images/diploma/1029.jpg")
          },
          {
            id: 1030,
            title: "Основы издания детских книг",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1030small.jpg"),
            imagepath: require("@/assets/images/diploma/1030.jpg")
          },
          {
            id: 1031,
            title: "Детская журналистика",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1031small.jpg"),
            imagepath: require("@/assets/images/diploma/1031.jpg")
          },
          {
            id: 1032,
            title: "Функциональная грамотность школьников",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1032small.jpg"),
            imagepath: require("@/assets/images/diploma/1032.jpg")
          },
          {
            id: 1033,
            title: "Особенности взаимодействия с леворукими детьми",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1033small.jpg"),
            imagepath: require("@/assets/images/diploma/1033.jpg")
          },
          {
            id: 1034,
            title: "Технология использования робототехники",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1034small.jpg"),
            imagepath: require("@/assets/images/diploma/1034.jpg")
          },
          {
            id: 1035,
            title: "Работа с использованием российского программного обеспечения",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1035small.jpg"),
            imagepath: require("@/assets/images/diploma/1035.jpg")
          },
          {
            id: 1038,
            title: "Гражданская оборона и защита от чрезвычайных ситуаций природного и техногенного характера",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1038small.jpg"),
            imagepath: require("@/assets/images/diploma/1038.jpg")
          },
          {
            id: 1039,
            title: "Психолого-педагогическое слпровождение детей с синдромом дефицита внимания",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1039small.jpg"),
            imagepath: require("@/assets/images/diploma/1039.jpg")
          },
          {
            id: 1040,
            title: "Охрана труда",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1040small.jpg"),
            imagepath: require("@/assets/images/diploma/1040.jpg")
          },
          {
            id: 1041,
            title: "Телеведущий",
            alt: "удостоверение",
            filter: "category2",
            imagepathsmall: require("@/assets/images/diploma/1041small.jpg"),
            imagepath: require("@/assets/images/diploma/1041.jpg")
          },
          {
            id: 1101,
            title: "Директор театра",
            alt: "диплом",
            filter: "category1",
            imagepathsmall: require("@/assets/images/diploma/1101small.jpg"),
            imagepath: require("@/assets/images/diploma/1101.jpg")
          },
          {
            id: 1102,
            title: "Руководитель театрального коллектива",
            alt: "диплом",
            filter: "category1",
            imagepathsmall: require("@/assets/images/diploma/1102small.jpg"),
            imagepath: require("@/assets/images/diploma/1102.jpg")
          },
          {
            id: 1201,
            title: "Режиссер монтажа",
            alt: "диплом",
            filter: "category1",
            imagepathsmall: require("@/assets/images/diploma/1201small.jpg"),
            imagepath: require("@/assets/images/diploma/1201.jpg")
          },
          {
            id: 1202,
            title: "Корреспондент",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1202small.jpg"),
            imagepath: require("@/assets/images/diploma/1202.jpg")
          },
          {
            id: 1302,
            title: "Системный администратор",
            alt: "диплом",
            filter: "category1",
            imagepathsmall: require("@/assets/images/diploma/1302small.jpg"),
            imagepath: require("@/assets/images/diploma/1302.jpg")
          },
          {
            id: 1303,
            title: "Системный аналитик",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1303small.jpg"),
            imagepath: require("@/assets/images/diploma/1303.jpg")
          },
          {
            id: 1304,
            title: "Менеджер по продажам информационно-коммуникационных систем",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1304small.jpg"),
            imagepath: require("@/assets/images/diploma/1304.jpg")
          },
          {
            id: 1305,
            title: "Таргетолог",
            alt: "диплом",
            filter: "category3",
            imagepathsmall: require("@/assets/images/diploma/1305small.jpg"),
            imagepath: require("@/assets/images/diploma/1305.jpg")
          },
          {
            id: 1402,
            title: "Кинотехник",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1402small.jpg"),
            imagepath: require("@/assets/images/diploma/1402.jpg")
          },
          {
            id: 1403,
            title: "Аттестационный лист I категория",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1403small.jpg"),
            imagepath: require("@/assets/images/diploma/1403.jpg")
          },
          {
            id: 1404,
            title: "Электромонтёр-ремонтник",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1404small.jpg"),
            imagepath: require("@/assets/images/diploma/1404.jpg")
          },
          {
            id: 1405,
            title: "Киномеханик",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1405small.jpg"),
            imagepath: require("@/assets/images/diploma/1405.jpg")
          },
          {
            id: 1406,
            title: "Пользователь ПК",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1406small.jpg"),
            imagepath: require("@/assets/images/diploma/1406.jpg")
          },
          {
            id: 1407,
            title: "Режиссёр монтажа телевизионных программ",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1407small.jpg"),
            imagepath: require("@/assets/images/diploma/1407.jpg")
          },
          {
            id: 1408,
            title: "Стропальщик",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1408small.jpg"),
            imagepath: require("@/assets/images/diploma/1408.jpg")
          },
          {
            id: 1409,
            title: "Пожарная безопасность директор",
            alt: "диплом",
            filter: "category4",
            imagepathsmall: require("@/assets/images/diploma/1409small.jpg"),
            imagepath: require("@/assets/images/diploma/1409.jpg")
          }

        ]
      };
    },
    computed: {
      filteredImages: function() {
        if (this.galleryFilter === "all") {
          return this.imagearray;
        } else {
          return this.imagearray.filter(
            data => data.filter === this.galleryFilter
          );
        }
      }
    },
    mounted() {
      if (typeof this.$redrawVueMasonry === "function") {
        this.$redrawVueMasonry();
      }
    },
    methods: {
      isActive: function(menuItem) {
        return this.galleryFilter === menuItem;
      },
      updateFilter(filterName) {
        this.galleryFilter = filterName;
      }
    }
  };
</script>
