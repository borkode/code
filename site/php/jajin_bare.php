<html>
<?php
if (count($_POST)>0) {
    if ($_POST["action"]=="message_send"){
        $base_message_html = "
        <div id='message'>
            <b style='font-size:16px;>".$_POST['username']."</b>
            <p>".$_POST['message']."</p>
        </div>
        ";
        echo $base_message_html;
    }
}
?>
<form action="" method="post">
    <textarea autofocus placeholder="Type your message here" id='textarea'></textarea>
        <input hidden type='text' name='message' id='main_message_box' />
        <input hidden type='submit' id='sub' name='action' value='message_send' />
        <input hidden type='text' name='username' value='username123' />
    </form>
    <script>
        var shift=false;
        document.getElementById('textarea').addEventListener("keyup",function(event){
            if(event.keyCode == 16){
                shift = false;
            }
        });
        document.getElementById('textarea').addEventListener("keydown", function(event) {
            if(event.keyCode == 16){
                shift = true;
            }
            updateInput();
            if(event.keyCode == 13 && !shift) {
                event.preventDefault();
                document.getElementById("sub").click();
            }
        });
        function updateInput(){
            document.getElementById('main_message_box').value=document.getElementById('textarea').value.replace(new RegExp('\n', 'g'), '<br>');;
        }
    </script>
    <style>
    @import url('https://fonts.googleapis.com/css?family=Arimo');
    html{
        font-family:'Arimo',sans-serif;
    }
    textarea {
        resize: none;
        width:95%;
        font-size:14px;
        height:10%;
        outline:none;
        border:8px solid #aaa;
        background-color:#aaa;
        color:#fff;
        position:absolute;
        left:2%;
        top:88%;
    }
    textarea::placeholder {
        color:#eee;
    }
    #message {
        font-size:14px;
    }
    </style>
</html>
