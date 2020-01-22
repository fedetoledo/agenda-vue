<template>
  <v-chip dark small label :color="subject.color">{{subject.name}}</v-chip>
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