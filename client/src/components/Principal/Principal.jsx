import React, { Component } from 'react';
import { getAllRecipes } from '../../redux/actions';
import { useDispatch, connect } from 'react-redux';





class Principal extends Component {
    render() {
        return (

            <div>
                <button onClick={()=>{this.props.getAllRecipes()}}>Prueba</button>
            </div>

        )
    }

}

export const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps,{ getAllRecipes })(Principal);