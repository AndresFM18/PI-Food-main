import React, { Component } from 'react';
import { getAllRecipes } from '../../redux/actions';
import { connect } from 'react-redux';
import RecipeCard from '../RecipeCard/RecipeCard';





class Principal extends Component {
    render() {
        return (
        
        <div>
            <div>
            <input type="text" name='SearchBar' placeholder='Inserte el nombre de una receta'/>
            <button name='SearchBar_Button'>Search</button>
            </div>

            <div>
            <h3>Filtros:</h3>
            <button name='Dietas_Filter'>Dietas</button>
            <button name='Alfabetico_Filter'>Alfabetico</button>
            <button name='Health_Filter'>Health Score</button>

            </div>
                <h1>Dietas:</h1>
                {this.props.recipes?this.props.recipes.map(x => {return <RecipeCard id={x.id} name={x.name} image={x.image} title={x.title} diets={x.diets} />}):<h1>cargando</h1>}
        </div>

        )
    }
    componentDidMount(){
        this.props.getAllRecipes();
      
      }
}

export const mapStateToProps = (state) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps,{ getAllRecipes })(Principal);