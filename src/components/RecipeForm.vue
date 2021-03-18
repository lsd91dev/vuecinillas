<template>
<div class="form-container">
    <h2> Which recipe are you looking for? </h2>
  <form @submit.prevent @submit="getRecipes">
      <div class="search-container">
        <input type="text" id="query" v-model="query"/>
        <label for="query" class="label-container"> 
            <span class="label-content"> Search by name</span>  
        </label>
      </div>
      <!--<button> Buscar </button>-->
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


div.form-container{
    box-shadow: 0.1em 0.1em 0.5em #252625;
    height: 15em;
    width: 100%;
    min-width: 40em;
    padding: 1.5em;
    position: relative;
}

div.form-container .search-container {
    position: absolute;
    top: 60%;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div.form-container form label {

    position:absolute;
    margin-left:1em;
    border-bottom: 1px solid #6FA682;
    width:90%;
    height:100%;
    pointer-events:none;

}

div .form-container form input{
    background-color: inherit;
    border: 0;
    bottom: 0;
    padding-top: 25px;
    margin-left: 1.5em;
    max-width: 90%;
    position: absolute;
    width: 100%;
}

/* Animation border label */

label.label-container::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #598a6a;
    transform: translateX(-100%);
}

/* Animation text label */


label span.label-content{
    position: absolute;
    bottom: 5px;
    transition: transform 0.3s ease;
}

#query:focus{
    outline: none;
}

div.form-container form input:focus + label .label-content{
    transform: translateY(-50px);
}




/*div.form-container form button{
    background-color: #8BD9AD;
    border: 0;
    border-radius: 2em;
    bottom:0;
    color: #000;
    padding: 1em;
    left: 50%;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    position: absolute;
    transform: translateX(-50%);
    width: 20em;
}

.form-container form button:focus{
    outline:none;
}

.form-container form button:hover{
    cursor:pointer;
    background-color:#79d8a2;
}*/



</style>