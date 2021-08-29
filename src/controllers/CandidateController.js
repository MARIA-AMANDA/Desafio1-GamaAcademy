const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, datanasci, cargo, estadocivil, sexo, email, endereco , cep, bairro , estado, cidade, cel, cel2, identidade, cpf, veiculo, habitacao} = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.datanasci = datanasci;
        newCandidate.cargo = cargo;
        newCandidate.estadocivil = estadocivil;
        newCandidate.sexo = sexo;
        newCandidate.email = email;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cep = cep;
        newCandidate.estado = estado;
        newCandidate.cidade = cidade;
        newCandidate.cel = cel;
        newCandidate.cel2 = cel2;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habitacao = habitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro!');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};