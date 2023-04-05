<template>
  <div>
    <Header />
    <Breadcrumbs title="Блог" />
    <section class="blog-detail-page section-b-space ratio2_3">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 blog-detail">
            <img src="@/assets/images/about/about-us.jpg" class="img-fluid" alt="blog" />
            <h3>Заголовок</h3>
            <!-- <ul class="post-social">
              <li>30 сентября 2022 года</li>
              <li>Опубликовано : Администратор</li>
              <li>
                <i class="fa fa-heart"></i> 5 хит
              </li>
              <li>
                <i class="fa fa-comments"></i> 10 комментариев
              </li>
            </ul> -->
            <p>Абзац текста.</p>
            <!-- <p>Абзац текста.</p>
            <p>Абзац текста.</p> -->
          </div>
        </div>
        <div class="row section-b-space blog-advance">
          <div class="col-lg-6">
            <div>
              <img src="@/assets/images/10.jpg" class="img-fluid" alt="blog-image" />
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <img src="@/assets/images/10.jpg" class="img-fluid" alt="blog-image" />
            </div>
          </div>
          <div class="col-lg-6">
            <ul>
              <li>Абзац 1.ввввв вввв ввввввв вв ввввв в вввв ввввввв вввввв вввв ввввв вввввв вввв вв</li>
              <li>Абзац 2.</li>
              <li>Абзац 3.</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <p>Абзац 4.</p>
            <p>Абзац 5.</p>
            <p>Абзац 6.</p>
          </div>
        </div>
        <div class="row section-b-space">
          <div class="col-sm-12">
            <ul class="comment-section">
              <li>
                <div class="media">
                  <img src="@/assets/images/avtar.jpg" alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Автор 1
                      <span>( 30 сентября 2022 года 15:30 )</span>
                    </h6>
                    <p>Абзац 7.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <img src="@/assets/images/2.jpg" alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Автор 2
                      <span>( 30 сентября 2022 года 15:30 )</span>
                    </h6>
                    <p>Абзац 8.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <img src="@/assets/images/20.jpg" alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Автор 3
                      <span>( 30 сентября 2022 года 15:30 )</span>
                    </h6>
                    <p>Абзац 9.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row blog-contact">
          <div class="col-sm-12">
            <h2>Оставьте свой комментарий</h2>
            <form class="theme-form">
              <div class="form-row">
                <div class="col-md-12">
                  <label for="name">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Напишите своё имя"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" id="email" placeholder="Email" required />
                </div>
                <div class="col-md-12">
                  <label for="exampleFormControlTextarea1">Комментарий</label>
                  <textarea
                    class="form-control"
                    placeholder="Напишите свой комментарий"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-solid" type="submit">Комментарий к публикации</button>
                </div>
              </div>
            </form>
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
    Breadcrumbs,
    Footer
  }
};
</script>
