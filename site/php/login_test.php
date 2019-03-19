<?php
$json_dump = '{"yes":{"password":"no"},"username34":{"password":"password56"}}';
$account_data=json_decode($json_dump,true);
if($_POST){
    if($_POST["action"]=="login"){
        if($_POST["attemptedPass"]==$account_data[$_POST["username"]]["password"]){
            echo "<script>window.open('https://google.com/search?q=$json_dump');</script>";
        }else{
            echo "<a style='color:red;'>Username or password incorrect.</a>";
        }
    }
    if($_POST["action"]=="signup"){
        if(in_array($_POST["username"],$account_data)==false){
            $pusername = $_POST["username"];
            $ppassword = $_POST["password"];
            $new_account_data = json_decode('"'.$pusername.'":{"password":"'.$ppassword.'"}',true);
            array_push($account_data,$new_account_data);
            $json_dump = json_encode($account_data);
            $account_data = json_decode($json_dump,true);
            echo "account $pusername created";
        }else{
            echo "<a style='color:red'>This account already exists.";
        }
    }
}
?>

<form action="" method="post">
  <fieldset><legend>Please Log In</legend>
   <input type='text' name='username' placeholder='Username' required><br>
   <input type='password' name='attemptedPass' placeholder='Password' required><br>
   <input type='text' name='action' hidden value='login'><br>
   <input type='submit' value='Log In'>
  </fieldset>
</form>
<form action="" method="post">
  <fieldset><legend>Don't have an account? Sign Up!</legend>
    <input type='text' name='username' required placeholder='Username'><br>
    <input type='password' name='password' required placeholder='Password' id='password'><br>
    <input type='password' oninput="check(this)" required placeholder='Re-type your password'><br>
    <input type='text' name='action' hidden value='signup'><br>
    <input type='submit' value='Sign Up'>
  </fieldset>
</form>
<script language='javascript' type='text/javascript'>
    function check(input) {
        if (input.value != document.getElementById('password').value) {
            input.setCustomValidity('Passwords must match.');
        } else {
            input.setCustomValidity('');
        }
    }
</script>
