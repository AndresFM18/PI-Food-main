import React from 'react';
const url = (ids)=>{return 'http://localhost:3000/details/' + ids}
const RecipeCard = (props)=>{
return (
    
    <div>
       
        <h3>Nombre: {props.name}</h3>
        <a href={url(props.id)}><img src={props.image} onClick={()=>{console.log(props.id)}} alt="Noimg" /></a>
        <p>id:{props.id}</p>
        <h4>Diets:</h4>
       <ul>
        {props.diets? props.diets.map((x)=>{return <li>{x}</li> }):<h1>cargando</h1>}
       </ul>
       <p>HealthScore: {props.healthscore}</p>
    </div>
)
}

export default RecipeCard;