const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Diet, Recipe } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/recipes', async function (req, res) {
  const nombre = req.query.nombre

  if (nombre) {
    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${nombre}`)
      .then((response) => { respuesta = response.data.results })
      .then(() => {
        if (respuesta[0] == undefined) {
          return res.send('no hay resultados para la busqueda')
        } else {
          return res.send(respuesta)
        }
      })
  } else { await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
  .then((response)=>{ respuesta = response.data.results})
    return res.send(respuesta) }
});

router.get('/recipes/:id', async function (req, res) {
  const id = req.params.id;
  const Number_id = Number(id);

  if (isNaN(Number_id)) {
    return res.send('el id debe ser un numero')
  }
  if (Number_id <= 0) {
    res.send('El id debe ser mayor a 0')
  }
  if (Number_id % 1 != 0) {
    return res.send('El id no puede ser decimal ' + Number_id)
  }
  if (Number_id > 1165539) {

    await Recipe.findByPk(Number_id, {
      include: Diet,
    })
      .then((reciped) => {
        if (reciped === null) {
          return res.send('No existe el una receta con el id: ' + Number_id + ' En la base de datos');
        }
        return res.send(reciped)
      })
  }
  try {
    await axios.get(`https://api.spoonacular.com/recipes/${Number_id}/information?apiKey=${API_KEY}`)
      .then((response) => { respuesta = response.data })
      .then(() => {
        return res.send({
          image: respuesta.image,
          name: respuesta.title,
          types: respuesta.dishTypes,
          diets: respuesta.diets,
          resume: respuesta.summary,
          healthscore: respuesta.healthScore,
          instructions: respuesta.instructions
        })
      })
  } catch (error) {
    return res.send(error.message)
  }





})

router.post('/recipes', async function (req, res) {

  const { name, resumen, health, instruccions, } = req.body
  let Health_Number = Number(health);
  if(typeof name != 'string' || typeof resumen != 'string' || typeof instruccions != 'string'){
    return res.send('Algun dato es incorrecto')
  }
  if(isNaN(Health_Number)){
    return res.send('El Health debe ser un numero');
  }
  try {
    await Recipe.create({
      name: name,
      resumen: resumen,
      health: health,
      instruccions: instruccions
    })
      .then((creacion) => {
        if (creacion) {
          return res.send('Se ha creado la receta correctamente')
        } else {
          return res.send('No se ha creado la receta')
        }
      })
  } catch (error) {
    return res.send(error.message)
  }

})

router.get('/diets', async function (req, res) {
  const existen = await Diet.findByPk(1);
  if (existen) {
    await Diet.findAll()
      .then((dietas) => { return res.send(dietas) })
  } else {
    await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
      .then((response) => {
        respuesta = response.data.results
        const stringdietas = respuesta.map((rec) => { return rec.diets })
        const dataArr = new Set(stringdietas.flat())
        let result = [...dataArr]
        let prueba = result.map((string) => { Diet.create({ name: string }) })
        return res.send(result)
      })
  }
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
