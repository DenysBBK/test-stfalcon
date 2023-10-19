<template>
    <div class="flex flex-col mr-0 items-center pt-20 pl-3 pr-3">
        <h1 class="text-black font-bold text-3xl text-center">MovieFinder is a search engine for movies</h1>
        <h2 class="text-black font-bold text-2xl pt-6 text-center">You can find any movie, just search fot it!</h2>
        <div class=" flex-col flex gap-10 w-30 border-2 border-blue-400 rounded-lg p-10 mt-10 items-center max-w-lg container">
            <el-input placeholder="Find your movie" clearable v-model="input"/>
            <el-button type="success" round @click="getMovies">
            Find
            </el-button>
            <span class="text-center" v-if="noMovies">{{ errorMessage }}</span>
        </div>
    </div>
   
</template>
<script setup lang="ts">
const input:Ref<string> = ref('');
const noMovies:Ref<boolean> = ref(false);
const errorMessage:Ref<string> = ref('')


async function getMovies(){
    try{
        await useMovieStore().getMovies(input.value);
        useRouter().push('/result')

    }catch(error:any){      
        errorMessage.value = error.message;
        noMovies.value = true       
    }    
    
};
useHead({
    title:'Main'
})

</script>