<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h1>BELAJAR OOP PHP</h1>
  <?php
  include './animal.php';
  include './ape.php';
  include './frog.php';

  $sheep = new Animal("shaun");

  echo $sheep->name; // "shaun"
  echo "<br>";
  echo $sheep->legs; // 2 
  echo "<br>";
  echo $sheep->cold_blooded; // false
  echo "<br>";
  $sheep->get_name();
  echo "<br>";
  echo $sheep->get_legs();

  $sungokong = new Ape("kera sakti");
  $sungokong->yell(); // "Auooo"
  echo "<br> {$sungokong->legs}";
  echo "<br>";
  $kodok = new Frog("buduk");
  $kodok->jump(); // "hop hop"
  echo "<br>";
  echo $kodok->legs

  ?>
</body>

</html>