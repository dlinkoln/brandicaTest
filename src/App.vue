<template>
  <div id="app">
    <User />
  </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    User,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
