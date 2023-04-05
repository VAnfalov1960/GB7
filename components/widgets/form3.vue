<template>
  <form target="_blank" action="../../../form/mail3.php" class="form-inline subscribe-form auth-form needs-validation theme-form" @submit="checkForm" method="POST">
    <div class="form-group mx-sm-3">
      <input
          type="text"
          class="form-control"
          id="email"
          v-model="email"
          placeholder="Введите свой адрес электронной почты"
          name="email"
          required
        />
    </div>
    <button type="reset" class="btn btn-solid" style="border: 1px solid white; border-radius: 40px;" value="Очистить форму" name="reset" accesskey="r">Очистить форму</button>
    <button type="submit" class="btn btn-solid"  style="border: 1px solid white; border-radius: 40px;  margin-left: 10px;" id="mc-submit">Подписаться</button>
  </form>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        errors: [],
        email: null,
      };
    },
    methods: {
      checkForm2: function(e) {
        this.errors = [];
        if (!this.email) {
          this.errors.push("Электронная почта требуется.");
        } else if (!this.validEmail(this.email)) {
          this.errors.push("Требуется действительный адрес электронной почты.");
        }
        if (!this.errors.length) return true;
        e.preventDefault();
      },

      validEmail: function(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  };
</script>
