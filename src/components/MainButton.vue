<template lang="">
    <div>
        <!-- directive -->
        <a :href="url">
        <button v-bind="buttonAttr"></button>
        <!-- v-bind untuk menambahkan atribut ke element -->
    </a>
    </div>
</template>
<script setup>

    const url = '/home'
    const isLoading = false
    const buttonAttr = {
        disable: true,
        class: "text-center",
        
    }
    const renderIsLoading = () => {
        if (isLoading){
            return loading
        } else {
            return submit
        }
    }
</script>
<style scoped>
    
</style>