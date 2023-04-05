<template>
  <div>
    <b-modal ref="my-modal" id="modal-newsletter" size="lg" centered :hide-footer="true">
      <div class="modal-body modal1">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-12">
              <div class="modal-bg">
                <div class="offer-content">
                  <img :src="imagepath" class="img-fluid" alt="offer" />
                  <h2 style="color: red">Добро пожаловать на наш сайт</h2>
                  <form class="auth-form needs-validation" target="_blank">
                    <div class="form-group mx-sm-3">
                      <input
                        type="email"
                        class="form-control"
                        name="EMAIL"
                        placeholder="Напишите свой email"
                        required="required"
                      />
                      <button type="submit" class="btn btn-solid" style="border: 1px solid white; border-radius: 40px;" id="mc-submit">Подписаться</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imagepath: require("@/assets/images//offer-banner.png")
      };
    },
    mounted() {
      if (localStorage.getItem("showModel") !== "newsletter") {
        this.showModal();
        localStorage.setItem("showModel", "newsletter");
      }
    },
    methods: {
      showModal() {
        this.$refs["my-modal"].show();
      },
      hideModal() {
        this.$refs["my-modal"].hide();
      }
    }
  };
</script>
