<?php
	include("req.php");

    include("config.php");

    $objResult = doSQL("
        SELECT a.name,
        (SELECT COUNT(*) FROM game g WHERE g.winner_id = pg.player_id) AS wins,
        (SELECT COUNT(*) FROM game g WHERE g.loser_id = pg.player_id) AS losses,
        (SELECT COUNT(*) FROM game g WHERE pg.player_id IN(g.winner_id, g.loser_id)) AS games
        FROM alliance a
        LEFT OUTER JOIN list l ON l.alliance_id = a.id
        LEFT OUTER JOIN playergame pg ON pg.list_id = l.id
    ");

    echo json_encode($objResult);
?>