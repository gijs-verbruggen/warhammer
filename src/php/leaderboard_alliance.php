<?php
	include("req.php");

    include("config.php");

    $objResult = doSQL("
        SELECT MAX(b.name) AS name, SUM(b.wins) AS wins, SUM(b.losses) AS losses, SUM(b.games) AS games FROM (
        SELECT a.name, a.id as alliance_id,
        (SELECT COUNT(*) FROM game g WHERE g.winner_id = pg.player_id AND g.id = pg.game_id) AS wins,
        (SELECT COUNT(*) FROM game g WHERE g.loser_id = pg.player_id AND g.id = pg.game_id) AS losses,
        (SELECT COUNT(*) FROM game g WHERE pg.player_id IN(g.winner_id, g.loser_id) AND g.id = pg.game_id) AS games
        FROM alliance a
        LEFT OUTER JOIN list l ON l.alliance_id = a.id
        LEFT OUTER JOIN playergame pg ON pg.list_id = l.id
        ) b
        GROUP BY b.alliance_id
    ");

    echo json_encode($objResult);
?>