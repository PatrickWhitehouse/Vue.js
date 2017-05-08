var one = new Vue({
  el: '#app-one',
  data: {
      output: 'Waiting for name...'
    },
  methods:{
    readRefs: function(){
      console.log(this.$refs.name.value);
      this.output = this.$refs.name.value;
    }
  }

});
