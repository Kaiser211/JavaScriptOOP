
	  	function Ninja(name){
        this.name = name;
        this.health = 100;
        let speed = 3;
        let strength = 3;
        this.setSpeed = function(speed){
            this.speed = speed;}
        this.getSpeed = function(){
            return speed;}
        this.setStrength = function(strength){
            this.strength = strength;}
        this.getStrength = function(){
            return strength;}
    }
    Ninja.prototype.sayName = function(){
        console.log("My ninja name is: "+this.name);
    }
    Ninja.prototype.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+" , Speed: "+this.getSpeed()+", Strength: "+this.getSpeed());
    }
    Ninja.prototype.drinkSake = function(){
        this.health += 10;
    }
    let ninja = new Ninja("Hayabusa");
    ninja.sayName();
    ninja.showStats();
    ninja.drinkSake();
    ninja.drinkSake();
    ninja.showStats();
   
	 