 <template>
  <div id="app">
<header>
  <nav>
    <ul>
  <router-link :to="{name:'HomePage'}" exact>
      <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png"/>Build-a-boot
      </li>
  </router-link>
        <router-link :to="{name:'RobotBuilder'}" exact>
            <li class="nav-item">
              Build a Bot
            </li>
        </router-link>
    </ul>
  </nav>
</header>
    <main>
      <Robotbuilder/>
        <router-view></router-view>
    </main>

  </div>
</template>

<script>


export default {

};
</script>

<style>
body{
  background: linear-gradient( to bottom,#555,#999);
  background-attachment: fixed;

}
main{
  margin: auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.router-link-active {
    color: azure;
}
</style>

