<?php

class Engine {
    private $model;
    private $revs;
    
    public function __construct($model, $revs) {
        $this->model = $model;
        $this->revs = $revs;
    }

    public function GetRevs() {
        return $this->revs;
    }

    public function __toString() {
        return "Engine: $this->model ($this->revs revs)";
    }
}

?>