const mongoose = require('mongoose');

// especificando um esquema o qual a arquitetura dos meus dados devem seguir
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

// instanciando esse esquema como um Model
const HomeModel = mongoose.model('Home', HomeSchema);
// exportando o Model
module.exports = HomeModel;