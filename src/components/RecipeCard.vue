<template>
  <div class="recipe-card">
      <div v-for="(meal, index ) in meals" :key="index">
          <img :src="meal.strMealThumb+'/preview'">
          <p> Recipe name: {{ meal.strMeal }}</p>
          <p> Category: {{ meal.strCategory }}</p>
          <p> {{ meal.strArea }} recipe </p>
          <p> {{ meal.idMeal }} </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecipeCard',
    props:{
        meals: Array,
    }
}
</script>

<style>

</style>