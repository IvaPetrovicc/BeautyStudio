<template>
    <nav
        class="fixed top-0 z-20 w-screen flex items-center justify-between py-5 pl-4 md:p-5 border-b-black border-b bg-white">
        <div class="uppercase tracking-wide text-xl font-bold text-dark">
            <RouterLink to="/">BeautyStudio</RouterLink>
        </div>

        <!-- Links on large & medium screens -->
        <div v-if="user" class="hidden md:flex items-center gap-4 cursor-pointer text-dark font-semibold">

            <RouterLink to="/">Homepage</RouterLink>
            <RouterLink to="/res">Book an Appointment</RouterLink>
            <RouterLink to="/appointments">My Appointments</RouterLink>
            <RouterLink @click="logout" to="/">Logout</RouterLink>

        </div>

        <div v-else class="hidden md:flex items-center gap-4 cursor-pointer text-dark font-semibold">
            <RouterLink to="/about">About us</RouterLink>
            <RouterLink to="/res">Book an Appointment</RouterLink>
            <RouterLink to="/auth">Login</RouterLink>
        
        </div>

        

        <!-- Links on mobile devices -->
        <div v-if="user" class="flex md:hidden font-bold items-center gap-4 cursor-pointer text-dark text-lg pr-5">

            <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-house" /></RouterLink>

            <RouterLink to="/appointments"><font-awesome-icon icon="fa-solid fa-calendar-check" /></RouterLink>
            <RouterLink to="/res"><font-awesome-icon icon="fa-solid fa-calendar-check" /></RouterLink>

            <RouterLink @click="logout" to="/"><font-awesome-icon icon="fa-solid fa-right-from-bracket" />
            </RouterLink>

        </div>

        <div v-else class="flex md:hidden font-bold items-center text-dark text-lg pr-5">
            <RouterLink to="/auth"><font-awesome-icon icon="fa-solid fa-right-to-bracket" /></RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            user: null,
        }
    },
    mounted() {
        this.user = this.$store.state.user.loggedIn;
    },
    // watch for this.$store.state.user.loggedIn
    watch: {
        '$store.state.user.loggedIn': function (value) {
            if (!value) {
                this.user = value;
                this.$router.push('/auth');
            } else {
                this.user = value;
                this.$router.push('/');
            }
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logOut');
        },
    
    },
}
</script>