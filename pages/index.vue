
<template>
    <div>
        <h1>Home page</h1>
        <IconsBellIcon/>
    </div>
</template>

<script setup>
import { useMousePressed } from '@vueuse/core'

const { pressed } = useMousePressed()

</script>