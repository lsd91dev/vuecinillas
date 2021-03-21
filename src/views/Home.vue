<template>
  <div class="home">
    <Header />
    <RecipeForm @action="getRecipes" />
  
  <template v-if="submitted">
    <template v-if="meals">
      <RecipeCard :meals="meals" />
    </template>
    
    <template v-else>
      <NoResultsFound />
    </template>
  </template>
  </div>
</template>

<script>
 import RecipeForm from '@/components/RecipeForm';
 import RecipeCard from '@/components/RecipeCard';
 import NoResultsFound from '@/components/NoResultsFound';
 import Header from '@/components/Header';

export default {
 
  name: 'Home',
  components: {
    RecipeForm,
    RecipeCard,
    NoResultsFound,
    Header
  },
  data(){
    return{
      meals: [],
      submitted: false,
    }
  },
  methods:{
    getRecipes(meals){
        this.meals = meals;
        this.submitted = true;
    }
  }
}
</script>
