  <?php
  class Animal
  {
    public function __construct($name = null)
    {
      $this->name = $name;
      $this->legs = 2;
      $this->cold_blooded = false;
    }

    public function get_name()
    {
      echo $this->name;
    }

    public function get_legs()
    {
      $this->legs;
    }

    public function get_cold_blooded()
    {
      $this->cold_blooded;
    }
  }
  ?>