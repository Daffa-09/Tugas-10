<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar }
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