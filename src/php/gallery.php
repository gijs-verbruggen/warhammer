<?php
	include("req.php");

    include("config.php");

    $objResult = doSQL("
        SELECT g.id AS id, g.name AS name, g.date AS date, g.image AS image, a.name AS alliance_name, p.name AS painter_name
        FROM gallery g
        LEFT OUTER JOIN alliance a ON g.alliance_id = a.id
        LEFT OUTER JOIN painter p ON g.painter_id = p.id
    ");

    echo json_encode($objResult);
?>