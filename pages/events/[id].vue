<template>
    <div>
        event name: {{ $route.params.id }}
    </div>
</template>

<script setup>
    // const route = useRoute();
    // console.log(route.params);
    const nuxtApp = useNuxtApp();
    console.log(nuxtApp);
    
</script>

<style lang="scss" scoped>

</style>