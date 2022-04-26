<?php

include("Classes/Cake.php");

$AppleCake = new Cake("Apple", "4.99", "A delicious apple cake", "apple.jpg");
$ChocoleteCake = new Cake("Chocolete", "69.42", "Very delicious cake", "chocolete.png");

echo $AppleCake;
echo $ChocoleteCake;
?>