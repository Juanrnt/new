'use strict'

var express = require('express');
var ArticleController = require('../controllers/articles');

var router = express.Router();

//Rutas de prueba
router.get('/datos-curso',ArticleController.datosCurso);
router.get('/test-de-controlador',ArticleController.test);

//Rutas utiles
router.post('/save',ArticleController.save);
router.get('/articles/:last?',ArticleController.getArticles);
router.get('/article/:id',ArticleController.getArticle);
router.put('/article/:id',ArticleController.update);
router.delete('/article/:id',ArticleController.delete);
router.post('/upload-image/:id', ArticleController.upload);
module.exports = router;