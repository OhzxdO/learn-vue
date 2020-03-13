<template>
  <div id="app">
    <div id="nav">
      <!-- replace无法前进后退 -->
      <router-link to="/" tag='button' >Home</router-link> |
      <router-link to="/about" >About</router-link> |
      <router-link :to="'/user/'+userid" >User</router-link> |
      <router-link :to="{path:'/profile',query:{name:'jack',age:16}}" >Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default{
    name:'app',
    data () {
      return {
        userid:'user2'
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
