<?php

session_start();

include("connection.php");
include("functions.php");


if($_SERVER['REQUEST_METHOD'] == "POST")
{
  //something was posted
  $user_name = $_POST['user_name'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  if(!empty($user_name) && !empty($name) && !empty($email) && !empty($password) && !is_numeric($user_name))
  {

    //save to database
    $user_id = random_num(20);
    $query = "insert into users (user_id,user_name,name,email,password) values ('$user_id','$user_name','$name','$email','$password')";

    mysqli_query($con, $query);

    header("Location: login.php");
    die;
  }else
  {
    echo "Please enter some valid information!";
  }
}

?>

<!DOCTYPE html>   
<html>   
<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<title> Login Page </title>  
<style>   
Body {  
  font-family: Calibri, Helvetica, sans-serif;  
  background-color: white;  
}  
button {   
       background-color: #4CAF50;   
       width: 100%;  
        color: yellow;   
        padding: 15px;   
        margin: 10px 0px;   
        border: none;   
        cursor: pointer;   
         }   
 form {   
        border: 3px solid #f1f1f1;   
    }   
 input[type=text], input[type=password], input[type=name], input[type=email] {   
        width: 100%;   
        margin: 8px 0;  
        padding: 12px 20px;   
        display: inline-block;   
        border: 2px solid green;   
        box-sizing: border-box;   
    }  
 button:hover {   
        opacity: 0.7;   
    }   
  .cancelbtn {   
        width: auto;   
        padding: 10px 18px;  
        margin: 10px 5px;  
    }   
        
     
 .container {   
        padding: 25px;   
        background-color: lightblue;  
    }   
</style>   
</head>     
<body>    
    <center> <h1> Expenditure Manager </h1> </center>   
    <form method=post>  
        <div class="container">   
            <label>Username : </label>   
            <input id="text" type="text" placeholder="Enter Username" name="user_name" required>  
            <label>Name: </label>   
            <input id="text" type="name" placeholder="Enter Name" name="name" required>
            
            <label>email: </label>   
            <input id="text" type="email" placeholder="Enter Email" name="email" required>
          
            <label>Password : </label>   
            <input id="text" type="password" placeholder="Enter Password" name="password" required>  
            <!--<button type="submit">Sign Up</button>--> 
            <input id="button" type="submit" value="Signup"><br><br>
            <a href="login.php">Click to Login</a><br><br>   
        </div>   
    </form>     
</body>     
</html> 

