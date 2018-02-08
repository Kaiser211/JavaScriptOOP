
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

    Ninja.prototype.punch = function(ninja){
        if(ninja.constructor != Ninja){
            console.log("Invalid Ninja");
            return;}
            ninja.health -= 5;
            console.log(`${this.name} punched ${ninja.name} and lost 5 Health!`)
    }
    Ninja.prototype.kick = function(ninja){
        if(ninja.constructor != Ninja){
            console.log("Invalid Ninja.");
            return;}
        ninja.health -= this.strength*15;
        console.log(ninja.name+" was kicked by "+this.name+") and lost "+this.getStrength()*15+" health.");
    }
    //validations
                Ninja.prototype.isNinja = function(ninja){
                    return (ninja instanceof Ninja);
        }

    let ninja = new Ninja("Hayabusa");
    ninja.sayName();
    ninja.showStats();
    ninja.drinkSake();
    ninja.drinkSake();
    ninja.showStats();
   
    let blueNinja = new Ninja("Goemon");
    let redNinja = new Ninja("Bill Gates");
    redNinja.punch(blueNinja);
    blueNinja.showStats();
    blueNinja.kick(redNinja);
    blueNinja.showStats();
	 