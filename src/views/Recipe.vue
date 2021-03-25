<template>

  <div>
      <Header />
      <div class="recipe-container">
      <div :style="{backgroundImage:`url(${meal.image})`}" class="recipe-background">
        <div class="recipe-name">
          <h1>{{ meal.name }}</h1>
        </div>
        </div>
      <div class="recipe-card-ingredients">
        <img src="@/assets/imgs/icons/ingredients.svg" :alt="meal.strCategory" class="svg-icon">
          <h2> Ingredients </h2>
          <hr>
          <ul>
            <template v-for="(ingredient,index) in meal.ingredients">
            <li :key="ingredient.id"> <span> {{ meal.measures[index] }} </span> <span>{{ ingredient }}</span> 
            <CheckIngredient :id_ingredient="index+ingredient" />
            </li>   
            </template>
          </ul>
 
      </div>
        <div class="recipe-card-instructions">
          <img src="@/assets/imgs/icons/rolling-ping.svg" :alt="meal.strCategory" class="svg-icon">
            <h2> Instructions </h2>
            <hr>
            <p> {{ meal.instructions }} </p>
        <div class="svg-container">
            <img src="@/assets/imgs/Chef-bro.svg">
          </div>
      </div>

      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import CheckIngredient from '@/components/CheckIngredient.vue';

import { getRecipeFetch } from '../helpers/getRecipes.js';
import { refactoredMeal } from '../js/refactorRecipe.js';


export default {
  components: { Header, CheckIngredient },
  data() {
    return{
      idMeal : this.$route.params.id,
      meal : '',
    }
  },
  created(){
    getRecipeFetch(this.idMeal).then( ({ meals }) => {
      this.meal = meals;
      this.meal = refactoredMeal(this.meal);
      }
      ).catch(error => {
      console.log(error)
      this.$router.push({path: '/PageNotFound'})
    });
  }
  }
</script>

<style scoped>

  div.recipe-container {
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
  }

  div.recipe-container div.recipe-background{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 10em;
    margin-top: 0;
    position:relative;
    text-align: center;
    width: 100%;
  }

  div.recipe-background::before{
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgb(37 38 37) 1%, rgb(111 166 130 / 0%) 80%, rgb(255 255 255) 90%);
  }

  div.recipe-name{
    background-color: white;
    border-radius: 110px 110px 0 0;
    box-shadow: 0em -1em 1em -0.5em #252625;
    height: 8em;
    left: 50%;
    min-width: 20em;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -40%);
    width: 50%;
  }

  div.recipe-name h1{
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 100%;
    word-break: break-word;
  }


  div.recipe-container div.recipe-card-instructions, div.recipe-card-ingredients {
    box-shadow: 0.1em 0.1em 0.5em #252625;
    flex:1;
    margin-left:1.5em;
    margin-top:2.5em;
    padding:1em;
    position:relative;
    width:50%;
    margin-right:1.5em;
    animation: aparition 0.5s;
  }

  div.recipe-card-ingredients ul {
    list-style: none;
  }

  div.recipe-card-ingredients ul li {
    padding:1em;
    border-bottom: 1px solid #25262552;
    position:relative;
    font-size:1.1em;
  }

  div.recipe-card-instructions{
    text-align:justify;
  }

  div.recipe-card-instructions p{
    padding: 1.1em;
  }

  div.recipe-card-instructions div.svg-container {
    margin: auto;
    max-width: 20em;
  }




  .svg-icon {
    height: 50px;
    position: absolute;
    right: 0;
    transform: translate(-50%,0%);
    width: 50px;
}

    @keyframes aparition {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }

@media screen and (max-width: 795px){
  div.recipe-container {
    flex-direction: column;
    flex-wrap:wrap;
    gap: 1em;
  }

    div.recipe-container div.recipe-card-instructions, div.recipe-card-ingredients {
    margin:auto;
    width:90vw;
    
  }
}
</style>