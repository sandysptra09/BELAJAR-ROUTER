<template>
    <!-- component -->
    <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <!-- logo -->
        <h1 class="w-3/12">
            <a href="">
                <h1 viewBox="0 0 248 31" class="h-9 w-auto hover:text-green-500 duration-200 text-3xl font-semibold">Sansanpedia.</h1>
                
            </a>
        </h1>

        <!-- navigation -->
        <nav class="nav font-semibold text-lg">
            <ul class="flex items-center">
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                    <router-link :class="{ active: rl_1 }" to="/">
                        <a href="">Home</a>
                    </router-link>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <router-link :class="{ active: rl_2 }" to="/contact">
                        <a href="">Contact</a>
                    </router-link>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <router-link :class="{ active: rl_3 }" to="/about">
                        <a href="">About</a>
                    </router-link>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <router-link :class="{ active: rl_4 }" to="/produk">
                        <a href="">Product</a>
                    </router-link>
                </li>
                <li
                    class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                    <router-link :class="{ active: rl_5 }" to="/kategori">
                        <a href="">Category</a>
                    </router-link>
                </li>
            </ul>
        </nav>

        <!-- buttons --->
        <div class="w-3/12 flex justify-end">
            <a href="">
                <svg class="svg-inline--fa fa-search fa-w-16 fa-9x h-8 p-1 hover:text-green-500 duration-200"
                    aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                        class=""></path>
                </svg>
            </a>
            <a href="">
                <svg class="svg-inline--fa fa-shopping-cart fa-w-18 fa-7x h-8 p-1 hover:text-green-500 duration-200"
                    aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-cart" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                        class=""></path>
                </svg>
            </a>
        </div>
    </header>
</template>



<script>
import { ref } from "vue";

export default {
    props: {
        idMenu: Number,
    },
    setup(props) {
        const rl_1 = ref(false);
        const rl_2 = ref(false);
        const rl_3 = ref(false);
        const rl_4 = ref(false);
        const rl_5 = ref(false);

        if (props.idMenu == 1) {
            rl_1.value = true;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
        }
        else if (props.idMenu == 2) {
            rl_1.value = false;
            rl_2.value = true;
            rl_3.value = false;
            rl_4.value = false;
        }
        else if (props.idMenu == 3) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = true;
            rl_4.value = false;
        }
        else if (props.idMenu == 4) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = true;
        }

        else if (props.idMenu == 5) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = true;
        }

        return {
            rl_1,
            rl_2,
            rl_3,
            rl_4,
            rl_5
        }
    }


}
</script>

<style scoped></style>