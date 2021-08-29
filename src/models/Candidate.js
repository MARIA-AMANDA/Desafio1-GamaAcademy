const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    datanasci: { type: Date, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    estadocivil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: true },
    endereco: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    cel: { type: String, unique: false, required: true },
    cel2: { type: String, unique: false, required: false },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    habitacao: { type: String, unique: false, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);