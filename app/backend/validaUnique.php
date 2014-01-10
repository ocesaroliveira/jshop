<?php
	require_once('core/bootstrap.php');
	require_once('core/database.php');
	define('TABLE', 0);
	define('FIELD', 1);
	$db = conect();
	$dados = array('status' => false);
	if (is_object($db)) {
		if (!empty($_GET['v']) && !empty($_GET['f'])) {
			$value = $_GET['v'];
			$field = explode('.', $_GET['f']);
			if (count($field) == 2) {
				$table = $field[TABLE];
				$field = $field[FIELD];
				$res = find($db, $table, array('conditions' => array($field => $value)));
				$dados['status'] = count($res) == 0;
			}
		}
	}

	echo json_encode($dados);
?>