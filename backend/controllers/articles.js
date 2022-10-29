'use strict'

var validator = require('validator');
const article = require('../models/article');
var Article = require('../models/article');



var controller = {
    datosCurso: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Victor robles',
            url: 'victorroblesweb.es',
            hola
        });
    },
    test: (req, res) => {
        return res.status(200).send({
            message: "Soy la accion test de mi controlador de articulos"
        });
    },

    save: (req, res) => {
        //Recoger parametros por post
        var params = req.body;
        //validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            //crear el objeto a guardar
            var article = new Article();
            //asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //guardar el articulo
            article.save((err, articleStored) => {

                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    });
                }

                //Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });

            
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
    },

    getArticles: (req, res) => {
        var query = Article.find({});

        var last = req.params.last;

        if(last || last != undefined){
            query.limit(5);
        };

        //find
        query.sort('-_id').exec((err,articles) => {
            if (err){
                return res.status(500).send({
                    status: 'error',
                    message: 'error al devolver los articulos'
                });
            }
            
            if (!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },

    getArticle: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id;

        //Comprobar que existe
        if(!articleId || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo'
            });
        };

        //Buscar el articulo
        Article.findById(articleId, (err, article) => {

            if (err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo'
                });
            }

            //Devolver el json

            return res.status(404).send({
                status: 'success',
                article
            });

        });
    },

    update: (req, res) => {
        //Recoger el id del articulo por la url
        var articleId = req.params.id;

        //Recoger los datos que llegan por put
        var params = req.body;

        //Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        if(validate_title && validate_content){
            //Find update
            Article.findByIdAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if(err){
                    return res.status(200).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }
                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });

            });
        }else{
            //Devolver una respuesta
            return res.status(200).send({
                status: 'error',
                message: 'La validacion no es correcta'
            });
        }
    },

    delete: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id;

        //fin and delete
        Article.findByIdAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista'
                });
            }
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
             });
        });

    },

    upload: (req, res) => {
        //Configurar el modulo connect multiparty router/article.js

        //Recoger el fichero de la peticion

        //Conseguir nombre y la extension del archivo

        //comprobar la extension, solo imagenes, si no es validad, borrar el fichero

        //si todo es valido

        //buscar el articulo, asignarle el nombre de la imagen y actualizar

        return res.status(404).send({
            status: 'error',
            message: 'No se ha borradodddd el articulo, posiblemente no exista'
        });


    }


}; //end controller

module.exports = controller;









