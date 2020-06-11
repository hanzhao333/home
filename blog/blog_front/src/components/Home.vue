<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: "Home",
  data() {
    return {
    };
  },
  components:{Header}
};
</script>
<style scoped>

</style>
