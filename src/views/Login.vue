<template>

    
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <form @submit.prevent="login">
                        <div>
                            <h1 class="text-2xl font-semibold">Login</h1>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="relative">
                                    <label for="usrername" class="block font-medium mr-32">Username</label>
                                    <input type="text" id="username" v-model="username" class="mt-1 p-2 rounded border w-60"
                                        required>
                                </div>
                                <div class="relative">
                                    <label for="password" class="block font-medium mr-32">Password</label>
                                    <input type="password" v-model="password" id="password"
                                        class="mt-1 p-2 rounded border w-60" required>
                                </div>
                                <div class="relative">
                                    <button class="bg-green-500 text-white rounded-md px-2 py-1">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { users } from '../assets/user';

export default {
    data() {
        return {
            username: '',
            password: '',
            isLoggedIn: true
        };
    },
    methods: {
        login() {
            const foundUser = users.find(user => user.username === this.username && user.password === this.password && user.isLoggedIn == true);
            if (foundUser) {
                alert('Login berhasil');
                this.$router.push('/produk');
                // Anda dapat melakukan navigasi ke halaman lain jika login berhasil
            } else {
                alert('Username atau Password salah')
            }
        },
    },
};

</script>