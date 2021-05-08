<?php


$host = "rdbms.strato.de"; /* Host name */
$user = "dbu333136"; /* User */
$password = "Gijsbert123!"; /* Password */
$dbname = "dbs1946551"; /* Database name */

$conn = new mysqli($host, $user, $password,$dbname) or die("Connect failed: %s\n". $conn -> error);

?>