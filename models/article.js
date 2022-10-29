'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; //para utilizar el objeto de este tipo

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now },
    image: String
});


module.exports = mongoose.model('Article',ArticleSchema);
//articles --> guarda documentos de este tipo y con estructura de la coleccion









