//method 2 to create a filter
 
Vue.filter('uppercase', function(value){
    return value.toUpperCase();
});
// Create component <greeting></greeting>
Vue.component('greeting',{
    template: '<h1>Hello ! I am a component </h1>'
})
Vue.component('button-counter',{
    data(){
        return {
            count:0
        }
    },
    template: '<button @click="count++"> Yon cliked me {{count}} times.</button>'
})

new Vue({
    el:'#app',
    data:{
        message: "hello world!",
        first_name: "Harry",
        last_name: "Potter",
        city: "London",
        htmlContent: "<div><h3>Some HTML Content</h3></div>",
        htmlMessage:"Hello world!",
        imgSrc: "https://picsum.photos/200",
        date:'',
        counter: 0,
        colorText:"white",
        bgColor:"red",
        seen: "",
        dataToggle: true,
        datas: [
            {name:"Harry Potter", age: 25},
            {name:"Ron Weasley" ,age: 28},
            {name:"Hermione Grandger", age : 33},
            {name:"Luna Lovegood", age: 65}
        ],
        name:"", 
        checked: false,
        checkname:[],
        picked:"",
        selected:'',
        num1: 10,
        num2: 20,
        text:"",
        showtext: true,

    },

    computed: {
        greet(){
            return "hello I'm "+this.first_name+" "+this.last_name+" form "+this.city;
        },
        now(){
            return Date().toLocaleString();
        },
        stringRev(){
            return this.message.split('').reverse().join('');
        },
        result(){
            return this.htmlMessage;
        },
        sum(){
            return this.num1+this.num2;
        }
    },
    methods: {
        changeText(){
            this.message="Another Message";   
        },
        showDate(){
            this.date=Date();
        },
        counterData(){
            this.counter+=1;
        },
        changeColor(){
            this.bgColor=this.bgColor="blue";
        }

    },
    //method 1 to create filter 
    filters: {
        capitalize(value){
            return value.charAt(0).toUpperCase()+value.slice(1);
        },
        counterletter(value){
            return value.length;
        },
        repeatText(string,times){
            return string.repeat(times);
        }
    }
   

})