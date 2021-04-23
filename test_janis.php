<?php 
// Include eirb connect function
include './sql.php';
include 'eirb-common/eirb-cas.php';
// Activate the protection
$login = eirb_cas_protect();

$queryScore = $bdd->query("SELECT scoregame1 FROM scores WHERE username='".$login."';");
$personalScore = $queryScore->fetch()[0];
// var_dump($personalScore);
// if (isset($_POST['highScore'])){
//     var_dump($_POST['highScore']);
// }else{
//     var_dump("yoyoyo");
// }
if(isset($_POST['highScore'])){
    // var_dump($_POST['highScore']);
    $newHighscore = $_POST['highScore'];
    if ($personalScore < $newHighscore){
        $queryUpdateScore = $bdd->query("UPDATE scores SET scoregame1='".$newHighscore."' WHERE username='".$login."';");
        $queryUpdateScore->execute();
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WST</title>
    <script src="mini_jeux/p5/p5.js"></script>
    <script src="mini_jeux/p5/addons/p5.sound.min.js"></script>
    <script src="mini_jeux/westeirbJump.js"></script>
</head>


<body>
    <style>
        body {
            overflow: hidden;
            margin: 0;
        }
    </style>
</body>
</html>