import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'




const NavBar = ()=>{
    return(
        <div className="barra-superior">
          
          <div class="logotipo">
                <img src="https://fripozo.com/wp-content/uploads/icon-recetas.png" alt="noIMG"/>
          </div>
          <div className="menu-grande">
            <ul>
            
            <Link to="/create">Create </Link>

            <Link to="/home/0">Home</Link>
            </ul>
          <div>
          
          </div>
        </div>
          
          
        
     
      </div>
    )
}

export default NavBar;
