<?php
  require_once 'login.php';
  $conn = new mysqli($hn, $un, $pw, $db);
  if ($conn->connect_error) die($conn->connect_error);
  else echo "Connection successful";

  $query = "SELECT * FROM NewUsers";
  $result = $conn->query($query);
  if(!$result) die($conn->error);

  $rows = $result->num_rows;

  for($j = 0; $j < $rows; $j++) {
    $result->data_seek($j);
    echo 'User ID :' . $result->fetch_assoc()['UserID'] . '<br />';
    $result->data_seek($j);
    echo 'User name: ' . $result->fetch_assoc()['Username'] . '<br />';
    $result->data_seek($j);
    echo 'Email :' . $result->fetch_assoc()['Email'] . '<br />';
  }

  $result->close();
  $conn->close();
?>