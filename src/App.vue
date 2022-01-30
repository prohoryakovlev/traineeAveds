<template>
  <Header>
    
  </Header>
  <router-view/>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>


<style src="@/assets/style.css">
</style>

