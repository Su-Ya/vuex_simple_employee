<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Welcome msg="如何用 Vuex 實作員工資料的 CRUD" />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";

export default {
  name: "home",
  components: {
    Welcome
  }
};
</script>
