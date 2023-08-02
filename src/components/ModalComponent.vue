<script setup>
import { Toast } from 'flowbite-vue'
import { ref } from 'vue';

const isShowToast = ref(false)
function closeToast() {
    isShowToast.value = false
}
function showToast() {
    isShowToast.value = true
}
</script>
<template>
    <button @click="showToast" type="button" data-te-ripple-init data-te-ripple-color="light"
    class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Tambah ke Keranjang
    </button>
    <Toast :type="'success'" closable v-if="isShowToast" @close="closeToast" class="fixed top-5 right-5">
        Berhasil menambahkan ke Keranjang !
    </Toast>
</template>
