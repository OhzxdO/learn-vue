<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h4>hello</h4>
    <router-link to="/home/news">news</router-link> |
    <router-link to="/home/message">message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      path:'/home/news'
    }
  },
  created () {
    console.log('create home')
  },
  destroyed () {
    console.log('destroyed home')
  },
  activated () {
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next){
    console.log(this.$route.path)
    this.path=this.$route.path
    next()
  }
}
</script>
