<template>
<div class="col-sm-4 mx-auto">
  <form @submit.prevent="registerUser" novalidate>
      <div v-show="step === 1" class="step">
    <div class="mb-3">
      <label for="name" class="form-label" >Ваше имя</label>
      <input type="text" class="form-control" id="name" placeholder="Ваше имя">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="password" placeholder="Пароль">
    </div>
    <div class="mb-3 form-check">
    </div>
    <router-link to="/about" type="submit"   class="btn btn-primary">Авторизоваться</router-link>
  </div>
  </form>
</div>
</template>

<style>
form{
  width: 500px;
  height: 300px;
  padding-top: 50px;

}
</style>

<script>
export default {
    data() {
      return {
        step: 1
      }
    },
    methods: {
      click() {
        this.$router.push('/About')
      }
    }
  }


</script>