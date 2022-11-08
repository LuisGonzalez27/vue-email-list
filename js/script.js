const {createApp} = Vue

createApp({
    data(){
        return{
            valoreApi: [],
        }
    },
    methods:{
        callApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email)=>{
                console.log(email.data.response);
                this.valoreApi.push(email.data.response);
            })
        }
    },
    created(){
        // chiamo 10 volte la funzione
        for(let i=0; i <10; i++){
            this.callApi();
        }
    }
}).mount('#app');