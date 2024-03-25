const quizData = [
  { // Índice 0
    pergunta: "O que melhor descreve a sua criação ou inovação?",
    opcoes: [
      "Uma invenção ou solução técnica para um problema específico",
      "Uma nova variedade de planta ou semente",
      "Uma obra de criação artística, literária, musical, fotográfica, ou software",
      "Um nome, símbolo, ou logotipo usado para identificar produtos ou serviços no mercado",
      "Um design visual aplicado a produtos que melhora a estética ou aparência",
      "Uma configuração única de circuitos usada em microeletrônica",
      "Uma característica especial ou reputação de um produto diretamente ligada à sua geografia de origem"
    ],
    proximo: [1, 65, 2, 26, 3, 72, 49]
  },
  { // Índice 1
    pergunta: "Esta solução é aplicável a qual campo?",
    opcoes: [
      "Tecnologia, Engenharia, ou Ciências Aplicadas e etc...",
      "Agricultura ou Botânica"
    ],
    proximo: [11, 65]
  },
  { // Índice 2
    pergunta: "Qual é o meio principal de expressão da sua obra?",
    opcoes: [
      "Visual, Textual, Sonoro, ou Combinado",
      "Interface de Usuário ou Software",
    ],
    proximo: [16, 22]
  },
  { // Índice 3 - DESENHO INDUSTRIAL
    pergunta: "A criação é um desenho associado à forma plástica ornamental de um objeto ou ao conjunto ornamental de linhas e cores?",
    opcoes: ["Sim", "Não"],
    proximo: [4, 91]
  },
  { // Índice 4
    pergunta: "O design possui características únicas que o distinguem de designs anteriores?",
    opcoes: ["Sim", "Não"],
    proximo: [5, 91]
  },
  { // Índice 5
    pergunta: "Pode ser aplicado a um produto, proporcionando resultado visual novo e original na sua configuração externa?",
    opcoes: ["Sim", "Não"],
    proximo: [6, 91]
  },
  { // Índice 6
    pergunta: "Seu produto possui algum elemento contrário à moral e aos bons costumes?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 7]
  },
  { // Índice 7
    pergunta: "Seu produto possui algum elemento que ofenda a honra ou imagem de pessoas, ou atente contra liberdade de consciência, crença, culto religioso ou ideia e sentimentos dignos de respeito e veneração?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 8]
  },
  { // Índice 8
    pergunta: "Seu produto possui uma forma comum, ou pode ser facilmente encontrada?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 9]
  },
  { // Índice 9
    pergunta: "Sua criação possui viabilidade econômica?",
    opcoes: ["Sim", "Não"],
    proximo: [10, 92]
  },
  { // Índice 10
    pergunta: "Seu produto é determinado essencialmente por aspectos técnicos ou funcionais?",
    opcoes: ["Sim", "Não"],
    proximo: [11, 84]
  },
  { // Índice 11 - PATENTES
    pergunta: "A inovação é totalmente nova, um novo produto ou processo, ou uma melhoria em algo que já existe?",
    opcoes: ["Sim", "Não"],
    proximo: [12, 91]
  },
  { // Índice 12
    pergunta: "Você compartilhou sua invenção publicamente (em apresentações, redes sociais, publicações, etc.) nos últimos 6 meses?",
    opcoes: ["Sim", "Não"],
    proximo: [93, 13]
  },
  { // Índice 13
    pergunta: "A inovação é original e não seria óbvia para alguém que conhece o assunto?",
    opcoes: ["Sim", "Não"],
    proximo: [14, 91]
  },
  { // Índice 14
    pergunta: "A inovação pode ser utilizada ou produzida em diferentes indústrias?",
    opcoes: ["Sim", "Não"],
    proximo: [15, 91]
  },
  { // Índice 15
    pergunta: "Sua invenção se enquadra em alguma das categorias excluídas de patenteabilidade abaixo?",
    opcoes: [
      "Teorias Científicas",
      "Métodos Matemáticos",
      "Obras de Arte",
      "Planos, Regras e Métodos para Atividades Intelectuais, Jogos ou Negócios",
      "Programas de Computador por Si Só",
      "Não se enquadra em nenhuma destas categorias"
    ],
    proximo: [91, 91, 16, 91, 16, 82]
  },
  { // Índice 16 - DIREITO AUTORAL
    pergunta: "A criação é original e fruto da sua criatividade?",
    opcoes: ["Sim", "Não"],
    proximo: [17, 91]
  },
  { // Índice 17
    pergunta: "Qual categoria melhor descreve sua criação?",
    opcoes: [
      "Livro, música, filme",
      "Software ou programa de computador"
    ],
    proximo: [18, 22]
  },
  { // Índice 18
    pergunta: "É uma obra individual ou tem coautores?",
    opcoes: ["Individual", "Tem coautores"],
    proximo: [19, 94]
  },
  { // Índice 19
    pergunta: "A obra já foi publicada ou divulgada anteriormente?",
    opcoes: ["Sim", "Não"],
    proximo: [94, 20]
  },
  { // Índice 20
    pergunta: "Existem contribuições de terceiros na sua obra?",
    opcoes: ["Sim", "Não"],
    proximo: [94, 21]
  },
  { // Índice 21
    pergunta: "Você pretende vender ou licenciar sua obra?",
    opcoes: ["Sim", "Não"],
    proximo: [86, 94]
  },
  { // Índice 22 - PROGRAMA DE COMPUTADOR
    pergunta: "O software foi desenvolvido individualmente ou em colaboração?",
    opcoes: ["Individualmente", "Em colaboração"],
    proximo: [23, 95]
  },
  { // Índice 23
    pergunta: "O programa inclui funcionalidades ou processos inovadores que oferecem soluções técnicas?",
    opcoes: ["Sim", "Não"],
    proximo: [96, 24]
  },
  { // Índice 24
    pergunta: "Você utilizou bibliotecas, frameworks ou códigos de terceiros no desenvolvimento?",
    opcoes: ["Sim", "Não"],
    proximo: [95, 25]
  },
  { // Índice 25
    pergunta: "O software será licenciado ou vendido comercialmente?",
    opcoes: ["Sim", "Não"],
    proximo: [95, 87]
  },
  { // Índice 26 - MARCAS
    pergunta: "Sua ideia é original?",
    opcoes: ["Sim", "Não"],
    proximo: [27, 91]
  },
  { // Índice 27
    pergunta: "Sua marca inclui brasões, armas, medalhas, bandeiras, emblemas, distintivos, e monumentos oficiais públicos nacionais, estrangeiros ou internacionais, bem como suas designações, figuras ou imitações?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 28]
  },
  { // Índice 28
    pergunta: "Sua marca é composta exclusivamente por letras, algarismos, ou datas isoladamente, sem forma distintiva suficiente?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 29]
  },
  { // Índice 29
    pergunta: "Sua marca contém expressões, figuras, desenhos, ou quaisquer outros sinais contrários à moral e aos bons costumes, ou que ofendam a honra ou imagem de pessoas, ou atentem contra liberdade de consciência, crença, culto religioso, ou ideias e sentimentos dignos de respeito e veneração?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 30]
  },
  { // Índice 30
    pergunta: "Sua marca consiste na designação ou sigla de entidades ou órgãos públicos, sem que o registro tenha sido requerido pela própria entidade ou órgão público?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 31]
  },
  { // Índice 31
    pergunta: "Sua marca reproduz ou imita elementos característicos ou diferenciadores de título de estabelecimento ou nome de empresa de terceiros, suscetível de causar confusão ou associação com esses sinais distintivos?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 32]
  },
  { // Índice 32
    pergunta: "Sua marca é de caráter genérico, necessário, comum, vulgar, ou simplesmente descritivo em relação ao produto ou serviço a distinguir, ou é empregada comumente para designar uma característica do produto ou serviço, sem forma distintiva suficiente?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 33]
  },
  { // Índice 33
    pergunta: "Sua marca é utilizada apenas como meio de propaganda?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 34]
  },
  { // Índice 34
    pergunta: "Sua marca consiste em cores e suas denominações, sem que estejam dispostas ou combinadas de modo peculiar e distintivo?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 35]
  },
  { // Índice 35
    pergunta: "Sua marca inclui indicação geográfica, sua imitação suscetível de causar confusão, ou sinal que possa falsamente induzir indicação geográfica?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 36]
  },
  { // Índice 36
    pergunta: "Sua marca induz a falsa indicação quanto à origem, procedência, natureza, qualidade, ou utilidade do produto ou serviço a que se destina?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 37]
  },
  { // Índice 37
    pergunta: "Sua marca reproduz ou imita cunho oficial regularmente adotado para garantia de padrão de qualquer gênero ou natureza?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 38]
  },
  { // Índice 38
    pergunta: "Sua marca reproduz ou imita sinal que tenha sido registrado como marca coletiva ou de certificação por terceiro?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 39]
  },
  { // Índice 39
    pergunta: "Sua marca reproduz nome, prêmio, ou símbolo de evento esportivo, artístico, cultural, social, político, econômico, ou técnico oficial ou oficialmente reconhecido, ou sua imitação suscetível de criar confusão, sem autorização pela autoridade competente ou entidade promotora do evento?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 40]
  },
  { // Índice 40
    pergunta: "Sua marca reproduz ou imita título, apólice, moeda e cédula da União, dos Estados, do Distrito Federal, dos Territórios, dos Municípios, ou de país?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 41]
  },
  { // Índice 41
    pergunta: "Sua marca inclui nome civil ou sua assinatura, nome de família ou patronímico, e imagem de terceiros, sem consentimento do titular, herdeiros ou sucessores?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 42]
  },
  { // Índice 42
    pergunta: "Sua marca inclui pseudônimo ou apelido notoriamente conhecidos, nome artístico singular ou coletivo, sem consentimento do titular, herdeiros ou sucessores?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 43]
  },
  { // Índice 43
    pergunta: "Sua marca reproduz obra literária, artística ou científica, assim como títulos protegidos pelo direito autoral, suscetíveis de causar confusão ou associação, sem consentimento do autor ou titular?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 44]
  },
  { // Índice 44
    pergunta: "Sua marca inclui termo técnico usado na indústria, na ciência e na arte, que tenha relação com o produto ou serviço a distinguir?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 45]
  },
  { // Índice 45
    pergunta: "Sua marca reproduz ou imita, no todo ou em parte, marca alheia registrada para distinguir ou certificar produto ou serviço idêntico, semelhante ou afim, suscetível de causar confusão ou associação com marca alheia?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 46]
  },
  { // Índice 46
    pergunta: "Sua marca consiste na forma necessária, comum ou vulgar do produto ou de seu acondicionamento, ou ainda aquela que não possa ser dissociada de efeito técnico?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 47]
  },
  { // Índice 47
    pergunta: "Sua marca consiste em objeto que está protegido por registro de desenho industrial de terceiro?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 48]
  },
  { // Índice 48
    pergunta: "Sua marca imita ou reproduz, no todo ou em parte, uma marca que o requerente evidentemente não poderia desconhecer em razão de sua atividade, cujo titular seja sediado ou domiciliado em território nacional ou em país com o qual o Brasil mantenha acordo ou que assegure reciprocidade de tratamento, se a marca se destinar a distinguir produto ou serviço idêntico, semelhante ou afim, suscetível de causar confusão ou associação com aquela marca alheia?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 83]
  },
  { // Índice 49 - INDICAÇÃO GEOGRÁFICA
    pergunta: "O seu produto tem uma origem geográfica que o identifica?",
    opcoes: ["Sim", "Não"],
    proximo: [50, 91]
  },
  { // Índice 50
    pergunta: "O seu produto tem características intrínsecas da área/região onde é produzido?",
    opcoes: ["Sim", "Não"],
    proximo: [51, 91]
  },
  { // Índice 51
    pergunta: "A região onde seu produto é fabricado/extraído/produzido é conhecida localmente por esses processos?",
    opcoes: ["Sim", "Não"],
    proximo: [52, 91]
  },
  { // Índice 52
    pergunta: "O seu produto identifica uma região geográfica?",
    opcoes: ["Sim", "Não"],
    proximo: [53, 91]
  },
  { // Índice 53
    pergunta: "O seu produto tem relação direta com o solo, clima, tradições locais?",
    opcoes: ["Sim", "Não"],
    proximo: [54, 91]
  },
  { // Índice 54
    pergunta: "A preparação ou extração do seu produto segue regulamentações para manter autenticidade e a qualidade para garantir a sua origem?",
    opcoes: ["Sim", "Não"],
    proximo: [55, 91]
  },
  { // Índice 55
    pergunta: "A região de preparação ou extração do produto é reconhecida por ser associada ao produto?",
    opcoes: ["Sim", "Não"],
    proximo: [56, 91]
  },
  { // Índice 56
    pergunta: "A reputação da região é associada ao produto?",
    opcoes: ["Sim", "Não"],
    proximo: [57, 91]
  },
  { // Índice 57
    pergunta: "Esse produto está associado a uma história ou tradição local nesta região?",
    opcoes: ["Sim", "Não"],
    proximo: [58, 91]
  },
  { // Índice 58
    pergunta: "O produto atende alguma norma de produção com especificações técnicas para garantir a sua autenticidade?",
    opcoes: ["Sim", "Não"],
    proximo: [59, 91]
  },
  { // Índice 59
    pergunta: "O consumidor associa o produto a determinada região?",
    opcoes: ["Sim", "Não"],
    proximo: [60, 91]
  },
  { // Índice 60
    pergunta: "A reputação do produto é vinculada à sua origem geográfica?",
    opcoes: ["Sim", "Não"],
    proximo: [61, 91]
  },
  { // Índice 61
    pergunta: "Existem características únicas associadas a essa região que influenciem a produção desse produto?",
    opcoes: ["Sim", "Não"],
    proximo: [62, 91]
  },
  { // Índice 62
    pergunta: "O nome da região é utilizado como parte do nome do produto?",
    opcoes: ["Sim", "Não"],
    proximo: [63, 91]
  },
  { // Índice 63
    pergunta: "Existe um reconhecimento público e comercial que conecta o produto à região?",
    opcoes: ["Sim", "Não"],
    proximo: [64, 91]
  },
  { // Índice 64
    pergunta: "O produtor já está associado à alguma instituição coletiva responsável por garantir a autenticidade da origem geográfica do produto?",
    opcoes: ["Sim", "Não"],
    proximo: [88, 97]
  },
  { // Índice 65 - CULTIVARES
    pergunta: "A Cultivar é produto de melhoramento genético (essencialmente derivada de qualquer gênero ou espécie vegetal)?",
    opcoes: ["Sim", "Não"],
    proximo: [66, 91]
  },
  { // Índice 66
    pergunta: "É de uma espécie passível de proteção no Brasil?",
    opcoes: ["Sim", "Não"],
    proximo: [67, 91]
  },
  { // Índice 67
    pergunta: "Foi comercializada no Brasil há mais de doze meses?",
    opcoes: ["Sim", "Não"],
    proximo: [91, 68]
  },
  { // Índice 68
    pergunta: "Foi comercializada no exterior há mais de 4 anos? (para cultivares que não são videiras ou árvores)",
    opcoes: ["Sim", "Não"],
    proximo: [91, 69]
  },
  { // Índice 69
    pergunta: "Trata-se de videiras ou árvores?",
    opcoes: ["Sim", "Não"],
    proximo: [70, 85] // Caso Sim, levar à próxima pergunta específica para videiras ou árvores.
  },
  { // Índice 70
    pergunta: "Foi comercializada no exterior há mais de 6 anos? (aplicável apenas para videiras ou árvores)",
    opcoes: ["Sim", "Não"],
    proximo: [91, 71]
  },
  { // Índice 71
    pergunta: "A cultivar é distinta, homogênea e estável?",
    opcoes: ["Sim", "Não"],
    proximo: [85, 91]
  },
  { // Índice 72 - TOPOGRAFIA DE CIRCUITOS INTEGRADOS
    pergunta: "A criação trata-se de imagens relacionadas sob qualquer forma que represente a configuração tridimensional em todo ou em parte das camadas que compõem um circuito integrado?",
    opcoes: ["Sim", "Não"],
    proximo: [73, 91]
  },
  { // Índice 73
    pergunta: "A criação trata-se de imagens construídas sob qualquer forma que represente a configuração tridimensional em todo ou em parte das camadas que compõem um circuito integrado?",
    opcoes: ["Sim", "Não"],
    proximo: [74, 91]
  },
  { // Índice 74
    pergunta: "A criação trata-se de imagens codificadas sob qualquer forma que represente a configuração tridimensional em todo ou em parte das camadas que compõem um circuito integrado?",
    opcoes: ["Sim", "Não"],
    proximo: [75, 91]
  },
  { // Índice 75
    pergunta: "A imagem representa no todo ou em parte a disposição geométrica da superfície do circuito integrado em qualquer estágio de sua concepção ou manufatura?",
    opcoes: ["Sim", "Não"],
    proximo: [76, 91]
  },
  { // Índice 76
    pergunta: "A topografia é original, possuindo combinações de elementos e interconexões que não sejam comuns ou vulgares para técnicos especialistas ou fabricantes, ou seja, resultam do esforço intelectual do seu criador ou criadores?",
    opcoes: ["Sim", "Não"],
    proximo: [77, 91]
  },
  { // Índice 77
    pergunta: "A topografia é única, não havendo outras imagens que se assemelham?",
    opcoes: ["Sim", "Não"],
    proximo: [78, 91]
  },
  { // Índice 78
    pergunta: "A topografia pode ser reproduzida em escala industrial?",
    opcoes: ["Sim", "Não"],
    proximo: [79, 91]
  },
  { // Índice 79
    pergunta: "Há interesse na exportação, venda ou distribuição para fins comerciais da topografia por parte do criador ou de um dos criadores?",
    opcoes: ["Sim", "Não"],
    proximo: [80, 91]
  },
  { // Índice 80
    pergunta: "A topografia já foi apresentada em eventos ou publicações científicas?",
    opcoes: ["Sim", "Não"],
    proximo: [81, 91]
  },
  { // Índice 81
    pergunta: "Há interesse na incorporação da topografia a outro circuito integrado já protegido?",
    opcoes: ["Sim", "Não"],
    proximo: [89, 91]
  },
  { resultado: // Índice 82 PATENTES
    `
  <div>
      <strong>Relatório de Avaliação para Registro de Patentes (TCI)</strong><br>
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
},
  { resultado: // Índice 83 MARCA
    `
  <div> <strong>Relatório de Avaliação para Registro de Marca</strong><br> <p><strong>Resumo da Avaliação:</strong> Após a análise das informações fornecidas e considerando as diretrizes de elegibilidade para registro de marcas, determinamos que sua marca possui potencial para ser registrada e protegida. Este relatório detalha as etapas recomendadas para o registro de sua marca e assegura sua proteção efetiva.</p> <p><strong>Critérios Atendidos:</strong><br> - Sua marca é distintiva e capaz de identificar os produtos ou serviços de sua empresa de maneira única.<br> - Sua marca não se enquadra em nenhuma das categorias de sinais não registráveis, conforme descrito no documento fornecido. </p> <p><strong>Etapas Recomendadas para Registro:</strong><br> 1. Pesquisa de Anterioridade: Realize uma pesquisa detalhada no banco de dados do INPI para verificar se a marca ou uma similar já está registrada para produtos ou serviços idênticos ou similares.<br> 2. Preparação do Pedido: Prepare e organize todos os documentos necessários, incluindo o logotipo da marca (se aplicável) e a especificação dos produtos ou serviços que serão cobertos pela marca.<br> 3. Submissão ao INPI: Submeta seu pedido de registro ao INPI, juntamente com o pagamento das taxas requeridas.<br> 4. Acompanhamento do Processo: Monitore o andamento do seu pedido através do sistema do INPI e esteja preparado para responder a possíveis exigências ou oposições.<br> 5. Uso da Marca: Após o registro, utilize o símbolo ® ao lado de sua marca para indicar que ela está registrada e protegida. </p> <p><strong>Observações Importantes:</strong><br> - A proteção de uma marca é territorial, significando que ela estará protegida apenas no território nacional, a menos que você solicite proteção internacional.<br> - O registro de marca tem validade de 10 anos, renovável por períodos sucessivos de 10 anos. </p> <p><strong>Próximos Passos:</strong> Com base neste relatório, recomendamos prosseguir com a pesquisa de anterioridade e preparar a documentação necessária para o pedido de registro de sua marca. A proteção de sua marca é fundamental para garantir a exclusividade de uso e a identidade de seus produtos ou serviços no mercado.</p> </div>
  `
},
  { resultado: // Índice 84 DI
    `
  <div> <strong>Relatório de Avaliação para Registro de Desenho Industrial</strong><br> <p><strong>Resumo da Avaliação:</strong> A avaliação das informações fornecidas indica que seu desenho é elegível para proteção como Desenho Industrial. Este relatório delineia os passos recomendados para o registro e proteção efetiva de seu desenho sob as leis de propriedade industrial.</p> <p><strong>Critérios Atendidos:</strong><br> - Originalidade: Seu desenho apresenta uma configuração visual nova e original.<br> - Não Funcionalidade: A estética do desenho não é ditada por aspectos técnicos ou funcionais.<br> - Aplicabilidade Industrial: O desenho pode ser reproduzido em escala industrial. </p> <p><strong>Etapas Recomendadas para Registro:</strong><br> 1. Pesquisa de Anterioridade: Realize uma pesquisa na base de dados de Desenhos Industriais do INPI para verificar se existe algum desenho similar já registrado.<br> 2. Preparação do Pedido: Prepare o requerimento incluindo desenhos ou fotografias claras do desenho, um relatório descritivo (se aplicável), reivindicações (se aplicável), e indique o campo de aplicação do objeto.<br> 3. Submissão ao INPI: Submeta seu pedido de registro ao INPI, acompanhado do comprovante do pagamento das taxas necessárias.<br> 4. Acompanhamento: Após a submissão, acompanhe o processo de análise pelo INPI. Esteja preparado para responder a possíveis exigências. </p> <p><strong>Observações Importantes:</strong><br> - A proteção conferida ao desenho industrial é de até 25 anos, garantindo exclusividade de uso no território brasileiro.<br> - É altamente recomendável a assistência de um profissional especializado para o acompanhamento do processo. </p> <p><strong>Próximos Passos:</strong> Com base neste relatório, recomendamos iniciar a preparação do pedido de registro, considerando a realização da pesquisa de anterioridade e a compilação dos documentos necessários para a submissão. A proteção de seu desenho industrial é um passo importante para garantir a exclusividade e agregar valor ao seu produto.</p> </div>  
  `
},
  { resultado: // Índice 85  CULTIVAR
    `
  <div> <strong>Relatório de Avaliação para Registro de Cultivar</strong><br> <p><strong>Resumo da Avaliação:</strong> Sua nova variedade de planta foi avaliada com base nas informações fornecidas e nos critérios de elegibilidade para proteção como cultivar. Concluímos que sua cultivar é elegível para proteção. Este relatório detalha os passos recomendados para registrar e proteger sua cultivar sob as leis de proteção de cultivares.</p> <p><strong>Critérios Atendidos:</strong><br> - Novidade: A cultivar não foi comercializada no Brasil por mais de 12 meses ou no exterior por mais de 4 anos (6 anos para videiras e árvores).<br> - Distinção: A cultivar é claramente distinta de outras variedades conhecidas.<br> - Homogeneidade: A cultivar é suficientemente uniforme em suas características relevantes.<br> - Estabilidade: A cultivar mantém suas características relevantes inalteradas após sucessivas propagações. </p> <p><strong>Etapas Recomendadas para Registro:</strong><br> 1. Testes de DHE: Confirme que a cultivar atende aos requisitos de distinguibilidade, homogeneidade e estabilidade através de testes específicos.<br> 2. Documentação Necessária: Prepare e submeta os seguintes documentos ao Serviço Nacional de Proteção de Cultivares (SNPC): Formulário de Solicitação de Proteção de Cultivar, Formulário de Solicitação de Denominação, Relatório Técnico Descrevendo a Cultivar, Formulário dos Descritores para a Cultivar, Declaração de Amostra Viva, Declaração Juramentada, Procuração para o Representante Legal, Comprovante de pagamento da taxa de solicitação.<br> 3. Protocolo no SNPC: Protocolize a solicitação de proteção junto ao SNPC. A documentação pode ser entregue em mãos pelo Representante Legal ou por portador. </p> <p><strong>Observações Importantes:</strong><br> - A proteção de cultivares no Brasil é regida pela Lei nº 9.456/1997, assegurando exclusividade na produção, venda e comercialização da cultivar no país.<br> - O prazo de validade do Certificado de Registro é de 18 anos para videiras, árvores frutíferas, florestais e ornamentais, e 15 anos para as demais. </p> <p><strong>Próximos Passos:</strong> Com base neste relatório, recomendamos prosseguir com a realização dos Testes de DHE e a preparação da documentação necessária para o registro de sua cultivar. O registro é um passo crucial para garantir seus direitos exclusivos sobre a nova variedade e contribuir para a inovação no setor agrícola.</p> </div>
`
},
  { resultado: // Índice 86 DIREITOS AUTORAIS
    `
  <div> <strong>Relatório de Avaliação de Direito Autoral</strong><br> <p><strong>Resumo da Avaliação:</strong> Sua obra foi avaliada com base nas informações fornecidas e nos critérios de elegibilidade para proteção sob o direito autoral. Concluímos que sua obra é elegível para proteção. Este relatório detalha os passos recomendados para garantir a proteção de sua obra sob o direito autoral.</p> <p><strong>Critérios Atendidos:</strong><br> - Originalidade e Criatividade: Sua obra é original e resulta de um esforço criativo.<br> - Tipo de Obra: Classifica-se como livro, música, filme, software, ou outra categoria protegida.<br> - Autoria: É uma obra individual ou, em caso de coautoria, todos os autores estão identificados e concordam com a proteção. </p> <p><strong>Etapas Recomendadas para Proteção:</strong><br> 1. Documentação da Obra: Mantenha registros detalhados da criação da obra, incluindo datas e materiais de desenvolvimento.<br> 2. Publicação e Divulgação: Se a obra foi publicada ou divulgada, compile documentação relevante que comprove a autoria e a data de primeira publicação.<br> 3. Uso de Material de Terceiros: Se a obra incorpora material protegido por direitos autorais de outros, assegure que possui permissão para uso ou que o uso se qualifica como justo.<br> 4. Proteção e Monetização: Se pretende vender ou licenciar os direitos da obra, considere a formalização de contratos que especifiquem os termos de uso, distribuição e remuneração.<br> 5. Registro de Direito Autoral: Embora o direito autoral exista automaticamente desde a criação da obra, o registro formal pode fornecer uma evidência legal de autoria e data de criação. Informe-se sobre o processo de registro no seu país. </p> <p><strong>Observações Importantes:</strong><br> - O direito autoral não protege ideias, procedimentos, métodos de operação ou conceitos matemáticos.<br> - A proteção sob o direito autoral é automática, mas o registro pode facilitar a defesa dos direitos em caso de disputas. </p> <p><strong>Próximos Passos:</strong> Baseado neste relatório, recomendamos iniciar a compilação da documentação necessária e considerar o registro formal de sua obra para reforçar a proteção de seus direitos autorais.</p> </div>
`
},
{ resultado: // Índice 87 PC
`
<div> <strong>Relatório de Avaliação para Proteção de Programa de Computador</strong><br> <p><strong>Resumo da Avaliação:</strong> Baseado nas informações fornecidas, seu programa de computador parece elegível para proteção sob as leis de direitos autorais específicas para software no seu país. Este relatório recomenda etapas para assegurar a proteção efetiva do seu programa.</p> <p><strong>Critérios Atendidos:</strong><br> - Originalidade: O programa é resultado de seu próprio esforço criativo.<br> - Expressão em forma tangível: O programa está documentado ou codificado de maneira acessível.<br> - Funcionalidade: O programa realiza funções ou tarefas específicas. </p> <p><strong>Etapas Recomendadas para Registro:</strong><br> 1. Documentação: Prepare uma descrição detalhada do programa, incluindo código-fonte ou trechos representativos.<br> 2. Registro: Submeta a documentação necessária ao órgão responsável pelo registro de direitos autorais de software no seu país.<br> 3. Proteção: Após o registro, utilize as medidas legais disponíveis para proteger seu programa contra uso não autorizado. </p> <p><strong>Observações Importantes:</strong><br> - A proteção de software normalmente é assegurada por direitos autorais, mas aspectos específicos podem ser protegidos por patentes.<br> - O registro não é obrigatório em muitos países, mas pode facilitar a defesa de seus direitos. </p> <p><strong>Próximos Passos:</strong> Com base neste relatório, é recomendado proceder com a documentação e o registro do seu programa de computador para garantir sua proteção e explorar plenamente seus direitos de propriedade intelectual.</p> </div>
`
},
  { resultado: // Índice 88 IG
`
<div> <strong>Relatório de Avaliação para Registro de Indicação Geográfica</strong><br> <p><strong>Resumo da Avaliação:</strong> A análise das informações fornecidas sugere que seu produto é elegível para proteção como Indicação Geográfica (IG). Este relatório detalha as etapas recomendadas para obter o reconhecimento de sua Indicação Geográfica, assegurando a proteção e valorização do seu produto no mercado.</p> <p><strong>Critérios Atendidos:</strong><br> - Origem Geográfica Identificável: Seu produto é claramente identificado com uma região geográfica específica.<br> - Qualidades, Reputação ou Outras Características: Estas são atribuíveis à sua origem geográfica.<br> - Conhecimento e Tradição Local: A produção do seu produto está intrinsecamente ligada às tradições e ao conhecimento local. </p> <p><strong>Etapas Recomendadas para Registro:</strong><br> 1. Documentação da Ligação com a Região: Compile evidências que demonstrem como a região de origem influencia as características únicas do produto.<br> 2. Formação de Associação Local: Idealmente, forme ou associe-se a uma entidade local que represente os produtores da região, para apoiar a aplicação coletiva.<br> 3. Definição de Normas de Produção: Estabeleça normas claras de produção, extração ou preparação que garantam a manutenção da qualidade e autenticidade associadas à região.<br> 4. Pedido de Registro: Submeta o pedido de registro ao INPI ou órgão competente, incluindo toda a documentação necessária que comprove a ligação do produto com a região e justifique a denominação de origem ou indicação de procedência. </p> <p><strong>Observações Importantes:</strong><br> - Monitoramento e Defesa da IG: É vital monitorar o mercado para evitar o uso indevido da IG e tomar as medidas legais necessárias para proteger a denominação.<br> - Valorização do Produto: A IG pode agregar valor significativo ao seu produto, fortalecendo sua posição no mercado e permitindo a diferenciação baseada em qualidade e tradição. </p> <p><strong>Próximos Passos:</strong> Baseando-se neste relatório, recomendamos proceder com a organização da documentação necessária e iniciar os preparativos para o pedido de registro de Indicação Geográfica. Este é um passo crucial para valorizar e proteger o legado e a identidade da sua região.</p> </div>
`
},
  { resultado: // Índice 89 TCI
    `
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
},
{ resultado: // Índice 90 DI E PATENTES
`
<div> <strong>Relatório de Avaliação para Produto Enquadrado em Desenho Industrial e Patentes</strong><br> <p><strong>Resumo da Avaliação:</strong> Seu produto demonstra características que o tornam elegível tanto para proteção por patente quanto como desenho industrial. Esta situação única oferece uma oportunidade para maximizar a proteção da propriedade intelectual associada ao seu produto.</p> <p><strong>Critérios Atendidos para Patente:</strong> Inovação técnica, novidade global, aplicação industrial.</p> <p><strong>Critérios Atendidos para Desenho Industrial:</strong> Originalidade estética, aplicabilidade industrial sem afetar funcionalidade técnica.</p> <p><strong>Etapas Recomendadas:</strong><br> 1. Avaliação Detalhada: Determine a importância da funcionalidade técnica versus a estética na estratégia de mercado do produto.<br> 2. Registro Duplo: Considere registrar tanto a patente para a inovação técnica quanto o desenho industrial para a estética, se ambos forem estratégicos.<br> 3. Proteção Efetiva: Use as proteções concedidas para defender contra infratores e fortalecer sua posição no mercado. </p> <p><strong>Observações Importantes:</strong> A proteção dupla pode oferecer vantagens competitivas significativas, mas requer uma gestão cuidadosa dos direitos de propriedade intelectual.</p> <p><strong>Próximos Passos:</strong> Recomenda-se consultar um especialista em propriedade intelectual para avaliar a melhor estratégia de proteção e registro para seu produto.</p> </div>
`
},
  { resultado: // Índice 91
    "Não é elegível para registro de Propriedade Intelectual. Considere outras formas de proteção ou consulte um especialista para avaliação detalhada." },
  { resultado: // Índice 92
    "É passível de proteção mas talvez não seja o caso proteger. Avalie a viabilidade econômica e a importância estratégica do design para sua empresa antes de decidir pelo registro." },
  { resultado: // Índice 93
    "Sua invenção é passível de proteção, mas talvez não seja o caso proteger. A divulgação prévia pode impactar a novidade da sua invenção e, consequentemente, a sua elegibilidade para proteção por patente. Avalie cuidadosamente se a divulgação se enquadra nas exceções permitidas ou se ainda vale a pena buscar proteção." },
  { resultado: // Índice 94 direitos autorais alternativos
    `
    <div>
    <h3>Resultado da Avaliação de Direitos Autorais</h3>
    <p>Com base nas respostas fornecidas, sua obra parece ser elegível para proteção sob direitos autorais. Por favor, considere os seguintes pontos para garantir a proteção adequada:</p>
    <ul>
        <li><strong>Coautoria:</strong> Se a obra foi criada em coautoria, é necessário obter o consentimento de todos os coautores. Uma obra criada em colaboração pode ser protegida, desde que haja um acordo entre todas as partes envolvidas.</li>
        <li><strong>Provas de Autoria:</strong> É importante ter documentação que comprove sua autoria e a data de publicação da obra. Isso pode incluir registros de criação, publicações, ou qualquer outro meio que estabeleça claramente a autoria e a cronologia.</li>
        <li><strong>Permissão de Terceiros:</strong> Caso a obra incorpore contribuições de terceiros ou material sob direito autoral de outras pessoas, assegure-se de ter permissão para utilizá-los. Isso é fundamental para evitar violações de direito autoral.</li>
        <li><strong>Uso Pessoal e Disponibilização Gratuita:</strong> Se você não pretende comercializar a obra, ela ainda é protegida por direitos autorais, o que permite seu uso pessoal ou a disponibilização gratuita para o público. Contudo, qualquer forma de comercialização futura requer que todos os critérios de proteção estejam devidamente atendidos.</li>
    </ul>
    <p>Respeitar esses princípios é crucial para assegurar a proteção efetiva de sua obra sob as leis de direitos autorais.</p>
</div>
`
},
{ resultado: // Índice 95 programa de computador alternativos
    `
    <div>
    <h3>Resultado da Avaliação para Proteção de Programas de Computador</h3>
    <p>Após a análise das informações fornecidas, seu programa de computador é elegível para proteção sob as leis de direitos autorais. Contudo, para garantir uma proteção eficaz e explorar comercialmente sua obra, considere os seguintes pontos:</p>
    <ul>
        <li><strong>Termos de Licenciamento ou Venda:</strong> É crucial definir claramente os termos de licenciamento ou as condições de venda de seu software. Isso inclui restrições de uso, direitos concedidos aos usuários, e qualquer outra condição relevante para a comercialização da obra.</li>
        <li><strong>Uso de Componentes de Terceiros:</strong> Se o seu programa inclui bibliotecas, frameworks, ou qualquer outro componente de software de terceiros, a proteção e a comercialização dependem das licenças associadas a esses componentes. Certifique-se de que as licenças dos componentes permitem o uso conforme planejado, especialmente em contextos comerciais.</li>
        <li><strong>Colaboração na Criação:</strong> Caso o software tenha sido desenvolvido em colaboração, é necessário obter o consentimento de todos os coautores para a proteção e exploração da obra. A proteção conjunta requer que todos os envolvidos estejam de acordo com os termos de uso e comercialização.</li>
    </ul>
    <p>Atender a esses critérios é essencial não apenas para assegurar a proteção legal do seu programa de computador, mas também para facilitar sua exploração comercial de forma efetiva e em conformidade com as leis de propriedade intelectual.</p>
</div>

`
},
{ resultado: // Índice 96 direitos autorais e patente
    `
    <div>
    <strong>Relatório de Avaliação para Proteção Dupla: Direitos Autorais e Patentes</strong><br>
    <p><strong>Resumo da Avaliação:</strong> Após análise detalhada, identificamos que seu produto possui características que o tornam elegível tanto para proteção por direitos autorais quanto por patente. Este relatório fornece orientações sobre como proceder para garantir ambas as proteções efetivamente.</p>
    <p><strong>Critérios Atendidos:</strong><br>
        - <strong>Direitos Autorais:</strong> O produto possui aspectos originais de criação artística ou literária expressos de forma tangível.<br>
        - <strong>Patentes:</strong> O produto incorpora uma inovação técnica ou funcional que resolve um problema específico de maneira nova e não óbvia.
    </p>
    <p><strong>Etapas Recomendadas para Registro:</strong><br>
        1. <strong>Para Direitos Autorais:</strong> Documente a criação e, se preferir segurança adicional, registre-a no órgão nacional de direitos autorais.<br>
        2. <strong>Para Patentes:</strong> Prepare uma descrição detalhada da inovação técnica, incluindo desenhos se aplicável, e submeta um pedido de patente ao INPI ou órgão equivalente.<br>
    </p>
    <p><strong>Observações Importantes:</strong><br>
        - A proteção por direitos autorais é automática, mas o registro pode facilitar a defesa em caso de disputas.<br>
        - A patente exige um processo de análise mais rigoroso e a concessão não é automática.
    </p>
    <p><strong>Próximos Passos:</strong> Recomendamos iniciar imediatamente a preparação da documentação necessária para ambos os processos de registro, considerando a importância de proteger integralmente seu produto sob as leis de propriedade intelectual.</p>
</div>

`
},
{ resultado: // Índice 97 IG alternativo
    `
    <div>
    <h3>Resultado da Avaliação para Proteção da Indicação Geográfica</h3>
    <p>Após análise, constatou-se que o produtor não está atualmente associado a nenhuma instituição coletiva responsável por garantir a autenticidade da origem geográfica do produto.</p>
    <p>Portanto, é necessário que o produtor ou fabricante se associe a uma instituição coletiva que represente a Indicação Geográfica perante o órgão de proteção competente. Esta associação é crucial para assegurar a autenticidade e a reputação do produto, bem como para proteger seus direitos sobre a origem geográfica.</p>
    <p>A proteção da Indicação Geográfica é essencial para preservar as características únicas do produto relacionadas à sua região de origem e evitar a falsificação e o uso indevido por terceiros.</p>
    <p>Portanto, recomenda-se que o produtor ou fabricante tome as medidas necessárias para se associar à instituição coletiva adequada e registrar a Indicação Geográfica junto ao órgão de proteção competente, garantindo assim a proteção e a valorização do produto.</p>
</div>


`
},
{ resultado: // Índice 98 TCI alternativo
    `
    <div>
    <h3>Resultado da Avaliação para Proteção de Topografia de Circuitos Integrados</h3>
    <p>Com base nas informações fornecidas:</p>
    <ul>
        <li><strong>Topografia apresentada em eventos ou publicações científicas:</strong> Sim</li>
        <li><strong>Interesse na incorporação da topografia a outro circuito integrado já protegido:</strong> Não</li>
    </ul>
    <p>Considerando que a topografia já foi apresentada em eventos ou publicações científicas, e não há interesse na incorporação desta topografia a outro circuito integrado já protegido, a proteção da topografia pode não ser viável no momento.</p>
    <p>Embora a topografia possa ser protegida legalmente, o fato de já ter sido divulgada publicamente pode dificultar a obtenção de uma proteção eficaz. Além disso, o fato de não haver interesse na incorporação desta topografia a outro circuito integrado já protegido indica uma possível falta de valor comercial significativo para a proteção.</p>
    <p>Recomenda-se avaliar cuidadosamente a viabilidade e os benefícios da proteção da topografia neste contexto específico, considerando aspectos como a originalidade da topografia, sua importância comercial e a possibilidade de aplicação de medidas alternativas de proteção de propriedade intelectual.</p>
</div>



`
},
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
