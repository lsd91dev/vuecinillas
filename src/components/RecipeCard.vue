<template>

  <div class="cards-container">
      <div class="recipe-container" v-for="(meal, index ) in meals" :key="index" @click="goRecipe(meal.idMeal)">
          <div class="img-recipe">
          <img :src="meal.strMealThumb+'/preview'">
          </div>
          <div class="recipe-description">
              <div class="recipe-name">
                <p class="meal-name"> {{ meal.strMeal }}</p>
                <img src="@/assets/icons/rolling-ping.svg" :alt="meal.strCategory" class="svg-icon">
              </div>
            <hr>
            <div class="recipe-category">
                <p> Category: {{ meal.strCategory }} </p>
                <img src="@/assets/icons/category.svg" :alt="meal.strCategory" class="svg-icon">
            </div>
            <hr>
            <div class="recipe-area">
                <p> {{ meal.strArea }} recipe </p>
                <img src="@/assets/icons/food-location.svg" :alt="meal.strCategory" class="svg-icon">
            </div>
            
          </div>
           <button> <span>See recipe</span> </button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecipeCard',
    props:{
        meals: Array,
    },
    methods:{
        goRecipe(idMeal){
            this.$router.push({path:`/recipe/${idMeal}`});
        }
    }
}
</script>

<style>

/* parent container */
 
div.cards-container{
    display: flex;
    flex-flow: row wrap;
}

/* recipe container */

div.recipe-container{
    animation: aparition 0.5s;
    border-radius: 10px;
    height: 30em;
    margin-top: 1em;
    margin-bottom: 1.5em;
    margin-left: 1.5em;
    margin-top:2.5em;
    width: 20em;
    position: relative;
    padding: 0.8em;
    transition: all 0.3s linear;
}

div.recipe-container:hover{
    cursor:pointer;
    transform: scale(1.05, 1.05);
    transition: all 0.3s;
    
}

div.recipe-container button {
    position:absolute;
    bottom: 10%;
    left:50%;
    transform: translateX(-50%)
}

/* border recipe container */

div.recipe-container::after{
    content:'';
    position:absolute;
    border:0.2em solid #8BD9ADed;
    top:0;
    bottom:0;
    left:0;
    right:0;
}


/* recipe's image */

div.recipe-container div.img-recipe{
    height: 15em;
    width: 100%;
}

div.img-recipe img{
    height: 100%;
    width: 100%;
    border-radius: 0.2em;
    object-fit: cover;
}

div.recipe-container div.recipe-description{
    float:left;
    width:20em;
}

/* svg icons */

div.recipe-description div {
    position: relative;
}

div.recipe-container .svg-icon{
    height: 35px;
    position: absolute;
    right: 0;
    top: -50%;
    transition: all 0.5s ease;
}

/* svg animation */

div.recipe-container:hover .svg-icon{
    transform:rotate(15deg)
}

div.recipe-description p{
    text-align: center;
}

p.meal-name {
    font-size:1.2em;
    font-weight:bolder;
    overflow-wrap: break-word;
}

div.recipe-container button {
    bottom: 0;
    border: 0;
    /* border-radius:0.5em; */
    background-color: #8BD9ADed;
    cursor:pointer;
    height: 6em;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;
    z-index: 1;
}

div.recipe-container button:focus {
    outline: none;
}

div.recipe-container button span {
    font-size: 1.5em;
    font-weight: bolder;
}

/* card animation */ 

    @keyframes aparition {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }




</style>