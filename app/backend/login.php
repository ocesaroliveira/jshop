<?php
	require_once('core/bootstrap.php');
	require_once('core/database.php');
	$db = conect();
	$dados = array('status' => false);
	if (is_object($db)) {
		$usuario = json_decode(file_get_contents("php://input"), true);
		pr($usuario);
	}

	echo json_encode($dados);
?>