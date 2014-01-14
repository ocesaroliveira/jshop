<?php
	require_once('core/bootstrap.php');
	require_once('core/database.php');
	$db = conect();
	$dados = array('status' => false);
	if (is_object($db)) {
		$usuario = json_decode(file_get_contents("php://input"), true);
		$res = find($db, 'usuario', array('conditions' => $usuario));
		if (!empty($res)) {
			$dados['status'] = true;
			$dados['idusuario'] = $res[0]['id'];
		}
	}

	echo json_encode($dados);
?>