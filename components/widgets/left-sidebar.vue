<template>
  <div id="mySidenav" class="sidenav" :class="{ openSide:leftSidebarVal }">
    <a class="sidebar-overlay" @click="closeLeftBar(leftSidebarVal)"></a>
    <nav>
      <a @click="closeLeftBar(leftSidebarVal)">
        <div class="sidebar-back text-left">
          <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Назад
        </div>
      </a>
      <!-- Sample menu definition -->
      <ul id="sub-menu" class="sidebar-menu">
        <li>
          <a href="javascript:void(0)" @click="setActive('clothing')">
            Курсы "Педагогика"
            <span class="sub-arrow"></span>
          </a>
          <ul class="mega-menu clothing-menu" :class="{ opensidesubmenu: isActive('clothing') }">
            <li>
              <div class="row m-0">
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Профессиональная ереподготовка</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/metodicheskaya-rabota-v-onlajn-obrazovanii?">Методист онлайн-образования</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/pedagog-srednego-professionalnogo-obrazovaniya-teoriya-i-praktika-realizacii-fgos-novogo-pokoleniya?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Педагог среднего профессионального образования</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/pedagogicheskaya-deyatelnost-po-proektirovaniyu-i-realizacii-obrazovatelnogo-processa-v-obsheobrazovatelnyh-organizaciyah-predmet-matematika-i-informatika?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Учитель математики и информатики</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/pedagogika-dopolnitelnogo-obrazovaniya-detej-i-vzroslyh?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Педагогика дополнительного образования детей и взрослых</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/organizaciya-vospitatelnogo-processa-detej-doshkolnogo-vozrasta-s-uchetom-realizacii-fgos-do?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Воспитатель (включая старшего)</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/inklyuzivnoe-obrazovanie-osobennosti-obucheniya-i-vospitaniya-detej-doshkolnogo-vozrasta?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Воспитатель детей дошкольного возраста с отклонениями в развитии</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Повышение квалификации</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://kursy.org/course/308.html">Профориентация школьников</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/bazovye-tehnologii-graficheskogo-dizajna-programma-redaktor-rastrovoj-grafiki-adobe-photoshop?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Базовые технологии графического дизайна</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/sozdanie-i-razvitie-personalnogo-sajta-uchitelya-v-usloviyah-realizacii-professionalnogo-standarta-pedagoga?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Создание и развитие персонального сайта учителя</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/rabota-s-ispolzovaniem-rossijskogo-programmnogo-obespecheniya-na-primere-operacionnoj-sistemy-linux?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Работа с использованием российского программного обеспечения</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/multiplikaciya-v-srednej-shkole?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Мультипликация в средней школе</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/osnovy-bloginga-specifika-prepodavaniya-kursa-kak-sposoba-razvitiya-kommunikacionnyh-navykov-shkolnikov?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Основы блогинга</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/online7course7creation/">Как создать свой онлайн курс: с 0 до продаж</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <a href="#" class="mega-menu-banner">
                    <img src="../../assets/images/courses/1001.jpg" alt class="img-fluid" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('clothing')">
            Курсы "Кино и театр"
            <span class="sub-arrow"></span>
          </a>
          <ul class="mega-menu clothing-menu" :class="{ opensidesubmenu: isActive('clothing') }">
            <li>
              <div class="row m-0">
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Профессиональная переподготовка</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/rukovodstvo-tvorcheskimi-teatralnymi-i-koncertnymi-organizaciyami">Директор театра</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://urgaps.ru/seminar/4181">Руководитель театрального коллектива</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/organizaciya-deyatelnosti-po-sozdaniyu-hudozhestvennogo-i-vizualnogo-formata-proekta-smi-v-processe-montazha?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Режиссёр монтажа</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/korrespondent-reporter-v-multimedijnyh-pechatnyh-tele-i-radioveshatelnyh-sredstvah-massovoj-informacii-smi">Корреспондент</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Повышение квалификации</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://urgaps.ru/seminar/3857">Методика организации театрализованной деятельности дошкольников</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/adobe-premiere-pro-beginners/">Видеомонтаж в Adobe Premiere Pro - с нуля до результата</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/adobe-premiere-pro-pro/">Монтаж в Adobe Premiere Pro - PRO</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <a target="_blank" href="#" class="mega-menu-banner">
                    <img src="../../assets/images/courses/1102.jpg" alt class="img-fluid" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0)" @click="setActive('clothing')">
            Купсы "Web"
            <span class="sub-arrow"></span>
          </a>
          <ul class="mega-menu clothing-menu" :class="{ opensidesubmenu: isActive('clothing') }">
            <li>
              <div class="row m-0">
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Профессиональная ереподготовка</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://gb.ru/geek_university/developer">Web-разработка. Разработчик</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/upravlenie-i-administrirovanie-informacionnymi-sluzhbami-infokommunikacionnoj-sistemy-organizacii">Системный администратор</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/razrabotka-i-soprovozhdenie-trebovanij-i-tehnicheskih-zadanij-na-razrabotku-i-modernizaciyu-sistem-i-podsistem-malogo-i-srednego-masshtaba-i-slozhnosti">Системный аналитик</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/osushestvlenie-prodazh-infokommunikacionnyh-sistem-i-ili-ih-sostavlyayushih?utm_source=infourok&utm_medium=kursy-catalog&utm_campaign=plitki-s-kursami">Менеджер по продажам информационно-коммуникационных систем</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/realizaciya-medijnoj-strategii-prodvizheniya-veb-sajtov-socialnyh-setej-i-messendzherov">Таргетолог</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://infourok.ru/kursy/informacionnaya-podderzhka-biznes-processov-v-organizacii">Модератор</a>
                      </li>
                    </ul>
                    <h5>Курсы</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/vuejs_25/">Vue.js 2.5 Создаем сайт на Vue.JS с Firebase, Vuex и Router</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/vue-and-vuex-writing-real-project-from-scratch/">Vue JS и Vuex - пишем реальный проект с нуля</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/vuejs-itd/">Игра на Vue.js</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/draft/4109782/learn/lecture/27388810?start=0#overview">Symfony & Vue.js: Полный курс 2022!</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="link-section">
                    <h5>Курсы</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/nodejs-full-guide/">Node JS. Практический курс. (Mongo, GraphQL, MySQL, Express)</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/typescript-bootcamp/">TypeScript с нуля - от основ до advanced уровня</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/javascript_practice/">Практический JavaScript (Продвинутый уровень)</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/pro-react-redux/">React + Redux - Профессиональная Разработка</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/javascript_full/">Полный курс по JavaScript + React - с нуля до результата</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/webatomphp/">Основы PHP программирования для начинающих</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/wordpress-pcgramota/">Создание сайтов без программирования на WordPress</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/cms-wordpress/">Посадка верстки и создание тем на CMS WordPress</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-4">
                  <a href="#" class="mega-menu-banner">
                    <img src="../../assets/images/courses/1301.jpg" alt class="img-fluid" />
                  </a>
                  <div class="link-section">
                    <h5>Курсы</h5>
                    <ul>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/reactjs_admin_panel/">Создание административной панели на React.js + PHP</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/laravel-o/#overview">Laravel - Создание Админ Панели. Полный курс</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/moodle3-admin/">Moodle 3 для администраторов. Создай свой сайт с нуля</a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.udemy.com/course/webdeveloper/">WEB-разработчик 2023</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a target="_blank" href="https://gb.ru/">GeekBrains</a>
        </li>
        <li>
          <a target="_blank" href="https://infourok.ru/">Инфоурок</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: ["leftSidebarVal"],
    data() {
      return {
        activeItem: "clothing"
      };
    },
    methods: {
      closeLeftBar(val) {
        val = false;
        this.$emit("closeVal", val);
      },
      isActive: function(menuItem) {
        return this.activeItem === menuItem;
      },
      setActive: function(menuItem) {
        if (this.activeItem === menuItem) {
          this.activeItem = "";
        } else {
          this.activeItem = menuItem;
        }
      }
    }
  };
</script>
