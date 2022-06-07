<?php
require("Engine.php");

class Car { 
    private $brand;
    private $constructionYear;
    private $licensePlate;
    private $engine;
    private $currentDriver;

    public function __construct($brand, $engineModel, $revs, $constructionYear, $licensePlate) {
        $this->brand = $brand;
        $this->constructionYear = $constructionYear;
        $this->licensePlate = $licensePlate;
        $this->engine = new Engine($engineModel, $revs);
    }

    public function CheckRevs() {
        if ($this->engine->GetRevs() > 5000) {
            return "Your $this->brand with license plate $this->licensePlate from $this->constructionYear has more then 5000 revs. Please check your car since it is brokie brokie...";
        }
        else {
            return "Your $this->brand with license plate $this->licensePlate from $this->constructionYear has less then 500 revs. Your car is perfectly fine :)";
        }
    }

    public function SetDriver($driver) {
        $this->currentDriver = $driver;
    }

    public function GetDriver() {
        return $this->currentDriver;
    }

    public function __toString() {
        return "Car: $this->brand ($this->constructionYear) with license plate $this->licensePlate. $this->currentDriver";
    }
}

?>