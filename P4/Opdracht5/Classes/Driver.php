<?php

class Driver {
    private $firstname;
    private $lastname;
    private $age;

    public function __construct($firstname, $lastname, $age) {
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->age = $age;
    }

    public function __toString() {
        return "Driver: $this->firstname $this->lastname ($this->age)";
    }
}

?>