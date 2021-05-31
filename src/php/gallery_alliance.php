<?php
	include("req.php");

    include("config.php");

    $objResult = doSQL("
        SELECT a.id AS id, a.name AS alliance, ga.name AS grandalliance
        FROM alliance a
        LEFT OUTER JOIN grandalliance ga ON a.grand_alliance_id = ga.id
    ");

    echo json_encode($objResult);
?>