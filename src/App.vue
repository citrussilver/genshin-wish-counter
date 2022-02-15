<template>
  <div id="app">
    <Main />
    <footer class="footer footerspan">
      <div class="content has-text-centered">
        <p>2022 Genshin Wish Counter</p>
        <p>by DrunkIce<sup>3</sup></p>
      </div>
    </footer>
  </div>
</template>

<script>

import Main from './components/Main.vue'

export default {
  name: 'App',
    components: {
      Main
    }
  }
</script>

<style>
.footer {
  background: #e69138;
  color: #fff;
}
</style>