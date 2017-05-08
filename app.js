new Vue({
  el: '#app',
  data: {
    name: 'Patrick',
    job: 'Web developer',
    website: 'https://patrickwhitehouse.pw'
  },
  methods:{
    greet: function(time){
      return 'Good' +' '+time + ' ' + this.name;
    }
  }
});
