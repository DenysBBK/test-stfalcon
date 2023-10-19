<template>
    <div class="flex flex-col items-center pt-10">
        <h1 class="text-black font-bold text-5xl text-center">Movie details</h1>
        <div class="flex flex-col items-center pt-10 gap-4 md:flex-row">
            <img :src="details.Poster">
            <div class="flex flex-col gap-5 p-2">
                <span class="text-black font-bold text-2xl">Title: <span class="font-normal">{{ details.Title }}</span></span>
                <span class="text-black font-bold text-2xl">Director: <span class="font-normal">{{ details.Director }}</span></span>
                <span class="text-black font-bold text-2xl">Year: <span class="font-normal">{{ details.Year }}</span></span>
            </div>
        </div>
    </div>
    
</template>
<script setup>

const details = computed(() => {
    return useMovieStore().movieDetails
});

useHead({
    title:'Details'
})

</script>