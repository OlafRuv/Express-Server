// Usando objeto express 
const express = require('express')
// App de express
const app = express()
// Puerto que vamos a usar local host:3000
const port = 3000

// Path inicial al que respondera la url de locslhost:3000
app.get('/',(req,res) => {
    res.send("Hello world")
})
// Agregamos una ruta
app.get('/launchx',(req,res) => {
    res.send("Bienvenidos a LaunchX")
})
// Agregamos ruta para regresar un objeto
app.get('/explorersInNode',(req,res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})
// Nueva ruta que reciba un parametro
app.get('/explorers/:explorerName', (req,res) => {
    res.send(req.params)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
