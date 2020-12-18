<?php
    session_start();
	if(isset($_POST['Submit'])){

    $a=$_SESSION['Sname'];
    $b=$_SESSION['Sage'];
    $c=$_SESSION['Scountry'];
	$d=$_POST['score'];	

    include "config.php";
    
	$sql="INSERT INTO formula(Name,Age,Country,Score) VALUES('$a','$b','$c','$d')";
	
	if($conn->query($sql) === TRUE){
		echo "Insert Done";
		header('Location: Thank.html');
	}
	else{
		echo "Not Done";
	}
}
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
        <link rel="stylesheet" href="Thank.css">
        <link rel = "icon" href ="F1.png" type = "image/x-icon">         
        <h1 style="text-align: center; color: red; text-shadow: 3px 3px black; line-height: 40px;">Formula 1 Quiz</h1>
    </head>
    <body style="background-image: url('Celebration.jpg');background-size: cover; opacity: 0.8;"> 
        <div id="div1" style="background-color: black; margin-left: 15%; margin-right: 15%;">
            <div id="div2">                
                <p id="p1" style="text-align: center;">
                    Please enter the score you achieved in your quiz.
                </p>
                <form id="div3" action="#" method="POST">
                    <input name="score" class="inp" type="text" placeholder="Your Score" required><br><br>                    
                    <input name="Submit" id="submit" type="submit" value="Submit"> 
                </form>
            </div>                       
        </div>       
    </body>    
</html>