<?php

class Frog extends Animal
{
  public function __construct()
  {
    $this->legs = 4;
  }

  public function jump()
  {
    echo "hop hop";
  }
}
