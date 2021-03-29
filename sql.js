// // let users = require('./students.json')

// const { table } = require('console');
// const mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "new_user",
//     password: "password",
//     database: "WST"
// });
  

// // function insert(){
// //     con.connect(function(err) {
// //         users.forEach(user => {
// //             let sql = "INSERT INTO scores (username, admin, scoregame1, scoregame2) VALUES('"+user+"',0,0,0);";
// //             con.query(sql, function (err, result) {
// //                 console.log("1 record inserted");
// //             });           
// //         });
// //     });
// // }

// function updateScore(username, score, gameNumber){
//     con.connect(function(err) {
//         let sql = "SELECT * FROM scores WHERE username='"+username+"';";
//         con.query(sql, function (err, result) {
//             if (gameNumber == 1){
//                 if (score > result[0].SCOREGAME1){
//                     let sql = "update scores set scoregame1="+score+" where username='"+username+"';";
//                     con.query(sql, function (err, result) {
//                         console.log("Score game1 updated");
//                     }); 
//                 }
//             }else if (gameNumber == 2){
//                 if (score > result[0].SCOREGAME2){
//                     let sql = "update scores set scoregame2="+score+" where username='"+username+"';";
//                     con.query(sql, function (err, result) {
//                         console.log("Score game2 updated");
//                     }); 
//                 }
//             }
//         });
//     });
// }

// function tableCreate(data){
//     var highscores = document.getElementById('highscoresTable');
//     tbl.style.width = '50%';
//     var tbdy = document.createElement('tbody');
//     let thead = highscores.createTHead();
//     data.forEach(player => {
//         var tr = document.createElement('tr');
//         var td = document.createElement('td');
//         td.appendChild(document.createTextNode(data.username))
//         td.appendChild(document.createTextNode(data.scoregame1))
//         tbdy.appendChild(tr);

//     })
//     highscores.appendChild(tbdy);
// }

// function getMax5Scores(gameNumber){
//     con.connect(function(err) {
//         let sql = "";
//         if (gameNumber == 1){
//             sql = "SELECT username, scoregame1 FROM scores ORDER BY scoregame1 DESC LIMIT 5;";
//         }else if (gameNumber == 2){
//             sql = "SELECT username, scoregame2 FROM scores ORDER BY scoregame2 DESC LIMIT 5;";
//         }
//         con.query(sql, function (err, result) {
//             tableCreate(result);
//             return result;
//         });
//     });
// }
