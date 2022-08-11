import React from 'react';

const RecipeCard = (props)=>{
return (
    <div>
        <h3>Nombre:{props.title}</h3>
        <img src={props.image} alt="Noimg" />
        <p>id:{props.id}</p>
        <h4>Diets:</h4>
       <ul>
        {props.diets.map((x)=>{return <li>{x}</li> })}
       </ul>
    </div>
)
}

export default RecipeCard;