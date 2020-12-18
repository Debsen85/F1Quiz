<?php
    session_start();
    
    $_SESSION['Sname']=$_POST['name'];
    $_SESSION['Sage']=$_POST['age'];
    $_SESSION['Scountry']=$_POST['country'];
?>
<!DOCTYPE html>
<html>
    <head>
        <style>
            @font-face { font-family: Formula1; src: url('Formula1-Wide.ttf'); } 
            h1 
            {
                font-family: Formula1
            }
        </style> 
        <meta charset="-utf8"/>    
        <title>Formula 1 Quiz</title>  
        <link rel="stylesheet" href="Quiz.css">
        <link rel = "icon" href ="F1.png" type = "image/x-icon">         
        <h1 style="text-align: center; color: red; text-shadow: 3px 3px black; line-height: 40px;">Formula 1 Quiz</h1>
    </head>
    <body style="background-image: url('Aus.jpg');background-size: cover; opacity: 0.8;"> 
        <div id="div1" style="background-color: black; margin-left: 15%; margin-right: 15%;">
            <div id="quiz"></div>
            <button id="submit" name="Submit" onclick="">Submit Quiz</button>  
            <div id="results" name="score"></div>          
        </div>       
    </body>
    <script src="Quiz.js"></script>
</html>