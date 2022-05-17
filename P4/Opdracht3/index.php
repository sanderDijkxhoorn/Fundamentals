<?php

// include('Classes/Car.php');

// echo '<hr>';
// $car1 = new Car('ABC-123', 4, 'red', 'BMW');
// echo $car1->__toString();

// echo '<hr>';
// $car2 = new Car('XYZ-456', 5, 'blue', 'Audi');
// echo $car2->__toString();

include('Classes/Person.php');
include('Classes/SimpleDate.php');
include('Classes/Adress.php');

$Jonathan = new Person('Jonathan Dikzak', '14-12-1998', 'Rijksweg', 'Amsterdam', '2282KX');
echo $Jonathan->__toString();  