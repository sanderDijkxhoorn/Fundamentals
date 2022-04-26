<?php

class Cake {
    // Properties
    private $name;
    private $price;
    private $description;
    private $image;

    // Methods
    public function __construct($name, $price, $description, $image) {
        $this->name = $name;
        $this->price = $price;
        $this->description = $description;
        $this->image = $image;
    }
    
    public function __toString()
    {
        return 
        "<hr>Name: ". $this->name ."<br>".
        "Price: ". $this->price ."<br>".
        "Description: ". $this->description ."<br>" .
        "Image: ". $this->image ."<hr>";
    }

}

?>