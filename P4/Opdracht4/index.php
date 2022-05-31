<?php

include("./Classes/Car.php");

$BMW = new Car("BMW", "X5", 5000, 2018, "ABC-123");

echo $BMW->CheckRevs();

echo '<hr>';

?>