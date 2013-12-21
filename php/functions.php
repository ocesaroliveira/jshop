<?php
	function pr ($value, $die = true) {
		if ($die) {
			die(print_r($value));
		} else {
			print_r($value);
		}
	}
?>