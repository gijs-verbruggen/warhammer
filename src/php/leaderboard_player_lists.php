<?php
	include("req.php");

    include("config.php");
    $selectedId = $_REQUEST['selectedId'];
    $objResult = doSQL("
        SELECT MAX(b.name) AS name, MAX(b.subfaction) AS subfaction, MAX(b.pdf) AS pdf, SUM(b.wins) AS wins, SUM(b.losses) AS losses, b.img FROM (
        SELECT l.name, l.subfaction, l.pdf, l.id as list_id, ga.img,
        (SELECT COUNT(*) FROM game g WHERE g.winner_id = %s AND g.id = pg.game_id) AS wins,
        (SELECT COUNT(*) FROM game g WHERE g.loser_id = %s AND g.id = pg.game_id) AS losses
        FROM list l
        LEFT OUTER JOIN playerlist pl ON pl.list_id = l.id
        LEFT OUTER JOIN playergame pg ON pg.list_id = l.id
        LEFT OUTER JOIN alliance a ON a.id = l.alliance_id
        LEFT OUTER JOIN grandalliance ga ON ga.id = a.grand_alliance_id
        WHERE pg.player_id = %s
        )b
        GROUP BY b.list_id
    ",$selectedId, $selectedId, $selectedId);

    echo json_encode($objResult);
?>