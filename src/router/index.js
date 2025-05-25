import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Buku from '../views/Buku.vue'
import Anggota from '../views/Anggota.vue'
import Peminjaman from '../views/Peminjaman.vue'
import Riwayat from '../views/Riwayat.vue'


const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/buku', component: Buku },
  { path: '/anggota', component: Anggota },
  { path: '/peminjaman', component: Peminjaman },
  { path: '/riwayat', component: Riwayat },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router