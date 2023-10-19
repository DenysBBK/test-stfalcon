<template>
    <el-button type="success" round @click="centerDialogVisible = true">
        <span class="text-lg p-2 pt-1" >Add movie</span>
    </el-button>
  
    <el-dialog v-model="centerDialogVisible" title="Add your movie">
        <div class="flex gap-4 flex-col">
            <el-input placeholder="Movie Title" clearable v-model="title"/>
            <el-input placeholder="Movie Year" clearable v-model="year"/>
            <el-input placeholder="Movie Poster" clearable v-model="poster"/>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="addPersonalMovie">
                    Add
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
<script setup lang="ts">
const centerDialogVisible:Ref<boolean> = ref(false);
const poster:Ref<string> = ref('');
const title:Ref<string> = ref('');
const year:Ref<string> = ref('');
    
function addPersonalMovie(){
    useMovieStore().addUserMovie({
        Title:title.value,
        Year:year.value,
        Poster:poster.value
    });
    centerDialogVisible.value = false
}
</script>
<style>
.el-dialog{
    width:50%
}
@media (max-width:768px){
    .el-dialog{
        width:100%;
    }
}

</style>
