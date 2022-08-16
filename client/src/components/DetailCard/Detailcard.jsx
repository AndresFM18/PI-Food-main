import React from 'react';

const DetailCard = (props)=>{
return (
    <div>
        <h3>Nombre:{props.name}</h3>
        <img src={props.image} alt="Noimg" />
        <h4>Diets:</h4>
       <ul>
        {props.diets.map((x)=>{return <li>{x}</li> })}
       </ul>
       <h4>Types:</h4>
       <ul>
        {props.types.map((x)=>{return <li>{x}</li> })}
       </ul>
       <p>Resumen:{props.resume}</p>
       <h3>HealthScore:{props.health}</h3>
       <p>Instruccions:{props.instruccions}</p>
    </div>
)
}

export default DetailCard;