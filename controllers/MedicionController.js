const Medicion = require('../models/Medicion.js');

exports.getMedicion = async (req, res) => {
    const mediciones = await Medicion.find()
    res.send(mediciones);
};

exports.postMedicion = async (req, res) => {
    const mediciones = req.body;
    nuevasMediciones = [];
    mediciones.forEach(function(medicion) {
        var nivel = medicion.name;
        var temperatura = medicion.temperatura;
        var timestamp = medicion.timestamp;
        var newMedicion = new Medicion({nivel, temperatura, timestamp});
        nuevasMediciones.push(newMedicion);
    });
    await Medicion.insertMany(nuevasMediciones);
    res.send('Mediciones recibidas');
};