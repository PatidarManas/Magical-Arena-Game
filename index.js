import fightSimulator from "./src/gameLogic.js";
import Player from "./src/playerModal.js";

// Create two player objects
let playerA = new Player('Manas',20,10,6);
let playerB = new Player('Hardik',100,10,6);

// Call fightSimulator function between both players
fightSimulator(playerA,playerB);