<template>
  <div>
    <!-- <h2>Конкурс "Педагог дополнительного образования 2023"</h2> -->
    <section class="banner-goggles ratio2_3">
      <div class="container-fluid">
        <h2 style="text-align: center" >Конкурс "Педагог дополнительного образования 2023"</h2>
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
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Савина.jpg"),
            title: 'Мастер-класс "Использование мобильных приложений при обучении анимации"',
            subtitle: "Педагог: Савина Дарья Александровна",      
            videosrc: "https://www.youtube.com/watch?v=yKTjbEsvoDA&list=PLecQM2vG1W8XDyh4vGblLwdFxk5-D2nOU&index=6"
          },  
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Шикунова.jpg"),
            title: 'Мастер-класс "Студия изобразительного творчества"',
            subtitle: "Педагог: Шикунова Светлана Ивановна",      
            videosrc: "https://www.youtube.com/watch?v=-af8e6U3mE8&list=PLecQM2vG1W8XDyh4vGblLwdFxk5-D2nOU&index=1&t=574s"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Сухоруков.jpg"),
            title: 'Мастер-класс "Тхэквондо"',
            subtitle: "Педагог: Сухоруков Александр Сергеевич",      
            videosrc: "https://www.youtube.com/watch?v=6AHKi1462NA&list=PLecQM2vG1W8XDyh4vGblLwdFxk5-D2nOU&index=2"
          },          
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Бородина.jpg"),
            title: 'Мастер-класс "Каратэ"',
            subtitle: "Педагог: Бородина Вероника Дмитриевна",      
            videosrc: "https://www.youtube.com/watch?v=7nJSSsHLAq4&list=PLecQM2vG1W8XDyh4vGblLwdFxk5-D2nOU&index=3"
          },     
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Кураева.jpg"),
            title: 'Мастер-класс "Настольная ролевая игра как новая форма обучения"',
            subtitle: "Педагог: Кураева Виктория Владимировна",      
            videosrc: "https://www.youtube.com/watch?v=CHh_O8zQ12E&list=PLecQM2vG1W8XDyh4vGblLwdFxk5-D2nOU&index=4"
          },    
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Бурмистрова.jpg"),
            title: 'Мастер-класс "Скрайбинг как средство фасилитации ВДК"',
            subtitle: "Педагог: Бурмистрова Василина Васильевна",      
            videosrc: "https://www.youtube.com/watch?v=_QP6VH_o4cc&list=PLecQM2vG1W8XDyh4vGblLwdFxk5-D2nOU&index=5"
          },            
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Сафронова.jpg"),
            title: 'Мастер-класс "Семицветик"',
            subtitle: "Педагог: Сафронова Ольга Викторовна",      
            videosrc: "https://www.youtube.com/watch?v=TKpv63T4xXU"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Гвилава.jpg"),
            title: 'Мастер-класс "Дизайн аксессуаров"',
            subtitle: "Педагог: Гвилава Ирина Валерьевна",            
            videosrc: "https://www.youtube.com/watch?v=25M_zRCpuwA"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Шкадина.jpg"),
            title: 'Мастер-класс: "Школа хореографического искусства"',
            subtitle: "Педагог: Шкадина Анна Юрьевна",      
            videosrc: "https://www.youtube.com/watch?v=S5m_CpL-7eU"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Гуськов.jpg"),
            title: 'Мастер-класс: "Дзюдо"',
            subtitle: "Педагог: Гуськов Максим Владимирович",      
            videosrc: "https://www.youtube.com/watch?v=QTimLHG6HFM"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Горбунов.jpg"),
            title: 'Мастер-класс: "Школа молодого журналиста"',
            subtitle: "Педагог: Горбунов Никита Александрович",
            videosrc: "https://www.youtube.com/watch?v=X3AKmnaoWeo"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Спиридонова.jpg"),
            title: 'Мастер-класс: "Школа имиджа"',
            subtitle: "Педагог: Спиридонова Мария Сергеевна",
            videosrc: "https://www.youtube.com/watch?v=S-lo8zuQyU8"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Финал1.jpg"),
            title: "Финальное выступление",
            subtitle: "Группа 1",
            videosrc: "https://www.youtube.com/watch?v=6q4l0pGNjQI"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Финал2.jpg"),
            title: "Финальное выступление",
            subtitle: "Группа 2",
            videosrc: "https://www.youtube.com/watch?v=_Sf53E6Hm5I"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/ФиналОВ.jpg"),
            title: "Финальное выступление",
            subtitle: "Группа 3",
            videosrc: "https://www.youtube.com/watch?v=T_BxjzvrayQ"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Групповое_конкурсное_испытание.jpg"),
            title: 'Конкурсное испытание',
            subtitle: '"4К"',            
            videosrc: "https://www.youtube.com/watch?v=6cW1DvROVg8"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Круглый_стол.jpg"),
            title: 'Конкурсное испытание',
            subtitle: '"Круглый стол"',            
            videosrc: "https://www.youtube.com/watch?v=VJOYLBS6ujs"
          },
          {
            imagepath: require("@/assets/images/my-video/ped-dop-obr-2023/Сердце_отдаю_детям.webp"),
            title: "Сердце отдаю детям",
            subtitle: "Педагог: Сафронова Ольга Викторовна",
            videosrc: "https://www.youtube.com/watch?v=Fz6dNRhAkjY"
          }
        ],
      };
    },
  };
</script>
