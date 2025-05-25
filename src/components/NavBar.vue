<template>
  <nav class="sidebar">
    <ul>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/anggota">Anggota</router-link></li>
      <li><router-link to="/peminjaman">Peminjaman</router-link></li>
      <li><router-link to="/buku">Buku</router-link></li>
      <li><router-link to="/riwayat">Riwayat</router-link></li>
      <li><router-link to="/login">Logout</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #34495e;
  padding-top: 20px;
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.sidebar li {
  padding-left: 20px;
}

.sidebar a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  display: block;
  padding: 10px 0;
}

.sidebar a.router-link-active {
  background-color: #2ecc71;
  color: #fff;
  border-radius: 4px;
}
</style>