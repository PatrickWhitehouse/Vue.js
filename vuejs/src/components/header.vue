<template>
<header>
  <h1>{{title}}</h1>
</header>
</template>

<script>
export default {
  props:{
    title:{
      type: String
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

header{
  background: lightgreen;
  padding: 10px;
}
h1{
  font-size: 2rem;
}

</style>
