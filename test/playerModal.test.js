import { isEqual,isInRange, isTrue, throwsError } from "../utils/assertions.js";
import { playerClassFixture } from "./testFixtures.js";

// Postive Test Cases
function testPlayerConstructor() {
    // Function to test the values are assigned as passed
    console.log("Testing for health, strength and attack to be equal to user input");
   
    const player = playerClassFixture.positiveTestFixtures.validPlayerA;
    
    isEqual(player.health, 5, 'TestPlayerConstructor failed,consturctor failed at assigning health');
    isEqual(player.strength,5,'TestPlayerConstructor failed, consturctor failed at assigning strength');
    isEqual(player.attack,10,'TestPlayerConstructor failed, consturctor failed at assigning attack');

    console.log("testPlayerConstructor Passed.");
    
}

function testPlayerRoll() {
    // Function to test the attackImpact and defendImpact function 
    console.log("Testing for attackImpact and defendImpact function to be in expected range");

    const player = playerClassFixture.positiveTestFixtures.validPlayerB;

    const attackRollValue = player.attackImpact();
    const defendRollValue = player.defendImpact();

    isInRange(attackRollValue,5,30,'TestPlayerRoll Failed: attackImpact Function Failed');
    isInRange(defendRollValue,10,60,'TestPlayerRoll Failed:  defendImpact Function Failed');

    console.log('testPlayerRoll Passed.');
}

function testDiceRoll(){
    // Function to test rollDice funtion
    console.log("Testing for rollDice Function to be in range of 1 to 6");

    const player = playerClassFixture.positiveTestFixtures.validPlayerA;
    
    const rollValue = player.rollDice();
    isInRange(rollValue,1,6,"TestDiceRoll Failed: rollDice function Failed");

    console.log('testDiceROll Passed.');
}

function testPlayerTakeDamage() {
    // Function to check takeDamage funtion
    console.log("Testing for takeDamage Function to update health as expected");
    const player = playerClassFixture.positiveTestFixtures.validPlayerB;
    
    player.takeDamage(30);
    isEqual(player.health,70,"TestPlayerTakeDamage Failed: takeDamage Failed");
    player.takeDamage(85);
    isEqual(player.health,0,"TestPlayerTakeDamage Failed: takeDamage Failed");


    console.log('testPlayerTakeDamage Passed.');
}

function testIsAlive() {
    // Function to test isAlive function
    console.log("Testing for isAlive Function to return Boolean as expected");

    const alivePlayer = playerClassFixture.positiveTestFixtures.validPlayerA;
    const deadPlayer = playerClassFixture.positiveTestFixtures.zeroHealthPlayer;

    isTrue(alivePlayer.isAlive(),"TestIsAlive Failed: isAlive Failed for alive player");
    isTrue(!deadPlayer.isAlive(),"TestIsAlive Failed: isAlive Failed for dead player");

    console.log('testIsAlive Passed.');
}

// Negative Test Cases
function testNegativeHealth() {
    //Function to test constructor in case of Negative health 
    console.log("Testing for player Initialization with negative health ");

    const negativeHealthPlayer = playerClassFixture.negativeTestFixtures.negativeHealthPlayer;

    throwsError(negativeHealthPlayer,"testNegativeHealth Failed");

    console.log('testNegativeHealth Passed.');
}

function testNegativeStrength() {
    //Function to test constructor in case of Negative strength 
    console.log("Testing for player Initialization with negative strength ");

    const negativeStrengthPlayer = playerClassFixture.negativeTestFixtures.negativeStrengthPlayer;

    throwsError(negativeStrengthPlayer,"testNegativeStrength Failed");

    console.log('testNegativeStrength Passed.');
}

function testNegativeAttack() {
    //Function to test constructor in case of Negative attack 
    console.log("Testing for player Initialization with negative attack ");

    const negativeAttackPlayer = playerClassFixture.negativeTestFixtures.negativeAttackPlayer;

    throwsError(negativeAttackPlayer,"testNegativeAttack Failed");

    console.log('testNegativeAttack Passed.');
}

function testNegativeTakeDamage() {
    // Function to test takeDamage function with invalid damage
    console.log("Testing for takeDamage Function with negative value");

    const negativeDamage = playerClassFixture.negativeTestFixtures.invalidDamage;
    const player = playerClassFixture.positiveTestFixtures.validPlayerA;

    throwsError(()=> player.takeDamage(negativeDamage),"TestNegativeTakeDamage Failed");

    console.log('testNegativeTakeDamage Passed.');
}
function runTestFunctions() {
    // Function to run all test funtions
    console.log("Runing all tests for Player Class");
    testPlayerConstructor();
    testPlayerRoll();
    testDiceRoll();
    testPlayerTakeDamage();
    testIsAlive();
    testNegativeAttack();
    testNegativeHealth();
    testNegativeStrength();
    testNegativeTakeDamage();
    console.log("\n All test cases Passed for Player Class");
}

runTestFunctions();