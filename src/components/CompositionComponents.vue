<template lang="">
    <div>
        <h1>{{nama}}</h1>
        <button @click=showName>Show Name</button>
    </div>
</template>
<script setup>
const nama = "muhammad isroq1"

const showName = () => document.writeln(nama)
</script>
<style lang="">
    
</style>