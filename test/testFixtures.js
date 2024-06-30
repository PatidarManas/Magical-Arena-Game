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
