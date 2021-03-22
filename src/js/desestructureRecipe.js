// ingredients are stored as (strIngredient1, strIngredient2, etc) and (strMeasure1, strMeasure2, etc) so it's necessary to filter them by property's name


// get meal
export const refactoredMeal = (meal) => {

    // get ingredientes and measures in arrays
    
    let [ingredients, measures] = getIngredientsAndMeasures(meal);

    // return one json Object more legible

    return filterMeal( meal, ingredients, measures)
}


const getIngredientsAndMeasures = ([meal]) => {
    let ingredients = [], measures = [];

    // ingredientes & measures came as strIngredient0, strIngredient1 and such so it's better to push them into two news arrays
    for( let key in meal ){
        if(key.includes('strIngredient') && meal[key]){
            ingredients.push(meal[key]);
        }else if (key.includes('strMeasure') && meal[key] != ' '){
            measures.push(meal[key]);}
    }

    return [ingredients, measures];
}


// extract what we need from object and insert arrays of ingredientes and measures created

const filterMeal = ({idMeal, strArea, strCategory, strMeal, strInstructions, strMealThumb, strSource, strYoutube}, ingredients, measures) => {
    return {
        id : idMeal,
        area : strArea,
        category : strCategory,
        name : strMeal,
        instructions : strInstructions,
        ingredients,
        measures,
        image : strMealThumb,
        source : strSource,
        youtube : strYoutube
    }
}
