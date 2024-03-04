const quizData = [
  {
    pergunta: "O que você deseja proteger?",
    opcoes: ["Produto ou Processo (Inovação)", "Nome, Logo ou Slogan (Identificação de Mercado)", "Aspecto Visual de um Produto (Estética)", "Origem Geográfica (Valor e Qualidade)", "Variedade de Planta (Agronegócio)", "Design de Circuitos Integrados (Tecnologia)"],
    proximo: [1, 2, 3, 4, 5, 6]
  },
  {
    pergunta: "A inovação é nova, possui atividade inventiva e aplicação industrial?",
    opcoes: ["Sim", "Não"],
    proximo: [7, 8]
  },
  { // Índice 5
    pergunta: "A marca é distintiva e não conflita com marcas existentes?",
    opcoes: ["Sim", "Não"],
    proximo: [9, 10]
  },
  { // Índice 6
    pergunta: "O desenho industrial é novo e original?",
    opcoes: ["Sim", "Não"],
    proximo: [11, 12]
  },
  { // Índice 7
    pergunta: "A indicação geográfica é reconhecida por atribuir qualidades ou reputação devido à sua origem?",
    opcoes: ["Sim", "Não"],
    proximo: [13, 14]
  },
  { // Índice 8
    pergunta: "A variedade de planta é nova, distinta, homogênea e estável?",
    opcoes: ["Sim", "Não"],
    proximo: [15, 16]
  },
  { // Índice 9
    pergunta: "O design de circuitos é original e resulta de um esforço intelectual próprio?",
    opcoes: ["Sim", "Não"],
    proximo: [17, 18]
  },
  { resultado: "Patente de Invenção ou Modelo de Utilidade. Prossiga para registro no INPI." }, // Índice 7
  { resultado: "Não é elegível para patente." }, // Índice 8
  { resultado: "Registro de Marca. Prossiga para registro no INPI." }, // Índice 9
  { resultado: "Não é elegível para registro como marca." }, // Índice 10
  { resultado: "Registro de Desenho Industrial. Prossiga para registro no INPI." }, // Índice 11
  { resultado: "Não é elegível para registro de desenho industrial." }, // Índice 12
  { resultado: "Registro de Indicação Geográfica. Prossiga para registro no INPI." }, // Índice 13
  { resultado: "Não é elegível para indicação geográfica." }, // Índice 14
  { resultado: "Proteção de Cultivares. Prossiga para registro no SNPC." }, // Índice 15
  { resultado: "Não é elegível para proteção de cultivares." }, // Índice 16
  {
  resultado: `
    <div>
        <strong>Relatório de Avaliação para Registro de Topografia de Circuitos Integrados (TCI)</strong><br>
        <p><strong>Resumo da Avaliação:</strong> A análise das informações fornecidas indica que sua topografia de circuito integrado é elegível para proteção sob a legislação de Topografias de Circuitos Integrados. Este relatório oferece um resumo das etapas recomendadas para registrar sua topografia e assegurar sua proteção efetiva.</p>
        <p><strong>Critérios Atendidos:</strong><br>
            - Originalidade: A topografia é resultado do esforço intelectual do criador, apresentando uma combinação única de elementos e interconexões.<br>
            - Reprodução Industrial: A topografia pode ser reproduzida em escala industrial.<br>
            - Não Divulgação: A topografia não foi previamente divulgada em eventos ou publicações científicas, mantendo sua novidade.
        </p>
        <p><strong>Etapas Recomendadas para Registro:</strong><br>
            1. Acesso ao Portal do INPI: Inicie o processo acessando o portal do INPI e criando um cadastro com login e senha.<br>
            2. Emissão do Boleto de Pagamento: Utilize o módulo GRU para emitir o boleto de pagamento das taxas necessárias.<br>
            3. Preenchimento do Formulário Eletrônico e-Chip: Acesse o formulário eletrônico e-Chip no portal do INPI, preenchendo-o com todas as informações requeridas e anexando a documentação necessária.<br>
            4. Conferência e Envio: Confira todas as informações declaradas, finalize o preenchimento do formulário e envie. Um número de pedido será gerado.
        </p>
        <p><strong>Observações Importantes:</strong><br>
            - A proteção concedida à topografia de circuitos integrados é válida por 10 anos a partir da data de registro ou da primeira exploração comercial em qualquer lugar do mundo.<br>
            - É recomendável a consulta a um profissional especializado para auxiliar no processo de registro e garantir a conformidade com todas as exigências legais.
        </p>
    </div>
  `
}
, // Índice 17
  { resultado: "Não é elegível para proteção de topografias de circuitos integrados." } // Índice 18
];

let historicoSelecoes = []; // Armazena o histórico de escolhas do usuário

function mostrarPerguntaOuResultado(indice) {
    const elemento = quizData[indice];
    const quizContainer = document.getElementById('quiz-container');
    let html = "";

    if(elemento.pergunta) {
        html += `<div class="mb-4"><h2>${elemento.pergunta}</h2></div>`;
        elemento.opcoes.forEach((opcao, indiceOpcao) => {
            html += `<button class="btn btn-info btn-lg btn-block" onclick="selecionarOpcao(${indice}, ${indiceOpcao})">${opcao}</button>`;
        });
        if (historicoSelecoes.length > 0) {
            html += `<button class="btn btn-secondary mt-3" onclick="voltar()">Voltar</button>`;
        }
    } else if(elemento.resultado) {
        document.getElementById('resultado-container').style.display = 'block';
        quizContainer.style.display = 'none';
        document.getElementById('resultado-container').innerHTML = `<div class="alert alert-success" role="alert">${elemento.resultado}</div>`;
        return;
    }

    quizContainer.innerHTML = html;
}

function selecionarOpcao(indicePergunta, indiceOpcao) {
    historicoSelecoes.push({indicePergunta, indiceOpcao}); // Adiciona a seleção atual ao histórico
    const proximoIndice = quizData[indicePergunta].proximo[indiceOpcao];
    mostrarPerguntaOuResultado(proximoIndice);
}

function voltar() {
    historicoSelecoes.pop(); // Remove a última escolha do histórico
    if (historicoSelecoes.length > 0) {
        const ultimaEscolha = historicoSelecoes[historicoSelecoes.length - 1];
        mostrarPerguntaOuResultado(ultimaEscolha.indicePergunta); // Mostra a última pergunta selecionada
    } else {
        mostrarPerguntaOuResultado(0); // Se não houver histórico, retorna à primeira pergunta
    }
}

document.addEventListener('DOMContentLoaded', () => mostrarPerguntaOuResultado(0));
