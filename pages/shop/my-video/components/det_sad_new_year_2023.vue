<template>
  <div>
    <!-- <h2>Конкурс "Педагог дополнительного образования 2023"</h2> -->
    <section class="banner-goggles ratio2_3">
      <div class="container-fluid">
        <h2 style="text-align: center" >Детские сады "Новогодние спектакли 2023"</h2>
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
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Одуванчики.jpg"),
            title: 'Группа "Одуванчики"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=8LPQWN0uuG8"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Дюймовочка.jpg"),
            title: 'Группа "Дюймовочка"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=GwCaSNqdkYY"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Пчёлки.jpg"),
            title: 'Группа "Пчёлки"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=6iOe_cjmHq8"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Почемучки.jpg"),
            title: 'Группа "Почемучки"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=O0RQ9lzS1nY"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Топтыжки.jpg"),
            title: 'Группа "Топтыжки"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=xvTPBk5rYZg"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Светофорик.jpg"),
            title: 'Группа "Светофорик"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=f9EqYNLtSUw"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Ромашки.jpg"),
            title: 'Группа "Ромашки"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=Hu3GBVmpKBc"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Колобки.jpg"),
            title: 'Группа "Колобки"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=VaOe82kwmhk"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Утята.jpg"),
            title: 'Группа "Утята"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=lKgcnmskcRk"
          },
          {
            imagepath: require("@/assets/images/my-video/det-sad-new-yar-2023/Зайчики.jpg"),
            title: 'Группа "Зайчики"',
            subtitle: "",            
            videosrc: "https://www.youtube.com/watch?v=dd9UdAcFPoY"
          }
        ],
      };
    },
  };
</script>
