<?php

class SimpleDate {
    private $day;
    private $month;
    private $year;

    public function __construct($dateOfBirth) {
        $date = explode('-', $dateOfBirth);
        $this->day = $date[0];
        $this->month = $date[1];
        $this->year = $date[2];
    }
    
    public function __toString() {
        return $this->day . " " . $this->month . " " . $this->year;
    }
}