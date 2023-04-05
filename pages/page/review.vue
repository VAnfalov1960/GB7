<template>
  <div>
    <Header />
    <Breadcrumbs title="Обзор" />
    <section class="section-b-space blog-detail-page review-page">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul class="comment-section">
              <li v-for="(item, index) in items" :key="index">
                <div class="media">
                  <img :src="item.imagepath" alt="item.name" />
                  <div class="media-body">
                    <h6>
                      {{item.name}}
                      <span>( {{item.datetime}} )</span>
                    </h6>
                    <p>{{item.desc}}</p>
                    <ul class="comnt-sec">
                      <li>
                        <a href="#">
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                          <span>(14)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="unlike">
                            <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>(2)
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
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
      items: [
        {
          imagepath: require("@/assets/images/avtar.jpg"),
          name: "Владимир",
          datetime: "1 октября 2022 21:30",
          desc: "Сообщение."
        },
        {
          imagepath: require("@/assets/images/2.jpg"),
          name: "Наталья",
          datetime: "1 октября 2022 21:30",
          desc:
            "Абзац сообщения"
        },
        {
          imagepath: require("@/assets/images/20.jpg"),
          name: "Наташа",
          datetime: "1 октября 2022 21:30",
          desc:
            "Абзац сообщения"
        }
      ]
    };
  }
};
</script>
