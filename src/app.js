const express = require("express");
// ______________
const userRouter = require('./users/users.router').router;//como estamos exportando un objeto tenemos q acceder a la propiedad
// ______________ para mis app.use


const app = express();
//const userDB = []; //BASE DE DATOS VACIA

// const userDB = [{ lo comnatamos ya que lo estamos haciendo ya en users.controllers
//     "id": 1,
//     "name": "",
//     "age": 20,
//     "email": "",
//     "country": "",
//     "phone": ""
// }, {
//     "id": 2,
//     "name": "",
//     "age": 20,
//     "email": "",
//     "country": "",
//     "phone": ""
// }]

app.use(express.json());

app.use('/hola', (req, res) => { res.json({message: 'peticion con use', method: req.method});
});

//aqui se encuentran las rtas de mis users
app.use('/api/v1', userRouter)//pasamos la ruta (usamos prefijos) y el handle (userRouter)
// localhost:8000/api/v1/users o sino localhost:8000/api/v1/users/:id







// ----------------------------------------
//RUTA PARA OBTENER TODOS MIS USERS
// app.get('/users', (req, res) => {
//     res.status(200).json(userDB)
// })
// //obtener la info de un usuario en especifico
// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const filteredDB = userDB.filter(item => item.id == id)

//     if(filteredDB.length > 0) {
//         res.status(200).json(filteredDB[0])
//     } else {
//         res.status(400).json({message: "Este id no es valido"})
//     }
// })


// app.post('/users', (req, res) => {
//     const data = req.body;
//     //userDB.push(data);
//     if (userDB.length === 0) {
//             const newUser = {
//                 id: 1,
//                 ...data 
//             }
//             userDB.push(newUser)
//         } else {
//             const newUser = {
//                 id: userDB[userDB.length-1].id + 1,
//                 ...data
//             }
//             userDB.push(newUser)
//         }

//         res.status(201).json(userDB)
//     })

//     //controlador MVC
//     const createUser = (userObj) => {
//         if(userDB,length === 0) {
//             const newUser = {
//                 id: 1,
//                 ...data,
//             }; 
//             userDB.push(newUser)
//         } else {
//             const newUser = {
//                 id: userDB[userDB.length-1].id + 1,
//                 ...data,
//             }
//             userDB.push(newUser);
//         }
//     }
    
// //todo: Delete Udate  ambos requieren un id

// app.delete('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const index = userDB.findIndex(item => item.id === id)
//     //userDB.splice(index, 1)
//     //res.status(204).json()
//     if (index !== -1) {
//         userDB.splice(index, 1)
//         res.status(204).json()
//     }
//     res.status(400).json({message: 'invalid ID'})

// })

// app.put('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const index = userDB.findIndex(item => item.id === id)
//     const data = req.body


//     if (index == -1) {
//         userDB.splice(index, 1)
//         res.status(400).json({message: 'invalid ID'})
//     }


//     //userDB[index] = { id, ...data}
//     if (data.name && data.age && data.email && data.country && data.phone) {//tienen q estar todos los campos llenos
//         userDB[index] = {
//             id,
//             name: data.name,
//             age: data.age,
//             email: data.email,
//             country: data.country,
//             phone: data.phone
//         }
//         res.status(200).json(userDB)
//     } //si agrego otra propiedad q no este en mi objeto no se agregara
//         else {
//             res.status(400).json({message: 'Missing data'})
//         }
// })
// ---------------------------------------- comento todos mis controladores



app.listen(8000, () => {
    console.log('SERVER STARTED AT PORT 8000')
});