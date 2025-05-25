<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
export default {
  components: { Navbar }
}
</script>

<style>
.app-layout {
  display: flex;
}

.main-content {
  margin-left: 200px; 
  padding: 20px;
  width: calc(100% - 200px);
}
</style>