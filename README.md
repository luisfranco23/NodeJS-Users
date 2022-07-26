# Orden

1. Definir las rutas
2. Definir los verbos de cada ruta

/users
- GET (Obtener todos los usuarios)
- POST (Crear un nuevo usuario)
/users/:id
- GET (Obtener usuario por id)
- PUT (Editar usuario)
- PATCH (Editar usuario)
- DELETE (Eliminar usuario)


3. Crear los contrladores
```Javascript
    const getAllUsers = () => {
        return userDB
    }
```

4. Crear los servicios
5. Crear las rutas