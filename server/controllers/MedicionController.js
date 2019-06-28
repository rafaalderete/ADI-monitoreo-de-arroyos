const Medicion = require('../models/Medicion.js');

exports.getMedicion = async (req, res) => {
    const mediciones = await Medicion.find({}, { _id: 0 , __v: 0})
    console.log("Mediciones consultadas:");
    console.log(mediciones);
    res.send(mediciones);
};

exports.postMedicion = async (req, res) => {
    console.log(Date.now());
    const mediciones = req.body;
    nuevasMediciones = [];
    mediciones.forEach(function(medicion) {
        var nivel = medicion.nivel;
        var temperatura = medicion.temperatura;
        var timestamp = medicion.timestamp * 1000;
        var newMedicion = new Medicion({nivel, temperatura, timestamp});
        nuevasMediciones.push(newMedicion);
    });
    await Medicion.insertMany(nuevasMediciones);
    console.log("Mediciones recibidas:");
    console.log(nuevasMediciones);
    res.send();
};