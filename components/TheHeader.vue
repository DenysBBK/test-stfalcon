<template>
    <div class="flex bg-blue-700 justify-between p-6">
        <nuxt-link to="/">
            <span class="text-white text-bold text-2xl">MovieFinder</span>
        </nuxt-link>
        <client-only>
            <add-movie></add-movie> 
        </client-only>
      
    </div>
</template>
