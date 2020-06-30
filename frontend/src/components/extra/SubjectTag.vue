<template>
  <b-tag v-bind:style="{color: subject.color}">{{subject.name}}</b-tag>
</template>

<script>
export default {

    props: {
        subject: {
            type: Object,
            required: true
        } 
    },
}
</script>

<style scoped>
   
</style>