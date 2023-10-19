<template>
    <div class="flex items-center flex-col gap-2">
        <img :src="props.poster">
        <h1 class="text-black font-bold text-3xl sm:max-w-[50%] max-w-[100%] text-center">{{ props.title }}</h1>
        <p class="text-black font-bold text-1xl">{{ props.year }}</p>
        <nuxt-link to="/details">
            <el-button type="success" round @click="movieDetails(props.title)">
                Details
            </el-button>
        </nuxt-link>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    poster?:string,
    title:string,
    director?:string,
    year?:string

}>();
async function movieDetails(title:string){
    try{
        await useMovieStore().getDatails(title);
    }catch(er){
        console.log(er)
        
    }

}

</script>