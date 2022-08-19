import React from 'react';
import { useState } from 'react';
import './CreateRecipe.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';




function CreateRecipe() {

    const [name, setName] = useState("");
    const [resumen, setResumen] = useState("");
    const [health, setHealth] = useState(1);
    const [instruccions, setInstruccions] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});


    const noNumbers = /^([^0-9]*)$/
    const Numbers = /^[0-9]*$/





    function nameValidator(e) {
        setName(e.target.value);
        if (noNumbers.test(e.target.value)) {
            setErrors({ ...errors, name: '' })
        }
        else {
            setErrors({ ...errors, name: 'El nombre no puede contener numeros' })
        }
    };

    function resumenValidator(e) {
        setResumen(e.target.value);
        if (noNumbers.test(e.target.value)) {
            setErrors({ ...errors, resumen: '' })
        } else {
            setErrors({ ...errors, resumen: 'El resumen no puede contener numeros' })
        }
    };

    function healthValidator(e) {
        setHealth(e.target.value);
        if (Numbers.test(e.target.value)) {
            setErrors({ ...errors, health: '' })
        } else {
            setErrors({ ...errors, health: 'El health debe ser un numero' })
        }
    }
    function instruccionsValidator(e) {
        setInstruccions(e.target.value);
        //if (noNumbers.test(e.target.value)) {
        /// setErrors({ ...errors, instruccions: '' })
        //} else {
        // setErrors({ ...errors, instruccions: 'las instruccions no deben contener numeros' })
        //}
    }
    let verdadAbsoluta = (errors) => {
        if (errors.name || errors.resumen || errors.health || errors.instruccions) {
            return true
        } else { return false }
    }
    let post = async (e) => {
        e.preventDefault();
        try {
            if (name === "" && resumen === "" && health === 1 && instruccions === "") {
                return setMessage('Todos los campos estan vacios')
            }
            let res = await axios.post("http://localhost:3001/recipes", {
                name: name,
                resumen: resumen,
                health: health,
                instruccions: instruccions
            });
            if (res.data === "llave duplicada viola restricción de unicidad «recipes_name_key24»") {
                return setMessage('Ya existe');
            }
            if (res.data === 'Se ha creado la receta correctamente') {
                setName("");
                setResumen("");
                setHealth(1);
                setInstruccions("");
                setMessage("Recipe created succesfully");

            } else {
                setMessage("Some error occured")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className='formulario'>
                <div class="formulario-contacto">

                    <div class="formulario-imagen-trasera">
                        <img src="https://p4.wallpaperbetter.com/wallpaper/40/140/49/food-pasta-meat-still-life-wallpaper-preview.jpg" alt="NOIMG" />
                    </div>

                    <div class="formulario-imagen-frontal">
                      
                        <p>CREA TU RECETA</p>
                    </div>

                </div>
                <div className='formulario-sugerencias'>
                    <form onSubmit={post}>
                        <label>Nombre</label>
                        
                        <input type="text"
                            value={name}
                            placeholder='Ingrese el nombre de la receta...'
                            onChange={(e) => { nameValidator(e) }}
                        />
                        <div className="message-error">{errors ? <p>{errors.name}</p> : null} </div>
                        <label> Resumen</label>
                        <input type="text"
                            value={resumen}
                            placeholder='Ingrese el Resumen de su receta...'
                            onChange={(e) => { resumenValidator(e) }}
                        />
                        <div className="message-error">{errors ? <p>{errors.resumen}</p> : null} </div>
                        <label>Puntaje saludable</label>
                        <input type="number"
                            value={health}
                            placeholder='Health-Value'
                            onChange={(e) => { healthValidator(e) }}
                        />
                        <div className="message-error">{errors ? <p>{errors.health}</p> : null} </div>
                        <label>Intrucciones</label>
                        <input type="text"
                            value={instruccions}
                            placeholder='Introduzca sus instrucciones...'
                            onChange={(e) => { instruccionsValidator(e) }}
                        />
                        <div className="message-error">{errors ? <p>{errors.instruccions}</p> : null} </div>

                        <div className="message">{message ? <p>{message}</p> : null} </div>


                        <button type="submit" disabled={verdadAbsoluta(errors) && 'true'}>Create Recipe</button>

                    </form>
                </div>

            </div>
        </div>


    );
}

export default CreateRecipe;