const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

 router.get('/recipes', async function(req,res){
    const nombre = req.query.nombre

    if(nombre){
     await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${nombre}`)
     .then((response)=> {respuesta = response.data.results})
     .then(()=>{if(respuesta[0]==undefined){
       return res.send('no hay resultados para la busqueda')
     }else{
      return res.send(respuesta)  
     }}) 
    }else{return res.send('No se ha ingresado query correcta')}});

    router.get('/recipes/:id', async function(req,res){
        const id = req.params.id;
        const Number_id = Number(id);
        
        if(isNaN(Number_id)){
          return res.send('el id debe ser un numero')
        }
        if(Number_id % 1 != 0){
          return res.send('El id no puede ser decimal ' + Number_id)
        }
       if(Number_id > 1165539){
        return res.send('Base de datos')
       }
       try {
        await axios.get(`https://api.spoonacular.com/recipes/${Number_id}/information?apiKey=${API_KEY}`)
        .then((response)=>{respuesta = response.data})
        .then(() =>{return res.send(respuesta)})
       } catch (error) {
        console.log(error.message)
       }

       
       
        

    })
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
