import { NuxtLink } from './.nuxt/components';

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <nav class="flex justify-center space-x-4">
        <NuxtLink to="/" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</NuxtLink>
        <NuxtLink to="/events" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Events</NuxtLink>
        <NuxtLink to="/params" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">params</NuxtLink>
      </nav>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>
 