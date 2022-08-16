import {GET_ALL_RECIPES, GET_RECIPE_BY_ID, GET_ALL_DIETS, GET_PAGINATED_RECIPES, ALPHABETIC_ORDER, HEALTH_ORDER, SEARCH_BAR} from '../actions';

const initialState = {
    recipes:[],
    recipeDetail:{},
    diets:[]
};

const rootReducer = (state = initialState, action)=>{
switch (action.type){
    case GET_ALL_RECIPES:
        return{...state,recipes:[...action.payload]}

        case GET_RECIPE_BY_ID:
            return{...state,recipeDetail:{...action.payload}}
        
            case GET_ALL_DIETS:
                return{...state,diets:[...action.payload]}

                case GET_PAGINATED_RECIPES:
                    return{...state, recipes:[...action.payload]}

                    case ALPHABETIC_ORDER:
                        return{...state, recipes:[...action.payload]}

                        case HEALTH_ORDER:
                            return{...state, recipes:[...action.payload]}

                            case SEARCH_BAR:
                                return{...state,recipes:[...action.payload]}
        default:
            return{
                recipes:[],
                recipeDetail:{},
                diets:[]
            }
}
};

export default rootReducer;