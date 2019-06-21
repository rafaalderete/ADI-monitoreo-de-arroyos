require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./database');

const port = process.env.PORT || 8080;

//Controllers
const medicionController = require('./controllers/MedicionController.js');

//Rutas
app.get('/', function(req, res) {
	res.send('Running');
});

app.get('/medicion', medicionController.getMedicion);

app.post('/medicion', medicionController.postMedicion);

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});