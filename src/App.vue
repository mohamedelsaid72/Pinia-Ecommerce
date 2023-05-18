<template>
  <div>
    <TheNavbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,800&family=Roboto:wght@300;400;500;700;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.container {
  max-width: 1300px;
  margin: 6rem auto;
  padding: 1rem;
  margin-top: 6rem;
}
</style>
