
<?php
// include 'eirb-common/eirb-cas.php';
// $login = eirb_cas_protect();

$bdd = new PDO('mysql:host=localhost;dbname=west;charset=utf8', 'west', 'westeirb2021');

$query1 = $bdd->query("SELECT username, SCOREGAME1 FROM scores ORDER BY SCOREGAME1 DESC LIMIT 5;");
$top5 = $query1->fetchAll();

<<<<<<< HEAD
$queryScore = $bdd->query("SELECT scoregame1 FROM scores WHERE username='".$login."';");
$personalScore = $queryScore->fetch()[0];
// var_dump($personalScore);
=======
$personalScore = $bdd->query("SELECT scoregame1 FROM scores WHERE username=$login");
>>>>>>> 1cd6c67b93bf1296fc1e8d5989e07b3563285bef

// $highscoresGame1 = $query1->execute();
// var_dump($highscoresGame1);
// echo $highscoresGame2;

// if ($mysqli->connect_errno) {
//     echo "Echec lors de la connexion à MySQL  : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
// }

// $highscoresGame1 = mysqli_query($con, "SELECT username, scoregame1 FROM scores ORDER BY scoregame1 DESC LIMIT 5;");
// $highscoresGame2 = mysqli_query($con, "SELECT username, scoregame2 FROM scores ORDER BY scoregame2 DESC LIMIT 5;");


?>