<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$key = 'id';
$cond = ((!empty($_POST)) && (isset($_POST[$key])));
if($cond) {
  $id = $_POST[$key];
  $emails = implode(',' , [
  	'matteolambertucci3@gmail.com,',
    'matteinolamb@gmail.com'
  ]);
  $subject = 'Todo-App Mail-service';
  $body = "<h1>Todo id = $id Eliminato.<h1>"; // bad
  $sep = "\r\n";
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=utf-8';
  $result = mail($emails, $subject, $body, implode($sep, $headers));
  $out = $result ? 'Email sented' : 'Email not sented';
  echo $out;
} else
	echo 'Bad Request.';
?>