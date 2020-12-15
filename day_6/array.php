<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Array</title>
</head>

<body>
  <h1>Berlatih Array</h1>

  <?php
  echo "<h3> Soal 1 </h3>";
  /* 
      SOAL NO 1
      Kelompokkan nama-nama di bawah ini ke dalam Array.
      Kids : "Mike", "Dustin", "Will", "Lucas", "Max", "Eleven" 
      Adults: "Hopper", "Nancy",  "Joyce", "Jonathan", "Murray"
  */
  $kids = array("Mike", "Dustin", "Will", "Lucas", "Max", "Eleven"); // Lengkapi di sini
  $adults = ["Hopper", "Nancy",  "Joyce", "Jonathan", "Murray"];
  echo "<label>Kids in Array : </label><br>";
  printf(implode(", ", $kids));
  echo "<br><br><label>Adults in Array :</label><br>";
  printf(implode(", ", $adults));
  echo "<h3> Soal 2</h3>";
  /* 
      SOAL NO 2
      Tunjukkan panjang Array di Soal No 1 dan tampilkan isi dari masing-masing Array.
  */
  echo "Cast Stranger Things: ";
  echo "<br>";
  echo "Total Kids: ", count($kids); // Berapa panjang array kids
  echo "<br>";
  echo "<ol>";
  echo "<li> $kids[0] </li>";
  // Lanjutkan
  echo "<li> $kids[1] </li>";
  echo "<li> $kids[2] </li>";
  echo "<li> $kids[3] </li>";
  echo "<li> $kids[4] </li>";
  echo "<li> $kids[5] </li>";
  echo "</ol>";

  echo "Total Adults: " . count($adults) . ""; // Berapa panjang array adults
  echo "<br>";
  echo "<ol>";
  // Lanjutkan
  for ($x = 0; $x < count($adults); $x++) {
    echo "<li> $adults[$x] </li>";
  }
  echo "</ol>";

  /*
            SOAL No 3
            Susun data-data berikut ke dalam bentuk Asosiatif Array (Array Multidimensi)
            
            Name: "Will Byers"
            Age: 12,
            Aliases: "Will the Wise"
            Status: "Alive"

            Name: "Mike Wheeler"
            Age: 12,
            Aliases: "Dungeon Master"
            Status: "Alive"

            Name: "Jim Hopper"
            Age: 43,
            Aliases: "Chief Hopper"
            Status: "Deceased"

            Name: "Eleven"
            Age: 12,
            Aliases: "El"
            Status: "Alive"
            
        */

  $users = [
    array("Name" => "Will Byers", "Age" => 12, "Aliases" => "Will the Wise", "Status" => "Alive"),
    array("Name" => "Mike Wheeler", "Age" => 12, "Aliases" => "Dungeon Master", "Status" => "Alive"),
    array("Name" => "Jim Hopper", "Age" => 43, "Aliases" => "Chief Hopper", "Status" => "Deceased"),
    array("Name" => "Eleven", "Age" => 12, "Aliases" => "El", "Status" => "Alive")
  ];

  echo "<p>Users</p>";
  echo "<ol>";
  for ($i = 0; $i < count($users); $i++) {
    # code...
    echo "<li><ul>",
      "<li> Name : " . $users[$i]["Name"] . "</li> ",
      "<li> Age : " . $users[$i]["Age"] . "</li> ",
      "<li> Aliases : " . $users[$i]["Aliases"] . "</li> ",
      "<li> Status : " . $users[$i]["Status"] . "</li> ",
      "</ul></li><br>";
  }
  echo "</ol>";
  ?>
</body>

</html>