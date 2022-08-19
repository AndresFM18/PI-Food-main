import React from 'react';
import './RecipeCard.css'
const url = (ids)=>{return 'http://localhost:3000/details/' + ids}



const RecipeCard = (props)=>{
return (
   
    <div className='container'>
        <h3 className='cursiv'>Nombre: {props.name}</h3>
        <a href={url(props.id)}><img className='image' src={props.image} alt='details'/></a>
        <p className='cursiv'>id:{props.id}</p>
       <p className='cursiv'>HealthScore: {props.healthy}{props.healthscore}</p>
       <ul>
        {props.diets? props.diets.map((x) => { return <li>{x}</li> }):<p>No hay dietas</p>}
       </ul>
       
    </div>
)
}

export default RecipeCard;