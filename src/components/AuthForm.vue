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

          <div class="AuthFormA1">
            <a href="/regitration">Забыли пароль?</a>
            <br />
          </div>
          <div class="AuthFormSpace">
            <a href="/registration">Создать аккаунт</a>

            <vs-button
              color="#000000"
              square
              :active="active == 0"
              @click="active = 0"
            >
              Войти
            </vs-button>
          </div>
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
    };
  },
};
</script>

<style>
.AuthFormSpace a {
  display: flex;
  align-items: flex-end;
}
.AuthFormFirstInput {
  margin-bottom: 6%;
}
a {
  margin-right: 50px;
}

.AuthFormAll {
  background: url(../assets/AuthFormBackground.jpg);
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
  margin: 15% 0 15% 0;
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