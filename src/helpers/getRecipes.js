import axios from "axios";

export const getRecipesFetch =  async ( recipe ) => {
    const url = process.env.VUE_APP_MEAL_API;
    const { data } = await axios.get(`${ url }s=${ encodeURI( recipe ) }`);
    return data
}
