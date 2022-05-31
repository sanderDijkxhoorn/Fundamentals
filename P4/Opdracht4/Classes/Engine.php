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
}

?>