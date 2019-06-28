require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
require('./database');

const port = process.env.PORT || 8080;

app.use(cors({origin: process.env.FRONT}));

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//Controllers
const medicionController = require('./server/controllers/MedicionController');

//Rutas
app.get('/', function(req, res) {
	res.send('Running');
});

app.get('/medicion', medicionController.getMedicion);

app.post('/medicion', medicionController.postMedicion);

app.listen(port, function() {
	console.log('App corriendo en http://localhost:' + port);
});