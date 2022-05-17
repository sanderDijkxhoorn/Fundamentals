<?php
class Person {
    private $name;
    private $adress;
    private $dateOfBirth;

    public function __construct($name, $dateOfBirth, $street, $city, $zip) {
        $this->name = $name;
        $this->adress = new Adress($street, $city, $zip);
        $this->dateOfBirth = new SimpleDate($dateOfBirth);
    }

    public function __toString() {
        return "My name is ". $this->name ." I live at " . $this->adress . ". I was born at " . $this->dateOfBirth;
    }
}