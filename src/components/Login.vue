<template>
  <form @submit="handlerConfirm" class="form-login">
    <div>Логин</div>
    <input
      required
      type="text"
      autofocus
      v-model="login"
      placeholder="Введите логин"
    />
    <div class="pwd-label">Пароль</div>
    <input
      required
      type="password"
      v-model="password"
      placeholder="Введите пароль"
    />
    <div class="form-button"><button type="submit">Вход</button></div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { setToken } from "@/helpers/global";
import links from "@/router/links";

export default {
  name: "LoginComp",

  data: () => ({
    login: null,
    password: null,
  }),

  methods: {
    ...mapActions("auth", ["getLoginToken"]),

    async handlerConfirm(bvFormEvt) {
      bvFormEvt.preventDefault();
      await this.getLoginToken({ login: this.login, password: this.password });
      this.clearForm();

      if (this.token) {
        setToken(this.token);
        this.$router.push(links.dashboard);
      } else window.alert("Ошибка авторизации");
    },

    clearForm() {
      this.login = null;
      this.password = null;
    },
  },

  computed: {
    ...mapGetters("auth", ["token"]),
  },
};
</script>

<style scoped>
.pwd-label {
  margin-top: 10px;
}
.form-login {
  margin-top: 30px;
  margin-left: 30px;
}
.form-button {
  margin-top: 10px;
}
</style>
