new Vue({
    el:'#vue-app',
    data:{
        // age:25,
        // x:0,
        // y:0
    },
    methods:{
        logName: function() {
            console.log('Enter name');
        },
        logAge: function() {
            console.log('Enter age');
        }
        // add : function(inc) {
        //     this.age+=inc;
        // },
        // subtract : function(dec) {
        //     this.age-=dec;
        // },
        // updateXY : function(event) {
        //     // console.log(event)
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        // click: function() {
        //     alert('You click me');
        // }
    }
});