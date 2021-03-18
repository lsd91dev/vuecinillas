<template>
  <div class="home">
    <Header />
    <RecipeForm @action="getRecipes" />
    <RecipeCard :meals="meals" />
  </div>
</template>

<script>
 import RecipeForm from '@/components/RecipeForm';
 import RecipeCard from '@/components/RecipeCard';
 import Header from '@/components/Header';

export default {
 
  name: 'Home',
  components: {
    RecipeForm,
    RecipeCard,
    Header
  },
  data(){
    return{
      meals: []
    }
  },
  methods:{
    getRecipes(meals){
        this.meals = meals;
    }
  }
}
</script>
