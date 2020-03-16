<template>
  <div class="user">
    <h1>{{userid}}</h1>
  </div>
</template>

<script>
  export default{
    name:'user',
    computed: {
      userid(){
        return this.$route.params.id
      }
    }
  }
</script>