new Vue({
    el:'#vue-app',
    data:{
        name: '',
        age: ''
    },
    methods:{
        logName: function() {
            console.log('Enter name');
        },
        logAge: function() {
            console.log('Enter age');
        }
    }
});