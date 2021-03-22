<template>

  <div class="recipe-card">
      <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { getRecipeFetch } from '../helpers/getRecipes.js';
import { refactoredMeal } from '../js/desestructureRecipe.js';


export default {
  components: { Header },
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
      console.log(this.meal);
      }
      ).catch(error => {
      console.log(error)
    });
  }
  }
</script>

<style>

</style>