<?php
	require_once('core/bootstrap.php');
	require_once('core/database.php');
	$status = array('status' => false);
	$db = conect();
	if (is_object($db)) {
		$usuario = json_decode(file_get_contents("php://input"), true);
		$userOk = insert($db, 'usuario', $usuario);
		if ($userOk) {
			$status = array(
				'status' => true,
				'idusuario' => $userOk
			);
		}
	}
	echo json_encode($status);
?>