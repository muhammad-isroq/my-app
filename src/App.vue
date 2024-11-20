<script setup>
// local registration componen
import MainButton from './components/MainButton.vue'

// raw html
const blogPost = '<p style="color:red">ini blogku</p>'
const idBlog = 'idblog'

</script>

<template>

<MainButton/>
<MainButton/>  
<MainButton/>
<p><OptionsComponents/></p>
<p><CompositionComponents/></p>
<div :id="idBlog">
    {{blogPost}}
</div>
<div v-html="blogPost"></div>
</template>

<style scoped>

</style>
