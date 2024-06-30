Magical Arena Game

**By Manas Patidar**  
Email: manaspatidar170@gmail.com 

## About the Game 
 This is a two player game where each player has a health, strength and attack attribute and at the start of game the player with less health () is the attacker and the turn changes continuosly. The one whose health reaches 0 first losses. The effective attack is decided by rolling dice by both attacker and defender which is then multiplied by there attack/strength and the positive difrence is calculated.
 If both players have (at start of game):

  Equal Health: Player with lower strength acts as attacker.
  Equal Health & Equal Strength: Player with lower Attack acts as attacker
  Equal Health & Equal Strength & Equal Attack: Player A acts as attacker

## How To Use:
### Step 1 : Install Node.js, if already ignore this step

### Step 2 : Unzip the file and open the Magical Arena Game Directory under terminal

### Step 3 : run install command
```npm install```

### Step 3 : Change Player Attributes
 To change player inputs, navigate to `index.js`. You can modify the following attributes for `playerA` and `playerB`:
 - Name
 - Health
 - Strength
 - Attack

### Step 4 : To run game 
 Ensure the terminal path is set correctly and run the game with: 
```node index.js```

### Step 5 : To run Unit tests - 
```npm test```
 in case of error it will throw error else a test Passed message will be displayed in console/terminal.


## Project Structure:
 Magical Arena Game
    |- src
      |- gameLogic.js         # for fightSimulator function
      |- playerModal.js       # for Player class

    |- test
      |- gameLogic.test.js    # for unit tests for game logic
      |- playerModal.test.js  # for unit tests for Player class
      |- testFixtures.js      # for containing test fixtures

    |- utils
      |- assertions.js        # for assert functions for testing

    |- index.js               # main entry file for application
    |- package.json           # Node.js configuration file
    |- Readme.md              # Project documentation
     