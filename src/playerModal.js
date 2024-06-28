class Player {

    constructor(health,strength,attack) { 
        // Constructor to initialize player class with given attributes/inputs
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    } 

    rollDice() {
        // Function to give random value between 1 and 6, both inclusive
        var diceValue = Math.floor(Math.random() * 6) + 1 ;
        return diceValue;
    } 

    attackImpact() {
        // Function to calculate the attack impact based on attack attribute and a dice roll
        var attackImpactValue = this.attack * this.rollDice();
        return attackImpactValue;
    }

    defendImpact() {
        // Function to calculate the defend impact based on strength attribute and a dice roll
        var defendImpactValue = this.strength * this.rollDice();
        return defendImpactValue;
    }

    takeDamage(damageProvided) {
        // Function to decrease the health by the damage provided
        // ensuring input is correctly formated and positive 
        // also ensuring the new health is non-negative valid number
        if (typeof damageProvided !== 'number' || damageProvided < 0) {
            throw new Error('Damage provided must be a non-negative number.');
        }
        this.health = this.health > damageProvided ? this.health - damageProvided : 0;
    }

    isAlive() {
        //Function to check if player is alive (health > 0), return true else false
        return this.health > 0;
    }
}

export default Player;