<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Simula a validação dos dados (você deve implementar a validação real)
$input = json_decode(file_get_contents("php://input"), true);

$nome = $input['nome'] ?? '';
$email = $input['email'] ?? '';
$senha = $input['senha'] ?? '';

// Aqui você poderia fazer a validação dos dados, verificar se o usuário já existe, etc.

// Simulando uma resposta de sucesso
$response = [
    'success' => true,
    'message' => 'Usuário registrado com sucesso!',
    'data' => [
        'nome' => $nome,
        'email' => $email
    ]
];

// Retornando a resposta como JSON
echo json_encode($response);
