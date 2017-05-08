new Vue({
  el: '#app',
  data: {
    name: 'Patrick',
    job: 'Web developer'
  },
  methods:{
    greet: function(time){
      return 'Good' +' '+time + ' ' + this.name;
    }
  }
});
