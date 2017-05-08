<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-body v-bind:ninjas="ninjas"></app-body>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Body from './components/body.vue';
export default {

  data(){
    return{
      ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
      title: "Vue JS"
    }
  },
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-body': Body
  }
}
</script>

<style>
body{
  font-family: sans-serif;
}
</style>
