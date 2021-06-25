<?php
	include("req.php");

    include("config.php");

    $objResult = doSQL("
        SELECT l.name AS name, a.name AS alliance, l.subfaction AS subfaction, l.points AS points, l.pdf AS pdf, l.image AS image, l.version AS version, l.handbook AS handbook
        FROM list l
        LEFT OUTER JOIN alliance a ON l.alliance_id = a.id
    ");

    echo json_encode($objResult);
?>