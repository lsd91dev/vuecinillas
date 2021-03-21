<template>
    <header class="header"> 
        <a @click='toHome'>
            <span class="letter">V</span>
            <span class="letter">u</span>
            <span class="letter">e</span>
            <span class="letter">c</span>
            <span class="letter">i</span>
            <span class="letter">n</span>
            <span class="letter">i</span>
            <span class="letter">l</span>
            <span class="letter">l</span>
            <span class="letter">a</span>
            <span class="letter">s</span> </a>
        <small> It's time to learn and cook!</small>
    </header>
</template>

<script>
import { logoAnimation } from '../gsap/logoAnimation.js';

export default {
    name: 'Header',
    methods:{
        toHome(){
            if(this.$route.path !== '/') this.$router.push({path: '/'})
        }
    },
    mounted(){
        const letters  = document.getElementsByClassName('letter');
        logoAnimation(letters);
    }
}
</script>

<style>

.header{
    align-items:center;
    background-color: #252625;
    box-shadow: 0.1rem 0.1rem 0.3rem #F2F1DF;
    display:flex;
    height: 3em;
    width: 100%;
}
.header a{
    color: #F2F1DF;
    cursor: pointer;
    font-family: 'Work Sans', sans-serif;
    font-size: 2.5em;
    margin-left: 1em;
    position:absolute;
}


.header small{
    display: block;
    align-self: flex-end;
    justify-content: space-between;
    color: #F2F1DF;
    margin-left: auto;
    margin-right: 2.5em;
    font-style: italic;
}
</style>