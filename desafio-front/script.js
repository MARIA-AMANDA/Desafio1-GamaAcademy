'use strict';
//--------CEP

const limpaFormulario  = (endereco) => {
   
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value =  '';
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';
} 
const preencherFormulario  = (endereco) => {

    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('cidade').value = endereco.localidade;
} 

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 &&  eNumero(cep);

const pesquisarCep = async() => {
    limpaFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado';
        } else {
            preencherFormulario (endereco);
        }
        
    } else {
        document.getElementById('endereco').value = 'CEP Incorreto';
    }
   
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

//------------- FORMULARIO

const  formulario = () => {
    let cadastro = {
    nome: document.getElementById('nome').value,
    dataNascimento: document.getElementById('datanasci').value,
    CargoPrentendido: document.getElementById('cargo').value,
    estadoCivil: document.getElementById('estadocivil').value,
    sexo: document.getElementById('sexo').value,
    estadoCivil: document.getElementById('estadocivil').value,
    email: document.getElementById('email').value,
    endereco: document.getElementById('endereco').value,
    cep: document.getElementById('cep').value,
    bairro: document.getElementById('bairro').value,
    estado: document.getElementById('estado').value,
    cidade: document.getElementById('cidade').value,
    cel: document.getElementById('cel').value,
    cel2: document.getElementById('cel2').value,
    identidade: document.getElementById('identidade').value,
    cpf: document.getElementById('cpf').value,
    veiculo: document.getElementById('veiculo').value,
    habitacao: document.getElementById('habitacao').value,
};
console.log(cadastro);
return cadastro;
}

const criateCandidate = async (candidate) => {

    const user = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formulario())
    });
    if (user.status === 200) {
        alert('Cadastro Realizado!');
    }

    if (user.status === 500) {
        alert('Erro! Cadastro já foi realizado anteriormente ');
    }
}


function check_form() {
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('datanasci').value;
    let CargoPrentendido = document.getElementById('cargo').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;
    let cep = document.getElementById('cep').value;
    let bairro = document.getElementById('bairro').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;
    let cel = document.getElementById('cel').value;
    let identidade = document.getElementById('identidade').value;
    let cpf = document.getElementById('cpf').value;

    if (nome == "" || dataNascimento == "" || CargoPrentendido == "" || email == "" || cep == ""
        || endereco == "" || bairro == "" || cidade == "" || estado == "" || cel == "" 
        || identidade == "" || cpf == "") {
        alert('Por favor, preencha todos os campos.');
    } else {
        criateCandidate();
    }
}
    
