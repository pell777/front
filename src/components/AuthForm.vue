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
/* .first {
  position: relative;
  display: flex;
  justify-content: center;
  background: #d8d9da;
  margin-top: 17%;
}
.name {
  display: flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  color: #fff;
  font-size: 50px;
  background: #b2cdf8;
}
.a1 {
  display: flex;
  margin-bottom: 10%;
}
.a1 a {
  font-size: 15px;
  color: rgb(45, 24, 168);
  text-decoration: none;
  margin-left: 3%;
}
.a1 a:active {
  background: #b2cdf8;
  font-size: 15px;
  color: rgb(45, 24, 168);
  text-decoration: none;
  margin-left: 3%;
}
.a2 {
  display: flex;
  align-items: center;
  margin-left: 1%;
}
.a2 a {
  color: rgb(69, 43, 219);
  text-decoration: none;
}
.a2 a:active {
  background: #b2cdf8;
  color: rgb(45, 24, 168);
  text-decoration: none;
}
.space {
  display: flex;
  justify-content: space-between;
}
.button {
  display: flex;
  justify-content: flex-end;
}
.button button {
  padding: 0%;
  margin: 0%;
  font: 15px system-ui;
}
input[type="login"] {
  width: 250px;
}
input[type="password"] {
  width: 250px;
  margin-top: 2%;
  margin-bottom: 3%;
}
body {
  background: #4e535b;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 1em;
}

.login {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #d8d9da;
  border: 3px solid #ababaf;
  border-radius: 5px;
  text-align: center;
  color: #36383c;
  text-shadow: 0 1px 0 #fff;
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0px 50px 30px 50px;
  transform: translate(-50%, -50%);
}
.text {
  margin: 0 auto;
  margin-top: 16%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 2em;
  text-shadow: 2px 2px 4px rgb(71, 70, 70);
  color: #000000;
  font-family: "Courier New", Courier, monospace;
} */
</style>