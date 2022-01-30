<template>
    <header class="title">
      <router-link class="logo" to="/">
      <img class="logo__img" src="@/assets/logo.svg" alt="">
    </router-link>
    
    
    <div class="buttons">
      <router-link to="/title" @click="cluck" class="contacts">Контакты</router-link>
      <!-- <router-link to="/about" class="contacts">about</router-link>
      <router-link to="/title" class="contacts">title</router-link> -->
      <button class="button" type="button">
        <span class="button__text">Войти</span>
      </button>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      click() {
        this.$router.push('/About')
      }
    }
  }
</script>