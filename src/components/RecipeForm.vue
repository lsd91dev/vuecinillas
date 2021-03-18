<template>
<div class="form-container">
  <form @submit.prevent @submit="getRecipes">
      <label for="query"> Buscar por nombre </label>
      <input type="text" id="query" v-model="query" placeholder="Ejemplo: Tortilla de patatas"/>
      <button> Buscar </button>
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
                    // console.log(meals)
                    if(meals.length == 1){
                        let idMeal = meals[0].idMeal;
                        this.$router.push({path: `/recipe/${idMeal}`})
                    }else{
                        this.$emit('action', meals);
                    }
                }
            })
        }
    },
}
</script>

<style>


.form-container{
    background-color: #d6efc7;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width:20em;
}

.form-container form button{
    width: 10em;
    padding: 1em;
    border: 0;
    border-radius: 2em;
    background-color: #184d47;
}

.form-container form button:focus{
    outline:none;
}

.form-container form button:hover{
    cursor:pointer;
    background-color:#1e5a53;
}


.form-container form input{
    background-color: inherit;
    border:0;
    border-bottom: 1px solid #000;
    width:100%;
}

input:focus{
    outline:none;
}

form button{
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    position: relative;
    left: 50%;
    transform: translateX(-50%)
}
</style>