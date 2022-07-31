<template>
  <div class="FormMain">
    <div class="center examplex">
      <vs-navbar text-white :color="active" center-collapsed v-model="active">
        <template #left>
          <h2>ToDo PrO</h2>
        </template>
        <vs-navbar-item :active="active == 'guide'" id="guide">
          Главная
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Друзьяяя
        </vs-navbar-item>
        
        <vs-navbar-item :active="active == 'components'" id="components">
          Настройки
        </vs-navbar-item>
        <template #right>
          <vs-tooltip bottom>
            <vs-button flat>
              <span class="material-symbols-outlined">logout</span>
            </vs-button>
            <template #tooltip> Выход </template>
          </vs-tooltip>
        </template>
      </vs-navbar>
    </div>
    <p class="p1">1</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "dark",
  }),
};
</script>

<style>
body {
  background: rgb(202, 202, 202);
}
.p1 {
  background: wheat;
  margin-top: 60px;
}
.material-symbols-outlined {
  height: 25px;
  width: 25px;
}
</style>
