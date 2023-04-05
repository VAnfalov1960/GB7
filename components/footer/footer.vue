<template>
  <div>
    <footer class="footer-light">
      <div class="light-layout">
        <div class="container"></div>
      </div>
      <section class="section-b-space light-layout">
        <div class="container">
          <div class="row footer-theme partition-f">
            <div class="col offset-xl-1">
              <div class="sub-title">
                <div class="footer-title">
                  <h4>Наши услуги</h4>
                </div>
                <div class="footer-contant">
                  <ul>
                    <li>
                      <nuxt-link
                        :to="{ path: '/shop/theatre'}" title="Просмотр услуг"
                      >Познавательно-развлекательные программы</nuxt-link>
                    </li>                    
                    <li>
                      <nuxt-link
                        :to="{ path: '/shop/dtdm'}" title="Просмотр услуг"
                      >Детские коллективы ДТДМ</nuxt-link>
                    </li> 
                    <li>
                      <nuxt-link
                        :to="{ path: '/shop/courses'}" title="Просмотр услуг"
                      >Онлайн курсы</nuxt-link>
                    </li>                                        
                    <li>
                      <a
                        target="_blank"
                        href="https://dmtgl.ru/moodle4/" title="Переход на сайт Moodle"
                      >Moodle</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col offset-xl-1">
              <div>
                <div class="sub-title">
                  <div class="footer-title">
                    <h4>О нас</h4>
                  </div>
                  <div class="footer-contant">
                    <ul class="contact-list">
                      <li>
                        <i class="fa fa-map-marker"></i>
                        <nuxt-link :to="{ path: '/page/about_theatre'}" title="О нас">О детском кинотеатре</nuxt-link>
                      </li>
                      <li>
                        <i class="fa fa-map-marker"></i>
                          <nuxt-link :to="{ path: '/page/about'}" title="Наши документы">Наши документы</nuxt-link>
                      </li>
                      <!-- <li>
                        <i class="fa fa-fax"></i>
                        <a href="tel:+79967333324">Позвоните нам</a>
                      </li>-->
                      <!-- <li>
                        <i class="fa fa-envelope-o"></i>
                        <a href="mailto:tltdtdm@mail.ru">tltdtdm@mail.ru</a>
                      </li>-->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="footer-title footer-mobile-title">
                <br />
                <h4>О нас в мобильной версии</h4>
                <p>Немного текстовой информации о нашей организации</p>
              </div>
              <div>
                <div class="sub-title">
                  <div class="footer-title">
                    <h4>Контакты</h4>
                  </div>
                  <div class="footer-contant">
                    <ul class="contact-list">
                      <li>
                        <i class="fa fa-address-card-o"></i>
                        <nuxt-link
                          :to="{ path: '/page/contact'}" title="Контактная информация<"
                        >Контактная информация</nuxt-link>
                    </li>
                      <li>
                        <i class="fa fa-phone"></i>
                        <a href="tel:+79967333324" title="Позвоните нам">Позвоните нам</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="footer-end">
                <p>
                  <i class="fa fa-copyright" aria-hidden="true"></i> 2023 год
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
