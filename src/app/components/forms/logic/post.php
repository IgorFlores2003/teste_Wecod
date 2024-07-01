<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $rua = $_POST['rua'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];
    $cep = $_POST['cep'];
    $estado = $_POST['estado'];

    $file = 'dados_salvos.json';
    $dadosAnteriores = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $dadosAnteriores[] = $_POST;

    file_put_contents($file, json_encode($dadosAnteriores));

    echo '<p>Dados salvos com sucesso!</p>';
} else {
    http_response_code(405);
    echo '<p>Método não permitido</p>';
}
?>
