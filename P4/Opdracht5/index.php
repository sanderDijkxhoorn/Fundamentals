<?php

include("./Classes/Car.php");
include("./Classes/Driver.php");

$JohnDoe = new Driver("John", "Doe", "25");

$BMW = new Car("BMW", "X5", 5000, 2018, "ABC-123");

echo $BMW->CheckRevs();

echo '<hr>';

$BMW->SetDriver($JohnDoe);

echo $BMW->GetDriver();

echo '<hr>';

echo $BMW;

?>