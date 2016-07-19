var express = require('express');//requerir express doc//express.js.com

var app = express();//iniciar nueva apliacion del servidor 

app.get('/', function(req, res) {//get permite recibir peticiones get en la url ingresada
	res.send('Hola mundo');//retornar al cliente un hola mundo
});

app.listen(3000, function(err){//iniciar servidor y hacer que escuche en el puerto 300
	if(err) return console.log('Hubo un error'), process.exit(1);//exit te saca de la aplicacfon y si es diferente a 0 lo toma como error
	console.log('Paisagram esta escuchando en el puerto 3000');
});