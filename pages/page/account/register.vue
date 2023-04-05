<template>
  <div>
    <Header />
    <Breadcrumbs title="Регистрация" />
    <section class="register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3>{{title}}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form class="theme-form" @submit.prevent="onSubmit">
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="fname">Имя</label>
                      <ValidationProvider rules="required" v-slot="{ errors }" name="fname">
                        <input
                          type="text"
                          class="form-control"
                          id="fname"
                          v-model="fname"
                          placeholder="Имя"
                          name="fname"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="lname">Фамилия</label>
                      <ValidationProvider rules="required" v-slot="{ errors }" name="lname">
                        <input
                          type="text"
                          class="form-control"
                          id="lname"
                          v-model="lname"
                          placeholder="Фамилия"
                          name="lname"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6">
                      <label for="email">Email</label>
                      <ValidationProvider rules="required|email" v-slot="{ errors }" name="Email">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          v-model="email"
                          placeholder="Email"
                          name="email"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                    <div class="col-md-6">
                      <label for="password">Пароль</label>
                      <ValidationProvider rules="required" v-slot="{ errors }" name="password">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          v-model="password"
                          placeholder="Введите пароль"
                          name="password"
                        />
                        <span class="validate-error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <button
                      type="submit"
                      class="btn btn-solid mt-2"
                      :disabled="invalid"
                    >Создать аккаунт</button>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver
} from "vee-validate/dist/vee-validate.full.esm";
import Header from "../../../components/header/header1";
import Footer from "../../../components/footer/footer";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      title: "Создать аккаунт",
      fname: null,
      lname: null,
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit() {
      console.log("Форма была отправлена!");
    }
  }
};
</script>
