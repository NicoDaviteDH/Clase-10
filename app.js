// Requerimos los módulos que necesitaremos para el funcionamiento de la aplicación
const express = require('express');
const path = require('path');

// Guardamos la funcionalidad de express en la variable app
const app = express();

// Definimos la ubicación de la carpeta de archicos públicos
app.use(express.static(path.join(__dirname, './public')));

// Definimos las rutas para los distintos tipos de requests

// GET --> "/"
app.get('/', (req, res) => {
    // A través de res.sendFile() enviamos la ruta absoluta del recurso que deseamos mostrar
    res.sendFile(path.join(__dirname, './views/index.html'));
})

// GET --> "/babbage"
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, './views/babbage.html'));
})

// GET --> "/berners-lee"
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, './views/berners-lee.html'));
})

// GET --> "/clarke"
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './views/clarke.html'));
})

// GET --> "/hamilton"
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hamilton.html'));
})

// GET --> "/hopper"
app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, './views/hopper.html'));
})

// GET --> "/lovelace"
app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, './views/lovelace.html'));
})

// GET --> "/turing"
app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, './views/turing.html'));
})

//Definimos el puerto en el que vamos a levantar el servidor
let port = 3030;

// A traves de app.listen() definimos el puerto en el que deseamos levantar el servidor
// Una vez levantado el servidor se ejecuta el callback para imprimir por consola un menaje informativo
app.listen(port, () => {
    console.log('Servidor levantado en el puerto ' + port);
})