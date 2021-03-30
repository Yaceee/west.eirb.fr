
<!DOCTYPE html>
<html lang="en">
<?php
// Include eirb connect function
include 'eirb-common/eirb-cas.php';
include './sql.php';
// Activate the protection
$login = eirb_cas_protect();
// $bdd = new PDO('mysql:host=localhost;dbname=west;charset=utf8', 'west', 'westeirb2021');
// $mysqli = new mysqli("localhost", "", "westeirb2010", "west");
// var_dump(json_encode($top5[0]['username']));
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="image/logo_fav.svg">
    <title>La Salle d'Arcade - West’eirb</title>
    <script src="sql.js"></script> 
</head>

<body>
    <main class="bg-cream">
        <div class="bg-brown">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-dark justify-content-between">
                    <a href="index.html"><h1 class="navbar-brand nav-title">WEST'EIRB</h1></a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbarContent" class="collapse navbar-collapse justify-content-end">
                        <ul class="nav navbar-nav text-uppercase">    
                            <li class="nav-item"><div class="rev-r"><img class="rev-r-img" src="image/revolver-icon.png" alt="rev-icon"></div><a href="equipe.html" class="nav-link">Equipe</a><div class="rev"><img class="rev-img" src="image/revolver-icon.png" alt="rev-icon"></div></li>
                            <li class="nav-item"><div class="rev-r"><img class="rev-r-img" src="image/revolver-icon.png" alt="rev-icon"></div><a href="jeux.php" class="nav-link">La salle d'arcade</a><div class="rev"><img class="rev-img" src="image/revolver-icon.png" alt="rev-icon"></div></li>
                            <li class="nav-item"><div class="rev-r"><img class="rev-r-img" src="image/revolver-icon.png" alt="rev-icon"></div><a href="calendrier.html" class="nav-link">Calendrier</a><div class="rev"><img class="rev-img" src="image/revolver-icon.png" alt="rev-icon"></div></li>
                            <li class="nav-item"><div class="rev-r"><img class="rev-r-img" src="image/revolver-icon.png" alt="rev-icon"></div><a href="partenaires.html" class="nav-link">Partenaires</a><div class="rev"><img class="rev-img" src="image/revolver-icon.png" alt="rev-icon"></div></li>
                            <li class="nav-item icons">
                                <div class="net-icon-container">
                                    <a href="https://www.instagram.com/" target="_blank"><img class="net-icon" src="image/instagram.png" alt="instagram icon"></a>
                                    <a href="https://t.me/joinchat/YV7J8LNfP3A0OTI0" target="_blank"><img class="net-icon" src="image/telegram.png" alt="telegram icon"/></a>
                                    <a href="https://www.youtube.com/" target="_blank"><img class="net-icon" src="image/youtube.png" alt="youtube icon"/></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>           
        </div>
        <div class="center miniature-container">
            <a href="westjump.php"><img src="mini_jeux/minia.png" alt="Miniature" class="miniature"></a>
        </div>
        
        <div id="highscores" class="table centered">
            <table id="highscoresTable" class="">

            </table>
        </div>
        <script>
            var top5 = <?php echo(json_encode($top5)); ?>;
            var highscores = document.getElementById('highscoresTable');
            for(var i = 0; i < 5; i++){
                var row = highscores.insertRow();
                var cellName = row.insertCell();
                cellName.innerHTML = top5[i][0];
                var cellScore = row.insertCell();
                cellScore.innerHTML = top5[i][1];
                row.class = "table-row";
            }
            var personalScore = <?php echo $score; ?>
            // highscores.style.width = '50%';
        </script>
    </main>

    <footer class="bg-footer footer">
        <p class="credit-name">Yacee - Godo - Jaja</p>
    </footer>        
    <!-- <?php echo $highscoresGame1; ?> -->

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
</body>
</html>Select Top 5 RestaurantID, RestaurantName,Address,ProfileImage from Restaurant_Details order by DisplayRating Desc