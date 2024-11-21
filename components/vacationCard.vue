<template>
    <div>
        <img class="rounded" :src="vacay.img" :alt="imgAlt">
        <div class="mt-2">
            <div>
                <div class="text-xs text-slate-600 uppercase font-bold tracking-wider">{{ vacay.eyebrow }}</div>
                <div class="font-bold text-slate-700 leading-snug">
                <a :href="url" class="hover:underline">{{ vacay.title }}</a>
                </div>
                <div class="mt-2 text-sm text-slate-600">{{ vacay.pricing }}</div>
            </div>
        </div>
    </div>
</template>
  
  <script>
    export default {
      props: ["vacay"]
    }
  </script>