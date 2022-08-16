import React, { useEffect } from 'react';
import { getRecipeById } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';




const RecipeDetail = ()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const recipe = useSelector((state) => state.recipeDetail)
    useEffect(()=>{
           dispatch(getRecipeById(id))
     },[])

    return(
    <div>
     
         <h1>Fuciona</h1>
         {recipe? <div>
        <h3>Nombre:{recipe.name}</h3>
        <img src={recipe.image} alt="Cargando" />
        <h4>Diets:</h4>
       <ul>
        {recipe.diets?recipe.diets.map((x)=>{return <li>{x}</li> }):<h1>cargando</h1>}
       </ul>
       <h4>Types:</h4>
       <ul>
        {recipe.types?recipe.types.map((x)=>{return <li>{x}</li> }):<h1>cargando</h1>}
       </ul>
       <p>Resumen:{recipe.resume}</p>
       <h3>HealthScore:{recipe.health}</h3>
       <p>Instruccions:{recipe.instruccions}</p>
    </div>:<h1>no existe</h1>}
         <button onClick={()=>{console.log(recipe)}}>xs</button>
    </div>
       
    )

}

export default RecipeDetail;