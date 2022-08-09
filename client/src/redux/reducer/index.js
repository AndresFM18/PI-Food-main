import {GET_ALL_RECIPES} from '../actions';

const initialState = {
    recipes:[],
    recipeDetail:{}
};

const rootReducer = (state = initialState, action)=>{
switch (action.type){
    case GET_ALL_RECIPES:
        return{...state,recipes:[...action.payload]}
        
        default:
            return{
                recipes:[],
                recipeDetail:{}
            }
}
};

export default rootReducer;