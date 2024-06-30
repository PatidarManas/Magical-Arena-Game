import {
  decideAttackerAndDefender,
  isValidPlayerObject,
} from "../src/gameLogic.js";
import { isEqual, isEqualObjects, isTrue } from "../utils/assertions.js";
import { gameLogicFixture } from "./testFixtures.js";

function testIsValidPlayerObject() {
  // Function to test isValidPlayerObject function to return expected boolean
  console.log(
    "Testing for isValidPlayerObject function to return expected boolean"
  );

  const validPlayer = gameLogicFixture.positiveTestFixtures.validPlayer1;
  const inValidPlayersArray = gameLogicFixture.negativeTestFixtures;
  //Postive Test Case
  isTrue(
    isValidPlayerObject(validPlayer),
    "testIsValidPlayerObject Failed: Expected True from valid player, returned False"
  );

  //Negative Test Cases
  inValidPlayersArray.forEach((inValidPlayer) => {
    isTrue(
      !isValidPlayerObject(inValidPlayer),
      "testIsValidPlayerObject Failed: Expected False from invalid player, returned True"
    );
  });

  console.log("testIsValidPlayerObject Passed.");
}

function testDecideAttackerAndDefender() {
  // Function to test decideAttackerAndDefender function
  console.log(
    "Testing for isValidPlayerObject function to return expected values"
  );

  const {
    validPlayer1,
    validPlayer2,
    validPlayer3,
    validPlayer4,
    validPlayer5,
  } = gameLogicFixture.positiveTestFixtures;

  // Case when health of A > B
  isEqualObjects(
    decideAttackerAndDefender(validPlayer1, validPlayer3),
    { attackerPlayer: validPlayer3, defenderPlayer: validPlayer1 },
    "TestDecideAttackerAndDefender Failed in case of unequal health"
  );

  // Case when health of A = B, strength of A > B
  isEqualObjects(
    decideAttackerAndDefender(validPlayer1, validPlayer4),
    { attackerPlayer: validPlayer4, defenderPlayer: validPlayer1 },
    "TestDecideAttackerAndDefender Failed in case of equal health, unequal strength"
  );

  // Case when health of A = B, strength of A = B, attack of A > B
  isEqualObjects(
    decideAttackerAndDefender(validPlayer5, validPlayer1),
    { attackerPlayer: validPlayer1, defenderPlayer: validPlayer5 },
    "TestDecideAttackerAndDefender Failed in case of equal health, equal strength, unequal attack"
  );

  // Case when health of A = B, strength of A = B, attack of A = B
  isEqualObjects(
    decideAttackerAndDefender(validPlayer1, validPlayer2),
    { attackerPlayer: validPlayer1, defenderPlayer: validPlayer2 },
    "TestDecideAttackerAndDefender Failed in case of equal health, equal strength, equal attack"
  );
  isEqualObjects(
    decideAttackerAndDefender(validPlayer2, validPlayer1),
    { attackerPlayer: validPlayer2, defenderPlayer: validPlayer1 },
    "TestDecideAttackerAndDefender Failed in case of equal health, equal strength, equal attack"
  );

  console.log("testDecideAttackerAndDefender Passed.");
}

function runTestFunctions() {
  // Function to run all test funtions
  console.log("Runing all tests for Player Logic");
  testIsValidPlayerObject();
  testDecideAttackerAndDefender();
  console.log("\n All test cases Passed for Player Logic \n");
}

runTestFunctions();