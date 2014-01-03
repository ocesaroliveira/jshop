<?php
	require_once('bootstrap.php');
	require_once('database.php');
	$db = conect();
	if (is_object($db)) {
		$id = (int) $_GET['id'];
		$produto = find($db, 'produto', array('conditions' => array('id' => $id)));
		$produto = array(
			'id' => $produto[0]['id'],
			'nome' => $produto[0]['nome'],
			'preco' => $produto[0]['preco'],
			'descricao' => $produto[0]['descricao'],
			'imagem_url' => $produto[0]['imagem_url']
		);
	} else {
		die("<h1> Não foi possível conectar-se com o banco de dados</h1><h2>#{$db['code']}: {$db['message']}</h2>");
	}

	echo json_encode($produto);
?>