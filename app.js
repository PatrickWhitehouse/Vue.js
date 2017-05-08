var one = new Vue({
  el: '#app-one',
  data: {
    title: 'Vue App One'
    },
  methods:{

  },
  computed:{
    greet: function(){
      return 'Hello from App one'
    }
  }
});

var two = new Vue({
  el: '#app-two',
  data: {
    title: 'Vue App Two'
    },
  methods:{
    changeTitle:function(){
      this.title = "Hello guyz";
    }
  },
  computed:{
    greet: function(){
      return 'Hello from App Two'
    }
  }
});
