import axios from "axios";

const getRecipesFetch =  async ( recipe ) => {
    const url = process.env.VUE_APP_MEAL_API;
    const { data } = await axios.get(`${ url }/search.php?s=${ encodeURI( recipe ) }`);
    return data;
}

const getRecipeFetch = async ( idMeal ) => {
    const url = process.env.VUE_APP_MEAL_API;
    const { data } = await axios.get(`${ url }/lookup.php?i=${ idMeal }`);
    return data;
}

export { getRecipesFetch, getRecipeFetch }
