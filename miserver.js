var express = require('express');
var fk = require('faker');
var ld = require('lodash');
var app = express();

 
//funcion para generar usuarios
var generarUsuario = function(){

	var usuario = {
			id : fk.random.uuid(),
			userName : fk.internet.userName(),
			contraseña : fk.internet.password(),
			nombre : fk.name.findName(),
			email : fk.internet.email(),
			imagen : fk.internet.avatar(),
			telefono : fk.phone.phoneNumberFormat(),
			pais : fk.address.country(),
			ciudad : fk.address.city(),	
	}	

	return usuario;
}

//funcion para generar posts
var generarPost = function(){

	var post = {
			id : fk.random.uuid(),
			userName : fk.internet.userName(),
			imagen : fk.internet.avatar(),
			pais : fk.address.country(),
			contenido : fk.lorem.paragraph(),
			fecha : fk.date.future(),
			url : fk.internet.url()

	}	

	return post;
}


app.get('/', function (req,res){
	res.send('Mi primer servidor!');
})


app.get('/usuarios', function (req,res){
	var cantidad = ld.random(5,10);
	var usuarios = ld.times(cantidad, generarUsuario);

	res.json(usuarios);
})

app.get('/Posts', function (req,res){

	var cantidad = ld.random(5,10);
	var posts = ld.times(cantidad, generarPost);

	res.json(posts);
})


app.listen(3000);
