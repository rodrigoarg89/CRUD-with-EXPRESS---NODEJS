#Orden

1. Definir las rutas
2. Definir los verbos de cada ruta. Ejemp q la ruta 
    /users tenga 
    -GET (obtener todos los usuarios)
    -POST. (crear un nuevo usuario)
    
    La ruta /users/:id
    -GET (obtener un usuario especifico)
    -PUT (editar un usuario)
    -PATCH (editar un usuario)
    -DELETE (eliminar un usuario)

3. Crear los controladores
```    javascript
        const getAllUsers = () => {
            return userDB
        }
```
4. Crear los servicios - estos mandan a llamar a los controladores

5. Crear las rutas
