<form action="" method="post">
    <input type='text' name='key' value="<?php if(count($_POST)>0){echo $_POST['key'];}else{echo'';} ?>" />
    <input type='submit' value='Try key' />
</form>
<a href='?purchase'>Don't have a key?</a>
<?php
$keys = array("1004-2052-1942-0528-1934-9341");
if(count($_POST)>0){
    echo "<hr />";
    if(in_array($_POST['key'],$keys)){
        echo "Key success!<br><a href='download?key='".$_POST['key']."'>Click here to download</a>";
    }else{
        echo "This key did not work. Please purchase one if you did not already.";
    }
}

if(count($_GET)>0){
    if($_GET['purchase']==""){
        echo "<hr><h2>Purchase a key</h2>";
        echo "<h4>Keys are one-time use and can NOT be resold or reused.</h4>";
        echo "<a href='PAYPAL_LINK'>Purchase via PayPal</a>";
        echo "<h5>Note: Any refund requests will result in the software being voided.</h5>";
    }
}
?>
