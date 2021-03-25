
// get meal
export const refactoredMeal = (meal) => {

    // get ingredientes and measures in arrays
    
    let [ingredients, measures] = getIngredientsAndMeasures(meal);

    // return one json Object more legible

    return newJsonMeal( meal[0], ingredients, measures)
}


// ingredientes & measures came as strIngredient0, strIngredient1 and such
// return two separates arrays with all ingredients and measures

const getIngredientsAndMeasures = ([meal]) => {
    let ingredients = [], measures = [];
    for( let key in meal ){
        if (includesIngredient(key, meal)) ingredients.push(meal[key]);
        else if (includesMeasure(key, meal)) measures.push(meal[key]);
    }
    return [ingredients, measures];
}


// extract what we need from object and insert arrays of ingredientes and measures created

const newJsonMeal = ({idMeal, strArea, strCategory, strMeal, strInstructions, strMealThumb}, ingredients, measures) => {
    return {
        id : idMeal,
        area : strArea,
        category : strCategory,
        name : strMeal,
        instructions : strInstructions,
        ingredients,
        measures,
        image : strMealThumb,
    }
}

const includesIngredient = (key, meal) => {
    return key.includes('strIngredient') && meal[key];
}

const includesMeasure = (key, meal) => {
    return key.includes('strMeasure') && meal[key] != ' ';
}
