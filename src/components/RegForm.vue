<template>
  <div>
    <!-- <div class="first"><div class="name">ToDo PrO</div></div> -->
    <div class="RegFormAll">
      <div class="RegFormLogin">
        <h1>ToDo PrO</h1>

        <h2>Регистрация</h2>
        <div class="RegFormForm">
          <div class="RegFormInput">
            <div class="RegFormFirstInput">
              <vs-input
                label="Логин"
                type="login"
                primary
                v-model="login"
                placeholder="Login"
              >
              </vs-input>
            </div>
            <div class="RegFormFirstInput">
              <vs-input
                label="Email"
                type="mail"
                primary
                v-model="mail"
                placeholder="Login"
              >
              </vs-input>
            </div>
            <div class="RegFormFirstInput">
              <vs-input
                label="Пароль"
                primary
                type="password"
                v-model="password"
                placeholder="Password"
              >
              </vs-input>
            </div>
            <div class="RegFormFirstInput">
              <vs-input
                label="Подтвердите пароль"
                primary
                type="password"
                v-model="confirmPassword"
                placeholder="Confirm password"
              >
              </vs-input>
            </div>
            <p v-bind:confirm="confirm">{{ confirm }}</p>
          </div>
          <br />
          <div class="RegFormSpace">
            <a href="/">Вход</a>

            <vs-button
              color="#000000"
              square
              :active="active == 0"
              @click="(active = 0), register()"
            >
              Зарегистрироваться
            </vs-button>
          </div>
          <div class="RegForminformation">
          <a href="/">Информация</a>
        
          <a href="/">Контакты</a>
          <a href="/">Создатели</a>
        </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  data() {
    return {
      login: "",
      password: "",
      email: "",
      confirmPassword: "",
      confirm: "",
    };
  },
  methods: {
    async register() {
      this.confirm = "";
      let login = this.login.trim().replace(/\s/g, "");
      let email = this.email.trim().replace(/\s/g, "");
      let password = this.password.trim().replace(/\s/g, "");
      let passwordConfirm = this.confirmPassword.trim().replace(/\s/g, "");
      if (
        login.length <= 0 ||
        login.email <= 0 ||
        password.length <= 0 ||
        passwordConfirm.length <= 0
      ) {
        this.confirm = "Заполните все поля";
      } else {
        if (password === passwordConfirm) {
          try {
            const check = await axios
              .get("http://localhost:3000/OneUser", {
                params: { login: login, email: email },
              })
              .then(function (response) {
                console.log(response.data);
                return response.data;
              })
              .catch(function (error) {
                console.log(error);
              });
          } catch (error) {
            console.error(error);
          }
          if (!check) {
            this.confirm = "Регистрация прошла успешно";
          } else {
            this.confirm = "Пользователь уже зарегестрирован";
          }
        } else {
          this.confirm = "Пароли не совпадают";
        }
      }
    },
  },
};
</script>

<style>
.RegForminformation{
   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-left: 17%;

  width: 71%;
  font-size: 14px;
  display: flex;
 
  justify-content: center;
  justify-content: space-between;
}
.RegForminformation a{
  color: #4d4c4c;
  text-decoration: none;
}
.RegFormSpace a {
  display: flex;
  align-items: flex-end;
}
.RegFormFirstInput {
  margin-bottom: 8%;
}
a {
  margin-right: 50px;
}

.RegFormAll {
  background: url(../assets/FormBackground.jpg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 15px;
}
.RegFormLogin h1 {
  margin-bottom: -2%;
  font-size: 50px;
  text-shadow: 1px 1px 2px rgb(71, 70, 70);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.RegFormLogin h2 {
  margin-bottom: 10%;
}
.RegFormLogin {
  background: #fffafa;
  border-radius: 8px;
  width: 450px;
  min-height: 0%;
  border: 2px solid #c2c3c4;
  margin: 10% 0 10% 0;
  display: inline-block;
}
.RegFormInput {
  display: inline-block;
}
.RegFormInput input {
  width: 350px;
  font-size: 20px;
  border: 2px solid #999999;
}
.RegFormSpace {
  margin-top: 5%;
  width: 80%;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15%;
}
.RegFormSpace a {
  text-decoration: none;
  margin-left: 3%;
  float: left;
  padding-bottom: 1%;
}
.RegFormSpace button {
  width: 150px;
  height: 35px;
  border-radius: 5px;
  margin: 0%;
}
.RegFormA1 {
  display: flex;
  margin-top: 1%;
  margin-left: 13%;
}
.RegFormA1 a {
  text-decoration: none;
}
</style>