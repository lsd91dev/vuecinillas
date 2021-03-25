<template>
 <div class="container-error">
    <div class="error-img">
        <img :src="require(`@/assets/imgs/error404/${img}`)">
    </div>
    <div class="error-msg">
        
        <p> Oops!</p>
        <p>The page you are looking for does not exist.</p>
        <button @click="goHome()"><span>Wanna go back?</span></button>
    </div>
   
 </div>
</template>

<script>
export default {
    name: 'PageNotFound',
    data(){
        return{
            imgs : [
                '404-1.svg', 
                '404-2.svg', 
                '404-3.svg'
            ],
            img: ''
        }
    },
    beforeMount(){
       this.img = this.getImageError();
    },
    methods:{
        goHome(){ this.$router.push({path:'/'})},

         getImageError(){
            let image_random = Math.round(Math.random() * (this.imgs.length-1));
            return this.imgs[image_random];
        }
    }
}
</script>

<style scoped>

    div.container-error{
        display:flex;
        flex-flow: row wrap;
        margin:auto;
        width: 75vw;
    }

    div.container-error div{
        width:50%;
        box-sizing:content-box;
    }

    div.container-error img {
        width:100%;
        height:100%;
    }
    div.container-error div.error-msg p:first-child{
        font-size:8em;
    }

    div.container-error div.error-msg p:last-of-type{
        font-size:2em;
        margin-top: -3em;
    }

    div.container-error button {     
        background: -webkit-linear-gradient(to right, #a1ffce, #faffd1);
        background: linear-gradient(to right, #a1ffce, #faffd1);
        border:0;
        border-radius:3em;
        cursor:pointer;
        height:5em;
        width:100%;
    }

    div.container-error button:focus {
        outline:none;
    }

    div.container-error button span {
        font-size:1.5em;
        font-size: 1.5em;
        font-weight: bold;
    }

    @media screen and (max-width:1245px) {
    div.container-error{
        flex-flow:row wrap-reverse;
    }
     div.container-error .error-msg{
        width:100%;
    }

    div.container-error .error-img{
        max-width: 50% !important;
        min-width: 30em;
        margin: auto;
    }

    }

</style>