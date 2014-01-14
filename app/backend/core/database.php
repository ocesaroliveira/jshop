<?php
    require_once('bootstrap.php');

    function conect () {
        try {
            return new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PSWD);
        } catch (PDOException $e) {
            return array(
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            );
        }
    }

    function insert ($db, $table, $fields) {
        $query = "INSERT INTO " . $table . " (";
        $columns = array_keys($fields);
        $query .= implode(', ', $columns);
        $query .= ") VALUES (";
        foreach ($fields as $value) {
            if (is_int($value)) {
                $query .= $value;
            } elseif (is_bool($value)) {
                $query .= ($value) ? 'true' : 'false';
            } else {
                $query .= "'{$value}'";
            }
            $query .= ', ';
        }
        $query = substr($query, 0, strlen($query) - 2);
        $query .= ');';
        try {
            $db->exec($query);
            return $db->lastInsertId();
        } catch (PDOException $e) {
            return array(
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            );
        }
    }

    function find ($db, $table, $options = null) {
        $query = "SELECT ";
        $query .= (empty($options['fields'])) ? '*' : implode(', ', $options['fields']);
        $query .= " FROM " . $table;
        if (!empty($options['joins'])) {
            foreach ($options['joins'] as $join) {
                $query .= " JOIN " . $join['table'];
                $query .= ' ON ' . $table . '.id = ' . $join['table'] . '.' . $join['foreing_key'];
            }
        }
        if (!empty($options['conditions'])) {
            $query .= " WHERE ";
            foreach ($options['conditions'] as $column => $condition) {
                $query .= $column;
                if (is_array($condition)) {
                    $query .= ' IN (' . implode(', ', $condition) . ')';
                } elseif (is_int($condition)) {
                    $query .= ' = ' . $condition;
                } elseif (is_bool($condition)) {
                    $query .= ($condition) ? ' = true' : ' = false';
                } else {
                    $query .= " = '{$condition}'";
                }
                $query .= ' AND ';
            }
            $query = substr($query, 0, -5);
        }
        $query .= ";";
        try {
            $dados = array();
            foreach ($db->query($query) as $v) {
                $dados[] = $v;
            }
            return $dados;
        } catch (Exception $e) {
            return array(
                'code'    => $e->getCode(),
                'message' => $e->getMessage()
            );
        }
    }
?>