<template>
    <div>
        <br>
        <center>
            <h1 class="mb-6 text-3xl font-bold">About</h1>
        </center>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup(props, context) {
        onMounted(() => {
            context.emit('id-menu', 3);
        })
    }
}
</script>