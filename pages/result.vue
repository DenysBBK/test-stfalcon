<template>
    <div class="pt-10">
        <h1 class="text-black font-bold text-5xl text-center">Searh result</h1>
            <el-carousel :autoplay="false" arrow="always" height="700px"  indicator-position="none" style="
            
            margin: 0 auto;
            padding-top: 20px;" class="max-w-[100%] md:max-w-[50%]">
                <el-carousel-item v-for="mov in allMovies" :key="mov.imdbID" class="pt-20">
                    <movie-card
            :poster="mov.Poster"
            :title="mov.Title"
            :director="mov.Director"
            :year="mov.Year"
            ></movie-card>
                </el-carousel-item>
            </el-carousel>
            
        
    </div>
</template>
<script setup>

const allMovies = computed(() => {
    return useMovieStore().allMovies
});
useHead({
    title:'Results'
})

</script>