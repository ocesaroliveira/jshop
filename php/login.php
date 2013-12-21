<?php
	require_once('bootstrap.php');
	require_once('database.php');
	// $db = conect();
	// if (is_object($db)) {
	// 	$fields = array(
	// 		'nome' => 'César Oliveira',
	// 		'email' => 'cesar.o.almeida@gmail.com',
	// 		'senha' => 'admin'
	// 	);
	// } else {
	// 	pr($db);
	// }

	$data = file_get_contents("php://input");
	$objData = json_decode($data);

	$values = array('php', 'web', 'angularjs', 'js');
	echo json_encode($values);

	// // Check if the keywords are in our array
	// if(in_array($objData->data, $values)) {
	//     echo 'I have found what you\'re looking for!';
	// }
	// else {
	//     echo 'Sorry, no match!';
	// }
?>