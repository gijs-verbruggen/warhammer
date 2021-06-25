<?php
	include("req.php");

    include("config.php");
    $objResult = doSQL("
        SELECT gi.id AS id, gi.gallery_id AS gallery_id, gi.image AS image
        FROM galleryitem gi
    ");

    echo json_encode($objResult);
?>