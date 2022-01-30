<template>
  <div class="home">
    <div class="header__content">
    <div class="container">
      <h1 class="title">
        Место для получения медицинской помощи
      </h1>
      <div class="buttons__title" button-auth>
        <button class="button__title" type="button">
          <router-link to="/form" class="button-text__title">Войти</router-link>
        </button>
        
        <router-link to="/title"  class="contacts__title">Контакты</router-link>
      </div>
      
      <div class="header__promo">
        <div class="direction__item">
          <img class="direction__img" src="@/assets/circle1.svg" alt="">
          <p class="description__subtitle">Онлайн-прием</p>
          <div class="description__meta">
          </div>
          <p class="direction__text">Рыба текст</p>
        </div>
        <div class="direction__item">
          <img class="direction__img" src="@/assets/circle2.svg" alt="">
          <p class="description__subtitle">Онлайн-прием</p>
          <div class="description__meta">
          </div>
          <p class="direction__text">Рыба текст</p>
        </div>
        <div class="direction__item">
          <img class="direction__img" src="@/assets/circle3.svg" alt="">
          <p class="description__subtitle">Онлайн-прием</p>
          <div class="description__meta">

          </div>
          <p class="direction__text">Рыба текст</p>
        </div>
      </div>
    </div>
  </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}


</script>
