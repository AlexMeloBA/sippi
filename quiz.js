const quizData = [
    {
        pergunta: "O que é mais importante para você em propriedade intelectual?",
        opcoes: ["Proteção de ideias", "Liberdade de expressão", "Acesso à informação", "Inovação tecnológica"],
        proximo: [1, 2, 3, 4]
    },
    {
        pergunta: "Você acha que patentes incentivam a inovação?",
        opcoes: ["Sim", "Não", "Depende do contexto"],
        proximo: [5, 6, 7]
    },
    // Continuação das perguntas e definição dos caminhos baseados nas opções
    {
        pergunta: "Qual a sua opinião sobre direitos autorais na internet?",
        opcoes: ["São necessários", "São restritivos", "Dependem da situação"],
        proximo: [8, 9, 10]
    },
    // Exemplos de resultados baseados em caminhos específicos
    {
        resultado: "Você valoriza a proteção de ideias e inovação. A propriedade intelectual é essencial para garantir que inovadores tenham os incentivos corretos."
    },
    {
        resultado: "Você acredita na liberdade de expressão e no acesso à informação como pilares da sociedade. É importante encontrar um equilíbrio entre proteção e acesso."
    },
    // Adicione mais resultados conforme necessário
];

function mostrarPerguntaOuResultado(indice) {
    const elemento = quizData[indice];
    const quizContainer = document.getElementById('quiz-container');
    let html = "";

    if(elemento.pergunta) {
        html += `<div class="mb-4"><h2>${elemento.pergunta}</h2></div>`;
        elemento.opcoes.forEach((opcao, indiceOpcao) => {
            html += `<button class="btn btn-info btn-lg btn-block" onclick="selecionarOpcao(${indice}, ${indiceOpcao})">${opcao}</button>`;
        });
    } else if(elemento.resultado) {
        document.getElementById('resultado-container').style.display = 'block';
        quizContainer.style.display = 'none';
        document.getElementById('resultado-container').innerHTML = `<div class="alert alert-success" role="alert">${elemento.resultado}</div>`;
        return;
    }

    quizContainer.innerHTML = html;
}

function selecionarOpcao(indicePergunta, indiceOpcao) {
    const proximoIndice = quizData[indicePergunta].proximo[indiceOpcao];
    mostrarPerguntaOuResultado(proximoIndice);
}

document.addEventListener('DOMContentLoaded', () => mostrarPerguntaOuResultado(0));
