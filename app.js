new Vue({
  el: '#app',
  data: {
    age: 21
  },
  methods:{
    add: function(inc){
      this.age+=inc;
    },
    subtract: function(dec){
      this.age-=dec;
    }
  }
});

new Vue({
  el: '#canvas',
  data: {
    x:0,
    y:0
  },
  methods:{
    updatexy:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
