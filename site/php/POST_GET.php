<?php
$posts = array();
if(count($_POST)>0){
    array_push($posts,json_decode('{"'.$_POST['pname'].'":{"data":"'.$_POST['data'].'"}}',true));
}
if(count($_GET)>0){
    echo $posts[$_GET['post']];
}
?>
<h2>
Receive
</h2>
<form action="" method="get">
    Post Name:
    <br />
    <input type='text' name='post' />
    <br />
    <input type='submit' />
</form>
<hr>
<h2>
Send
</h2>
<form action="" method="post">
    POST Name: <input type='text' name='pname' />
    <br />
    POST Data: <input type='text' name='data' />
    <br />
    <input type='submit' />
</form>
