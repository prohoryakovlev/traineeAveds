<template>
    <header class="header">

    <router-link class="logo" to="/">
      <img class="logo__img" src="@/assets/logo.svg" alt="">
    </router-link>
    
    <div class="buttons">
      <router-link to="/title"  class="contacts">Контакты</router-link>
      <!-- <router-link to="/about" class="contacts">about</router-link>
      <router-link to="/title" class="contacts">title</router-link> -->
      <button class="button"  type="button">
        
        <router-link to="/form" class="button__text">Войти</router-link>
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      click() {
        this.$router.push('/contacts')
      }
    }
  }
</script>

<style>
  /* .header{
    background: red;
  } */
</style>
