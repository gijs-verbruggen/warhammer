<?php
	include("req.php");

    include("config.php");

    $objResult = doSQL("
        SELECT DISTINCT p.id, p.name,
        (SELECT COUNT(*) FROM game g WHERE g.winner_id = pg.player_id) AS wins,
        (SELECT COUNT(*) FROM game g WHERE g.loser_id = pg.player_id) AS losses,
        (SELECT COUNT(*) FROM game g WHERE pg.player_id IN(g.winner_id, g.loser_id)) AS games
        FROM player p
        LEFT OUTER JOIN playergame pg ON pg.player_id = p.id
        LEFT OUTER JOIN game g ON g.id = pg.game_id
    ");

    echo json_encode($objResult);
?>