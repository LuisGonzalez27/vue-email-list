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
        this.callApi();
    }
}).mount('#app');