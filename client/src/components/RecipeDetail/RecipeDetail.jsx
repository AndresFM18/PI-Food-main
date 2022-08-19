import React, { useEffect } from 'react';
import { getRecipeById } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './RecipeDetail.css';
import NavBar from '../NavBar/NavBar';




const RecipeDetail = () => {
     const dispatch = useDispatch();
     const { id } = useParams();
     const recipe = useSelector((state) => state.recipeDetail)
     useEffect(() => {
          dispatch(getRecipeById(id))
     }, [])

     return (
          <div>
               <NavBar></NavBar>
               {recipe ? <div>
                   
                    <div className="descripcion">
                         
                         <div className="imagen-descripcion">
                              <h1>{recipe.name}</h1>
                              <img src={recipe.image} alt="NoIMG" />
                              <div className='listas'> 
                         
                              <h3>
                                   Diets:
                              </h3>
                              <ul>
                                   {recipe.diets ? recipe.diets.map((x) => { return <li>{x}</li> }) : <h1>cargando</h1>}
                              </ul>
                              <br />
                              <h3>Types:</h3>
                              <ul>
                                   {recipe.types ? recipe.types.map((x) => { return <li>{x}</li> }) : <h1>cargando</h1>}
                              </ul>
                         </div>
                         </div>

                         <div className="texto-descripcion">
                              <h3>Resumen:</h3>
                              <p>{recipe.resume}</p>
                              <h3>Instruccions:</h3>
                              <p>{recipe.instructions}</p>
                              <h3>HealthScore:</h3>
                              <h3>{recipe.healthscore}</h3>
                              <h3>{recipe.health}</h3>
                         </div>
                        
                    </div>
               </div> : <h1>No existe</h1>}

          </div>

     )

}

export default RecipeDetail;