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
	} else {
		die("<h1> Não foi possível conectar-se com o banco de dados</h1><h2>#{$db['code']}: {$db['message']}</h2>");
	}

	echo json_encode($_produtos);
?>