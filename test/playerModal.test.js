import { isEqual,isInRange, isTrue } from "../utils/assertions.js";
import Player from "../src/playerModal.js";

function testPlayerConstructor() {
    // Function to test the values are assigned correctly
    const player = new Player('test',20,5,3);

    isEqual(player.health,20,'Health should be 20');
    isEqual(player.strength,5,'Strength should be 20');
    isEqual(player.attack,3,'Attack should be 20');

    console.log("testPlayerConstructor Passed.");
}

function testPlayerRollMethods() {
    // Function to test the attackImpact and defendImpact function 
    const player = new Player('test',20,5,10);

    const attackRollValue = player.attackImpact();
    const defendRollValue = player.defendImpact();

    isInRange(attackRollValue,10,60,'Should be in range of 10 and 60');
    isInRange(defendRollValue,5,30,'Should be in range of 5 and 30');

    console.log('testPlayerRollMethods Passed.')
}

function testDiceROll(){
    // Function to test rollDice funtion
    const player = new Player('test',100,20,5);
    
    const rollValue = player.rollDice();
    isInRange(rollValue,1,6,"Dice Value should be in between 1 and 6");

    console.log('testDiceROll Passed.');
}

function testPlayerTakeDamage() {
    // Function to check takeDamage and isAlive funtion
    const player = new Player('test',100,20,5);
    
    isTrue(player.isAlive(),"Player should be alive");
    player.takeDamage(30);
    isEqual(player.health,70,"Player health should be 70");
    player.takeDamage(85);
    isEqual(player.health,0,"Player health should be 0");
    isTrue(!player.isAlive(),"Player should not be alive");


    console.log('testPlayerTakeDamage Passed.');
}


function runTestFunctions() {
    // Function to run all test funtions
    testPlayerConstructor();
    testPlayerRollMethods();
    testDiceROll();
    testPlayerTakeDamage();
}

runTestFunctions();