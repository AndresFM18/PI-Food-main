import axios from 'axios';

export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID'
export const GET_ALL_DIETS = 'GET_ALL_DIETS'
export const GET_PAGINATED_RECIPES = 'GET_PAGINATED_RECIPES'
export const ALPHABETIC_ORDER = 'ALPHABETIC_ORDER'
export const HEALTH_ORDER = 'HEALTH_ORDER'
export const SEARCH_BAR = 'SEARCH_BAR'

export const getAllRecipes = ()=>{
    return async (dispatch) =>{
        await axios.get('http://localhost:3001/recipes')
        .then((response)=>{var respuesta = response.data
        dispatch({type:GET_ALL_RECIPES, payload:respuesta})})
    }
};

export const getRecipeById = (id) =>{
    return async (dispatch) =>{
        await axios.get(`http://localhost:3001/recipes/${id}`)
        .then((response)=>{var respuesta = response.data
        dispatch({type:GET_RECIPE_BY_ID, payload:respuesta})})
    }
};

export const getAllDiets = ()=>{
    return async (dispatch) =>{
        await axios.get('http://localhost:3001/diets')
        .then((response)=>{var respuesta = response.data
        dispatch({type:GET_ALL_DIETS, payload:respuesta})})
    }
};

export const getPaginatedRecipes = (id)=>{
    return async (dispatch) =>{
        let arreglodb = [];
        let arregloapi = [];
    await axios.get('http://localhost:3001/database')
    .then((response)=>{var respuesta = response.data
         arreglodb = respuesta.map((x)=>{return {
    id: x.id,
    name: x.name,
    resumen: x.resumen,
    health: x.health,
    instruccions: x.instruccions}})
})

await axios.get(`http://localhost:3001/apicall/${100-arreglodb.length}`)
.then((response)=>{ var respuesta = response.data
    arregloapi = respuesta.map((x)=>{return {id:x.id,
    name: x.title,
    image: x.image,
    imageType: x.imageType,
    health:x.healthScore}})    
})

let arraydefinitivo = arreglodb.concat(arregloapi)
let arreglopaginado =[];

for (let i = 0; i < arraydefinitivo.length; i += 10) {
	let division = arraydefinitivo.slice(i, i + 10);
	arreglopaginado.push(division);}

dispatch({type:GET_PAGINATED_RECIPES, payload:arreglopaginado[id]})

    }
};

export const alphabeticOrder = (array)=>{
return async (dispatch) =>{
    function SortArray(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;}
    const ordened = array.sort(SortArray);
    dispatch({type:ALPHABETIC_ORDER,payload:ordened})
}
}

export const healthOrder = (array)=>{
    return async (dispatch) =>{
        function SortArray(x,y){
            if(x.health < y.health){return -1;}
            if(x.health > y.health){return 1;}
            return 0;
        }
        const ordened = array.sort(SortArray);
        dispatch({type:HEALTH_ORDER, payload:ordened})
    }
}

export const searchBar = (nombre)=>{
    return async (dispatch) =>{
        await axios.get(`http://localhost:3001/recipes?nombre=${nombre}`)
        .then((response)=>{
            var respuesta = response.data
            dispatch({type:SEARCH_BAR, payload:respuesta})
        })
    }
}