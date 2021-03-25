
<?php
// Include eirb connect function
include 'eirb-common/eirb.cas.php';
// Activate the protection
$login = eirb_cas_protect();

$mysqli = new mysqli("localhost", "new_user", "password", "WST");
if ($mysqli->connect_errno) {
    echo "Echec lors de la connexion à MySQL  : (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$studentjsondata = file_get_contents('students.json');
//convert json object to php associative array
$data = json_decode($studentjsondata, true);

//insert into mysql table
foreach($data as $student){
    $sql = "INSERT INTO scores (username, admin, scoregame1, scoregame2) VALUES('"+$student+"',0,0,0)";
    if(!mysqli_query($con, $sql))
    {
        die('Error : ' . mysqli_error(NULL));
    }
}

$highscoresGame1 = mysqli_query($con, "SELECT username, scoregame1 FROM scores ORDER BY scoregame1 DESC LIMIT 5;");
$highscoresGame2 = mysqli_query($con, "SELECT username, scoregame2 FROM scores ORDER BY scoregame2 DESC LIMIT 5;");


?>