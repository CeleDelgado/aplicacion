const consulta = (permiso) => new Promise ((resolve, reject) => {
    if(permiso){
        resolve("Genial, accediste a la info")
    }
    reject("No tiene los permiso para ingresar, lo siento")
})

console.log(consulta(true))