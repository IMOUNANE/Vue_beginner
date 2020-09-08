

var app_one= new Vue({
    el:'#vue-app-one',
    data: {
        message: 'Hi! There! I am 1st Instance'
    },
    methods: {
        changeMessage(){
            app_two.message="message two change with app one from instance";
        }
    }
});
var app_two= new Vue({
    el:'#vue-app-two',
    data: {
        message: 'Hi! There! I am 2nd Instance',
        
    }
});