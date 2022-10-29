'use strict'

var mongoose = require('mongoose');
var app = require('./app'); //lo reconoce como un modulo
var port = 3900;

// mongoose.set('useFinAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser: true})
        .then(() => {
            console.log('La conexion a la base de datos correcta');

            //crear servidor y ponerme a escuchar peticiones app
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            });

        });






