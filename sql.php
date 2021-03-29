
<?php

$bdd = new PDO('mysql:host=localhost;dbname=west;charset=utf8', 'west', 'westeirb2021');

$query1 = $bdd->query("SELECT username, SCOREGAME1 FROM scores ORDER BY SCOREGAME1 DESC LIMIT 5;");
$top5 = $query1->fetchAll();

// $highscoresGame1 = $query1->execute();
// var_dump($highscoresGame1);
// echo $highscoresGame2;

// if ($mysqli->connect_errno) {
//     echo "Echec lors de la connexion à MySQL  : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
// }

// $highscoresGame1 = mysqli_query($con, "SELECT username, scoregame1 FROM scores ORDER BY scoregame1 DESC LIMIT 5;");
// $highscoresGame2 = mysqli_query($con, "SELECT username, scoregame2 FROM scores ORDER BY scoregame2 DESC LIMIT 5;");


?>