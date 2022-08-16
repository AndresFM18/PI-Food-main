import React, { useEffect, useState } from 'react';
import { getPaginatedRecipes, alphabeticOrder, healthOrder, searchBar } from '../../redux/actions';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





const Principal = () => {
    
    const noNumbers = /^([^0-9]*)$/

    function nameValidator(e) {
        setNombre(e.target.value);
        if (noNumbers.test(e.target.value)) {
            setErrors({ ...errors, name: '' })
        } 
        else {
            setErrors({ ...errors, name: 'El nombre no puede contener numeros' })
        }
    };
    const [errors,setErrors] = useState({})
    const [nombre, setNombre] = useState("");
    let apoyopaginado = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let url = (ids) => { return 'http://localhost:3000/home/' + ids }
    const { id } = useParams()
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes)
    useEffect(() => {
        dispatch(getPaginatedRecipes(id))
    }, [])

    return (

        <div>

            <div className='Busqueda'>
                <form >
                    <input value={nombre} placeholder='Ingrese un nombre de una receta' onChange={(e)=>{nameValidator(e)}} type="text" name='SearchBar' />
                    <div className="message-error">{errors ? <p>{errors.name}</p> : null} </div>
                    <button disabled={errors.name && 'true'} onClick={dispatch(searchBar(nombre))} name='SearchBar_Button'>Search</button>
                </form>

            </div>

            <div>
                <h3>Filtros:</h3>
                <button onClick={() => { dispatch(alphabeticOrder(recipes)) }} name='Alfabetico_Filter'>Alfabetico</button>
                <button onClick={() => { dispatch(healthOrder(recipes)) }} name='Health_Filter'>Health Score</button>

            </div>
            <div>
                {apoyopaginado.map((x) => { return <a href={url(x)}>{x}</a> })}
            </div>
            <h1>Recetas:</h1>

            {recipes ? recipes.map(x => { return <RecipeCard id={x.id} name={x.name} image={x.image} title={x.title} diets={x.diets} healthscore={x.health} /> }) : <h1>cargando</h1>}

            <div>
                {apoyopaginado.map((x) => { return <a href={url(x)} className='links'>{x}</a> })}
            </div>
        </div>

    )

}

export default Principal;