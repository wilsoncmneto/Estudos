// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    calcularIMCETMB();
});

// Função para calcular IMC e TMB juntos
function calcularIMCETMB() {
    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);
    const idade = Number(document.querySelector('#idade').value);
    const genero = document.querySelector('#genero').value;
    const atividade = Number(document.querySelector('#atividade').value);

    if (!peso || !altura || !idade) {
        setResultado('Preencha todos os campos corretamente.', false);
        return;
    }

    // Cálculo do IMC
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const imcMsg = `Seu IMC é ${imc} (${nivelImc}).`;

    // Cálculo do TMB
    const tmb = getTmb(peso, altura, idade, genero);
    const tmbFinal = (tmb * atividade).toFixed(2);
    const tmbMsg = `Seu TMB é ${tmb} kcal/dia e seu gasto calórico total com atividade é ${tmbFinal} kcal/dia.`;

    setResultado(`${imcMsg}<br>${tmbMsg}`, true);
}

// Função para calcular o IMC
function getImc(peso, altura) {
    return (peso / (altura ** 2)).toFixed(2);
}

// Função para determinar o nível do IMC
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    return nivel[0];
}

// Função para calcular o TMB (Taxa de Metabolismo Basal)
function getTmb(peso, altura, idade, genero) {
    if (genero === 'masculino') {
        return Math.round(88.36 + (13.4 * peso) + (4.8 * altura * 100) - (5.7 * idade));
    } else {
        return Math.round(447.6 + (9.2 * peso) + (3.1 * altura * 100) - (4.3 * idade));
    }
}

// Função para exibir o resultado na tela
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = document.createElement('p');
    p.classList.add(isValid ? 'paragrafo-resultado' : 'bad');
    p.innerHTML = msg;
    resultado.appendChild(p);
}
