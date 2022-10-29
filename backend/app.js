'use strict'

//cargar modulos de node para crear servidor
var express = require('express');  //para cargar el modulo de node
var bodyParser = require('body-parser');

//ejecutar express (http)
var app = express();

//cargar ficheros rutas
var article_routers = require('./routes/article');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //convertir las peticiones a un objeto json

//CORS

//añadir prefijos a rutas / cargar rutas
app.use('/api',article_routers);

//ruta o metodo de prueba para el API REST

/*  Se pasa para el controlador 
app.post('/datos-curso', (req, res) => {
    console.log('Hola Mundo');
    var hola = req.body.hola;

    // para explicar que puedo devolver plantillas
    return res.status(200).send(`
        <u> 
            <li>NodeJS</li>
            <li>Angular</li>
            <li>Vue</li>
        </ul>
    `);
    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Victor robles',
        url: 'victorroblesweb.es',
        hola
    });
});
*/
//exportar modulos (fichero actual)
module.exports = app; //para permitir usar el objeto fuera del fichero