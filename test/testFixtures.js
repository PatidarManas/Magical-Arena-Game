// testfixtures.js for all the possible test and edge cases to test the Player Class

import Player from "../src/playerModal.js";
export const playerClassFixture = {
    // Postivive test Fixtures
    positiveTestFixtures: {
        validPlayerA: new Player("PlayerA", 5, 5, 10),
        validPlayerB: new Player("PlayerB", 100, 10, 5),
        zeroHealthPlayer: new Player("ZeroHealthPlayer", 0, 5, 10),
    },
    // Negative test Fixtures
  negativeTestFixtures: {
    negativeHealthPlayer: () => new Player("NegativeHealthPlayer", -10, 5, 10),
    negativeAttackPlayer: () => new Player("NegativeAttackPlayer", 50, 5, -10),
    negativeStrengthPlayer: () =>
      new Player("NegativeStrengthPlayer", 50, -5, 10),
    invalidDamage: -10
  },
};


export const gameLogicFixture = {
  // Postivive test Fixtures
  positiveTestFixtures: {
    validPlayer1: new Player("validPlayer1", 100 ,50 ,2),
    validPlayer2: new Player("validPlayer2", 100 ,50 ,2),
    validPlayer3: new Player("validPlayer3", 50 ,25 ,5),
    validPlayer4: new Player("validPlayer4", 100 ,25 ,5),
    validPlayer5: new Player("validPlayer5", 100 ,50 ,5),
  },
   // Negative test Fixtures
   negativeTestFixtures: [
    { name: 'InvalidPlayer1', health: "100", attack: 5, strength: 10,attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){}},
    { name: 'InvalidPlayer1', health: 100, attack: 5, strength: 'string', attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){} },
    { name: "InvalidPlayer2", health: "string", attack: 5, strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){} },
    { name: "InvalidPlayer3", health: 150 , attack: "string", strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){} },
    { name: 50, health: -10, attack: 5, strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){} },
    { name: 'InvalidPlayer5', health: -10, attack: 5, strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){} },
    { name: "InvalidPlayer6", health: 100, attack: -5, strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){} },
    { name: "InvalidPlayer7", health: 100, attack: 5, strength: -10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){}  },
    { name: "InvalidPlayer8", health: 100, attack: 5, strength: 10, attackImpact: "string",defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:function(){}  },
    { name: "InvalidPlayer9", health: 100, attack: 5, strength: 10, attackImpact: function(){},defendImpact:"string",takeDamage:function(){},isAlive:function(){},rollDice:function(){}  },
    { name: "InvalidPlayer10", health: 100, attack: 5, strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:"string",isAlive:function(){},rollDice:function(){}  },
    { name: "InvalidPlayer11", health: 100, attack: 5, strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:"string",rollDice:function(){}  },
    { name: "InvalidPlayer12", health: 100, attack: 5, strength: 10, attackImpact: function(){},defendImpact:function(){},takeDamage:function(){},isAlive:function(){},rollDice:"string"  },
   ],
}