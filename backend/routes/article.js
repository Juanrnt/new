'use strict'

var express = require('express');
var ArticleController = require('../controllers/articles');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload =multipart({ uploadDir: './upload/articles'});

//Rutas de prueba
router.get('/datos-curso',ArticleController.datosCurso);
router.get('/test-de-controlador',ArticleController.test);

//Rutas utiles
router.post('/save',ArticleController.save);
router.get('/articles/:last?',ArticleController.getArticles);
router.get('/article/:id',ArticleController.getArticle);
router.put('/article/:id',ArticleController.update);
router.delete('/article/:id',ArticleController.delete);
router.post('/upload-image/:id', md_upload, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getimage);
router.get('/search/:search', ArticleController.search);

module.exports = router;