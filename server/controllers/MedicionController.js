const Medicion = require('../models/Medicion.js');

exports.getMedicion = async (req, res) => {
    const mediciones = await Medicion.find({}, { _id: 0 , __v: 0})
    mediciones.sort(function (a, b) {
        var key1 = a.timestamp;
        var key2 = b.timestamp;
    
        if (key1 < key2) {
            return -1;
        } else if (key1 == key2) {
            return 0;
        } else {
            return 1;
        }
    });
    console.log("Mediciones consultadas:");
    console.log(mediciones);
    res.send(mediciones);
};

exports.postMedicion = async (req, res) => {
    const medicion = req.body;
    let nivel = medicion.nivel;
    let temperatura = medicion.temperatura;
    let timestamp = medicion.timestamp * 1000;
    let newMedicion = new Medicion({nivel, temperatura, timestamp});
    await newMedicion.save();
    console.log("Mediciones recibidas:");
    console.log(newMedicion);
    res.send();
};