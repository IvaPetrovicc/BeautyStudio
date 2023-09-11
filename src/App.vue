<template>
  <div class="overflow-x-hidden min-h-screen">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '@/main.js';

export default {
  name: 'App',
  components: {
    NavBar
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.$store.dispatch("fetchUser", user);
    });
  }
}
</script>