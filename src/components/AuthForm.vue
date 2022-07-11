<template>
  <div>
    <!-- <div class="first"><div class="name">ToDo PrO</div></div> -->

    <div class="login">
      <h2>Вход</h2>

      <div class="input">
        <vs-input
          type="login"
          icon-before
          primary
          v-model="login"
          placeholder="Login"
        >
          <template #icon>
            <i class="material-icons"> account_circle</i>
          </template>
        </vs-input>
        <vs-input
          primary
          icon-before
          type="password"
          v-model="password"
          placeholder="Password"
        >
          <template #icon>
            <i class="material-icons"> lock </i>
          </template>
        </vs-input>
      </div>

      <div class="a1">
        <a href="/regitration">Забыли пароль?</a>
        <br />
      </div>
      <div class="space">
        <div class="a2">
          <a href="/regitration">Создать аккаунт</a>
        </div>

        <div class="button">
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
    <div class="text">
      <h1>ToDo PrO</h1>
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

.first {
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
     font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  font-family:'Courier New', Courier, monospace;
}
</style>