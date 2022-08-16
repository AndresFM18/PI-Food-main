import React from 'react';
import {Link} from 'react-router-dom';




const NavBar = ()=>{
    return(
        <div className="nav-bar">
        <Link to="/create">Create</Link>
        <br></br>
        <Link to="/home">Home</Link>
      </div>
    )
}

export default NavBar;
