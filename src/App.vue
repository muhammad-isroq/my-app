<script setup>
// local registration componen
import MainButton from './components/MainButton.vue'

// raw html
const blogPost = '<p style="color:red">ini blogku</p>'
const idBlog = 'idblog'
const classBlog = 'text-bold'

</script>

<template>

<MainButton/>
<MainButton/>  
<MainButton/>
<p><OptionsComponents/></p>
<p><CompositionComponents/></p>
<div :id="idBlog" :class="classBlog">
    {{blogPost}}
</div>
<div v-html="blogPost"></div>
</template>

<style scoped>

</style>
