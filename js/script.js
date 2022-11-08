const {createApp} = Vue

createApp({
    data(){
        return{
            valoreApi: [],
            newtask: '',
        }
    },
    methods:{
        callApi(){
            for(let i=0; i <10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email)=>{
                console.log(email.data.response);
                this.valoreApi.push(email.data.response);
            })
        }
    }
    }
}).mount('#app');