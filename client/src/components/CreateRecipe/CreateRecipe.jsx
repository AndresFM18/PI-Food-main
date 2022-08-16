import React from 'react';
import { useState} from 'react';
import './CreateRecipe.css';
import axios from 'axios';




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

        <div className='formulario'>
            <div><h1 className='titulo'>Create your recipe</h1></div>
            <form onSubmit={post}>
                <input type="text"
                    value={name}
                    placeholder='Nombre'
                    onChange={(e) => { nameValidator(e) }}
                />
                <div className="message-error">{errors ? <p>{errors.name}</p> : null} </div>

                <input type="text"
                    value={resumen}
                    placeholder='Resumen'
                    onChange={(e) => { resumenValidator(e) }}
                />
                <div className="message-error">{errors ? <p>{errors.resumen}</p> : null} </div>

                <input type="number"
                    value={health}
                    placeholder='Health-Value'
                    onChange={(e) => { healthValidator(e) }}
                />
                <div className="message-error">{errors ? <p>{errors.health}</p> : null} </div>
                <input type="text"
                    value={instruccions}
                    placeholder='Instruccions'
                    onChange={(e) => { instruccionsValidator(e) }}
                />
                <div className="message-error">{errors ? <p>{errors.instruccions}</p> : null} </div>

                <div className="message">{message ? <p>{message}</p> : null} </div>
                
                
                <button type="submit" disabled={verdadAbsoluta(errors) && 'true'}>Create Recipe</button>

            </form>
        </div>
    );
}

export default CreateRecipe;