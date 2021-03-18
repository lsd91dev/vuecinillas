<template>
    <header class="header"> 
        <a @click='toHome'> Vuecinillas </a>
        <small> It's time to learn and cook!</small>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        toHome(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>

.header{
    align-items:center;
    background-color: #184d47;
    box-shadow: 0.1rem 0.1rem 0.3rem #000;
    display:flex;
    height: 3em;
    width: 100%;
}
.header a{
    color: #d6efc7;
    cursor: pointer;
    font-family: 'Work Sans', sans-serif;
    font-size: 2.5em;
    margin-left: 1em;
}

.header small{
    align-self:flex-end;
    margin-left: 2.5em;
    font-style: italic;
}
</style>