<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png"
           aria-hidden="true"/>
      <div class = " get-started">
      <router-link :to="{name:'RobotBuilder'}">
        <a  href="">Get started</a> bulding you first robot!
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
 text-align: center;
}
  .robot{
  height: 300px;
}
</style>
