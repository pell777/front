<template>
  <div>
    <!-- <div class="first"><div class="name">ToDo PrO</div></div> -->
    <div class="AuthFormAll">
      <div class="AuthFormLogin">
        <h1>ToDo PrO</h1>
        <h2>Вход</h2>
        <div class="AuthFormForm">
          <div class="AuthFormInput">
            <div class="AuthFormFirstInput">
              <vs-input
                label="Логин"
                type="login"
                primary
                v-model="login"
                placeholder="Login"
              >
              </vs-input>
            </div>

            <vs-input
              label="Пароль"
              primary
              type="password"
              v-model="password"
              placeholder="Password"
            >
            </vs-input>
          </div>
          <p v-bind:confirm="confirm">{{ confirm }}</p>
          <div class="AuthFormA1">
            <a href="/registration">Забыли пароль?</a>
            <br />
          </div>
          <div class="AuthFormSpace">
            <a href="/registration">Создать аккаунт</a>

            <vs-button
              color="#000000"
              square
              :active="active == 0"
              @click="(active = 0), auth()"
            >
              Войти
            </vs-button>
          </div>
        </div>
       
        <div class="AuthForminformation">
          <a href="/">Информация</a>
        
          <a href="/">Контакты</a>
          <a href="/">Создатели</a>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      confirm: "",
    };
  },
  methods: {
    async auth() {
      this.confirm = " ";
      let login = this.login.trim().replace(/\s/g, "");
      let password = this.password.trim().replace(/\s/g, "");
      console.log(login.length, password.length);
      if (login.length <= 0 || password.length <= 0) {
        this.confirm = "Заполните все поля";
      } else {
        try {
          const check = await axios
            .get("http://localhost:3000/authorization", {
              params: {
                login: login,
                password: password,
              },
            })
            .then(function (response) {
              return response.data;
            })
            .catch(function (error) {
              console.log(error);
            });
          if (check === "Логин") {
            this.confirm = "Пользователь не зарегестрирован";
          } else if (check === "Пароль") {
            this.confirm = "Неправильный пароль";
          } else {
            if (localStorage.getItem(check)) {
              this.$router.push("/Main");
            } else {
              this.confirm = "Нет Токена";
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style>

.AuthForminformation{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-left: 17%;
  width: 71%;
  font-size: 14px;
  display: flex;
 
  justify-content: center;
  justify-content: space-between;

}
.AuthForminformation a{
  color: #4d4c4c;
  text-decoration: none;
}
p {
  color: rgb(255, 0, 0);
}
#message-danger {
  margin-right: 10%;
}
.AuthFormSpace a {
  display: flex;
  align-items: flex-end;
}
.AuthFormFirstInput {
  margin-bottom: 8%;
}
a {
  margin-right: 50px;
}

.AuthFormAll {
  background: url(../assets/FormBackground.jpg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 15px;
}
.AuthFormLogin h1 {
  margin-bottom: -2%;
  font-size: 50px;
  text-shadow: 1px 1px 2px rgb(71, 70, 70);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.AuthFormLogin h2 {
  margin-bottom: 10%;
}
.AuthFormLogin {
  background: #fffafa;
  border-radius: 8px;
  width: 450px;
  min-height: 0%;
  border: 2px solid #c2c3c4;
  margin: 10% 0 10% 0;
  display: inline-block;
}
.AuthFormInput {
  display: inline-block;
}
.AuthFormInput input {
  width: 350px;
  font-size: 20px;
  border: 2px solid #999999;
}
.AuthFormSpace {
  margin-top: 5%;
  width: 80%;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15%;
}
.AuthFormSpace a {
  text-decoration: none;
  margin-left: 2%;
  float: left;
  padding-bottom: 1%;
}
.AuthFormSpace button {
  width: 70px;
  height: 35px;
  border-radius: 5px;
  margin: 0%;
}
.AuthFormA1 {
  display: flex;
  margin-top: 1%;
  margin-left: 13%;
}
.AuthFormA1 a {
  text-decoration: none;
}
</style>