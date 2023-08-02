<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Kategori</h1>
        <br>
        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="kategori in state" :key="kategori.id"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="p-8 rounded-t-lg" :src="kategori.gambar_kategori" alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <h4 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mr-2">
                        {{ kategori.nama_kategori }}
                    </h4>

                    <br>
                    <div>
                        <router-link :to="{ name: 'detailKategori', params: { id_kategori: kategori.id } }">
                            <h4 class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Lihat
                            </h4>
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '@/assets/Kategori';

export default {
    setup(props, context) {
        const state = reactive(kategori.kategori);

        onMounted(() => {
            context.emit('id-menu', 5);
        });

        return {
            state
        }
    }
}
</script>

<style scoped></style>