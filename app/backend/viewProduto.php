<?php
	require_once('bootstrap.php');
	require_once('database.php');
	// $db = conect();
	// if (is_object($db)) {
	// 	echo 'aaa';
	// 	// die(var_dump($_GET));
	// } else {
	// 	echo 'aaa';
	// 	// pr($db);
	// }

	$data = file_get_contents("php://input");

	die($data);

	// $objData = json_decode($data);

	$values = array('php', 'web', 'angularjs', 'js');
	echo json_encode($values);
?>