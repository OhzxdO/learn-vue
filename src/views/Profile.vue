<template>
  <div class="profile">
    <h1>{{message.name}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        message: this.$route.query
      };
    },
  }
</script>

<style>

</style>