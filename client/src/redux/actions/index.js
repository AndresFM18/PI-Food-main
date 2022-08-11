import axios from 'axios';

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'

export const getAllRecipes = ()=>{
    return async (dispatch) =>{
        await axios.get('http://localhost:3001/recipes')
        .then((response)=>{var respuesta = response.data
        dispatch({type:GET_ALL_RECIPES, payload:respuesta})})
    }
};