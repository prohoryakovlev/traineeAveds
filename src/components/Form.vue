<template>
<div class="col-sm-6 mx-auto">
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email адрес</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Мы никогда не передадим вашу электронную почту кому-либо еще.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Я не робот</label>
  </div>
  <router-link to="/contend" type="submit" class="btn btn-primary">Регистрация</router-link>
  </form>
</div>
</template>


<script>

</script>


<style>

</style>