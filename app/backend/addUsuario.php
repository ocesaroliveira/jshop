<?php
	require_once('core/bootstrap.php');
	require_once('core/database.php');
	$db = conect();
	if (is_object($db)) {
		$usuario = json_decode(file_get_contents("php://input"), true);
		$userOk = insert($db, 'usuario', $usuario);
		if ($userOk) {
			$status = array(
				'status' => true,
				'idusuario' => $userOk
			);
		} else {
			$status = array('status' => false);
		}
	} else {
		die("<h1> Não foi possível conectar-se com o banco de dados</h1><h2>#{$db['code']}: {$db['message']}</h2>");
	}
	echo json_encode($status);
?>