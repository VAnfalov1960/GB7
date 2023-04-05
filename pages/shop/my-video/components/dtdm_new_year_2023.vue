<template>
  <div>
    <!-- <h2>Конкурс "Педагог дополнительного образования 2023"</h2> -->
    <section class="banner-goggles ratio2_3">
      <div class="container-fluid">
        <h2 style="text-align: center" >ДТДМ "Новогодние спектакли 2023"</h2>
        <div class="row partition3">
          <div class="col-md-4" v-for="(item, index) in items" :key="index">
            <div class="collection-banner p-center text-center">
              <a
                v-if="item.videosrc"
                :href="item.videosrc"
                target="_blank"
                :title="item.subtitle"
              >
              <br v-if="item.videosrc  && item.title" />
                <h4 v-if="item.videosrc  && item.title">{{ item.title }}</h4>
                <h4 v-if="item.videosrc  && item.subtitle">{{ item.subtitle }}</h4>
                <img
                  style="border: 1px solid white; border-radius: 10px; width: 100%"
                  :src="item.imagepath"
                  class="img-fluid"
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        items: [
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Гвилава.jpg"),
            title: 'Мастер-класс "Дизайн аксессуаров"',
            subtitle: "Педагог: Гвилава Ирина Валерьевна",            
            videosrc: "https://www.youtube.com/watch?v=25M_zRCpuwA"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Сафронова.jpg"),
            title: 'Мастер-класс "Семицветик"',
            subtitle: "Педагог: Сафронова Ольга Викторовна",      
            videosrc: "https://www.youtube.com/watch?v=TKpv63T4xXU"
          }
        ],
      };
    },
  };
</script>
