<?php
class Adress {
    private $street;
    private $city;
    private $zip;

    public function __construct($street, $city, $zip) {
        $this->street = $street;
        $this->city = $city;
        $this->zip = $zip;
    }

    public function __toString() {
        return $this->street . " " . $this->city . " " . $this->zip;
    }
}