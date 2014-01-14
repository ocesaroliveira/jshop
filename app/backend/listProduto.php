<?php
	require_once('core/bootstrap.php');
	require_once('core/database.php');
	$db = conect();
	if (is_object($db)) {
		$produtos = find($db, 'produto');
		$_produtos = array();
		foreach ($produtos as $produto) {
			$_produtos[] = array(
				'id' 		 => $produto['id'],
				'nome' 		 => $produto['nome'],
				'preco' 	 => $produto['preco'],
				'descricao'  => $produto['descricao'],
				'imagem_url' => $produto['imagem_url']
			);
		}
	}

	echo json_encode($_produtos);
?>