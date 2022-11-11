const router = require('express').Router();// LO ESTAMOS IMPORTANDO Y ADEMAS LO ESTAMOS EJECUTANDO ( Y ALMACENANDO EN UNA VARIABLE)
//ESTA REEMPLAZANDO A  const {Ruter} = require('express')
                    //const router = Router()

const httpUsers = require('./users.http');// importamos nuestros 
//servuicios

//Primer metodo para hacer las rutas
// router.get('/users', httpUsers.getAll)
// router.post('/users')

// router.get('/users/:id', httpUsers.getById)
// router.put('/users/:id')
// router.delete('/users/:id')

//mejor hacerlo asi: segundo METODO

router.route('/users')
.get(httpUsers.getAll)
.post(httpUsers.create)

router.route('/users/:id')
.get(httpUsers.getById)
.put(httpUsers.update)
.delete(httpUsers.deleteById)
// .post()
// .delete()

module.exports = {
    router
}