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
      <div class="container">
          <aside class="aside">
            <router-view name="sidebar"></router-view>
          </aside>
    <main>
        <router-view name="default"></router-view>
    </main>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.router-link-active {
  color: azure;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
