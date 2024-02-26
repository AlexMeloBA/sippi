<?php
session_start();

// Array multidimensional com as perguntas e seus respectivos caminhos
$questions = [
    [
        'question' => 'Qual é a capital do Brasil?',
        'options' => [
            'A) Rio de Janeiro' => 'resultado_rio.php',
            'B) São Paulo' => 'resultado_sao_paulo.php',
            'C) Brasília' => 'resultado_brasilia.php',
            'D) Belo Horizonte' => 'resultado_belo_horizonte.php'
        ]
    ],
    // Adicione mais perguntas conforme necessário
];

// Verifica se o usuário enviou uma resposta
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $answer = isset($_POST['answer']) ? $_POST['answer'] : '';
    $currentQuestion = isset($_POST['current_question']) ? $_POST['current_question'] : 0;

    // Redireciona para o resultado com base na resposta selecionada
    if (isset($questions[$currentQuestion]['options'][$answer])) {
        $nextPage = $questions[$currentQuestion]['options'][$answer];
        header("Location: $nextPage");
        exit();
    } else {
        echo "Opção inválida!";
        exit();
    }
}

// Obtém o número da pergunta atual
$currentQuestion = isset($_GET['question']) ? $_GET['question'] : 0;
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>Quiz</h1>
        <form method="post">
            <input type="hidden" name="current_question" value="<?php echo $currentQuestion; ?>">
            <h2><?php echo $questions[$currentQuestion]['question']; ?></h2>
            <?php foreach ($questions[$currentQuestion]['options'] as $option => $nextPage): ?>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="answer" value="<?php echo $option; ?>">
                    <label class="form-check-label"><?php echo $option; ?></label>
                </div>
            <?php endforeach; ?>
            <button type="submit" class="btn btn-primary">Enviar resposta</button>
        </form>
    </div>
</body>
</html>
