<template>
<div class="form-container">
    <h1> Which recipe are you looking for? </h1>
    <img src="@/assets/imgs/Cooking-bro.svg" alt="" class="cooking-search">
    <div class="thinkin-container"> <p> Hope you like this web!</p></div>
    
  <form @submit.prevent @submit="getRecipes">
      <div class="search-container">
        <button> <font-awesome-icon :icon="['fas', 'search']" size="2x" :style="{color: 'white'}"/></button>
        <input type="text" id="query" v-model="query" required/>
        <label for="query" class="label-container"> 
            <span class="label-content"> Search by name</span>
            
        </label>
        
      </div>

  </form>
</div>

</template>

<script>

 import { getRecipesFetch } from '../helpers/getRecipes.js';

export default {
    name: 'RecipeForm',
    data(){
        return{
            query: '',
        }
    },
    methods:{
        getRecipes(){
            getRecipesFetch( this.query ).then( ({meals}) => {
                if(meals){
                    if(meals.length == 1){
                        let idMeal = meals[0].idMeal;
                        this.$router.push({path: `/recipe/${idMeal}`})
                    }else{
                        this.$emit('action', meals);
                    }
                }else{
                    this.$emit('action', meals);
                }
            }).catch( (error)=> {
                console.log(error)
            })
        }
    },
}
</script>

<style scoped>


div.form-container{
    box-shadow: 0.1em 0.1em 0.5em #252625;
    height: 15em;
    margin-top: 1.5em;
    margin-left:1.5em;
    min-width: 40em;
    padding: 1.5em;
    position: relative;
    width: 90%;
}

div.form-container form{
    height: 75%;
    overflow: hidden;
    position: relative;
    width: 65%;
}

div.form-container .search-container {
    left: 50%;
    position: absolute;
    top: 35%;
    transform: translate(-50%, -35%);
    width: 100%;
}


div.form-container form label {
    border-bottom: 1px solid #6FA682;
    height: 100%;
    left: 0;
    position: absolute;
    pointer-events: none;
    width: 35em;
}

div .form-container form input{
    background-color: inherit;
    border: 0;
    bottom: 0;
    font-size: 1.5em;
    padding-top: 25px;
    max-width: 90%;
    position: absolute;
    width: 100%;
    left: 0;
}

/* Animation border label */

label.label-container::after{
    border-bottom: 3px solid #598a6a;
    bottom: -2px;
    content: "";
    height: 100%;
    position: absolute;
    transform: translateX(-100%);
    width: 100%;
    transition: all 0.5s ease;
}

/* Animation text label */


label span.label-content{
    bottom: 5px;
    position: absolute;
    transition: all 0.5s ease;
}

#query:focus{
    outline: none;
}

div.form-container form input:focus + label .label-content, div.form-container form input:valid + label .label-content {
    color: #598a6a;
    font-size:0.8em;
    transform: translateY(-30px);
}

div.form-container form input:focus + label.label-container::after, div.form-container form input:valid + label.label-container::after{
    transform: translateX(0%);
}

/* svg image */ 

img.cooking-search {
    bottom: 0;
    fill:none;
    height: 25em;
    left: 75%;
    position: absolute;
    transform: translate(-20%,17%);
    z-index:1;
}

/* container hidden  -> activated by svg */

.thinkin-container{
    background-color: #252625;
    box-shadow: 5px 7px 8px 0px #252625c4;
    opacity:0;
    transition: opacity 0.2s;
    pointer-events: none;
}


.thinkin-container p{
    color:white;
    font-style: italic;
    position: absolute;
    text-align: center;
    top: 35%;
    transform: translateY(-35%);
    z-index: 1;
}

.thinkin-container::after{
    background-color: #252625;
    bottom: 25%;
    content: '';
    height: 60%;
    opacity:0;
    position: absolute;
    right: 1%;
    top: 60%;
    transform: translate(20%, -60%) skew(37deg, 40deg) rotate(60deg);
    width: 25px;
}

/* container thinkin animation */

img.cooking-search:hover + .thinkin-container{
    border-radius: 50%;
    height: 7em;
    opacity: 1;
    position: absolute;
    right: 20%;
    top: 0.2em;
    transition: opacity 0.2s;
    width: 10em;
}

img.cooking-search:hover + .thinkin-container::after{
    opacity:1;
    transition: opacity 0.2s;
}

/* svg media query */


@media screen and (max-width: 985px){
    img.cooking-search {
        transform: translate(-25%,17%);
    }
}



div.form-container form button {
    border: 0;
    background-color: #598a6a;
    cursor: pointer;
    position: absolute;
    width: 35em;
    margin-top: 2em;
    height: 3em;
}

div.form-container form button:hover {
    background-color: #3f614b;
}

div.form-container form button:focus{
    outline:none;
}




</style>