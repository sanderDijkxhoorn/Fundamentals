<?php
class Car
{
    private $licencePlate;
    private $numberOfDoors;
    private $color;
    private $brand;

    public function __construct($licencePlate, $numberOfDoors, $color, $brand)
    {
        $this->licencePlate = $licencePlate;
        $this->numberOfDoors = $numberOfDoors;
        $this->color = $color;
        $this->brand = $brand;
    }

    public function setColor($color)
    {
        $this->color = $color;
    }

    public function __toString()
    {
        return "This car is a " . $this->color . " " . $this->brand . " with " . $this->numberOfDoors . " doors and the licence plate " . $this->licencePlate . ".";
    }
}

