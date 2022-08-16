import React from 'react';
import './RecipeCard.css'
const url = (ids)=>{return 'http://localhost:3000/details/' + ids}



const RecipeCard = (props)=>{
return (
    //ttps://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg
    <div className='container'>
        <h3 className='cursiv'>Nombre: {props.name}</h3>
        <a href={url(props.id)}><img className='image' src={props.image} alt='details'/></a>
        <p className='cursiv'>id:{props.id}</p>
       <p className='cursiv'>HealthScore: {props.healthy}{props.healthscore}</p>
    </div>
)
}

export default RecipeCard;