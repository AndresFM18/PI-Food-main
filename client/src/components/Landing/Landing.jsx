import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';






const Landing = ()=>{
    return(
    <div>
         <img src="https://img.freepik.com/vector-gratis/paquete-notas-recetas-dibujos-animados_52683-73979.jpg?w=2000" alt="Noimg" className='imagengrande'/>
         <Link to='/home/0' > <h1 className='entrar'>Entrar</h1> </Link>
    </div>
       
    )
}

export default Landing;