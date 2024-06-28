function fightSimulator(playerA,playerB) {
    // Function to simulate the fight taking input playerA and playerB objects of Player class
    // Check if both are valid player objects or not
    if(!isValidPlayerObject(playerA) || !isValidPlayerObject(playerB)){
        throw new Error('Invalid object: PlayerA and PlayerB should be a valid input')
    }

    // assigning attacker to the one with less energy and defender to the other
    // /*Note*/ -> Assumption: it is assumed in case of equal energy of A and B, A is attacker
    let attackerPlayer = playerA.health <= playerB.health ? playerA : playerB;
    let defenderPlayer = attackerPlayer === playerA ? playerB : playerA;

    // Run the fight untill both are alive
    while(attackerPlayer.isAlive() && defenderPlayer.isAlive()){

        //calculating damage provided and calling takeDamage function to decrease the health of defender
        let damageProvided = Math.max(0,attackerPlayer.attackImpact() - defenderPlayer.defendImpact());
        defenderPlayer.takeDamage(damageProvided);

        console.log(`${attackerPlayer.name} attacked with a damage of ${damageProvided}`)
        console.log(`New Health: ${playerA.name} = ${playerA.health} \n ${playerB.name} = ${playerB.health} `)

        //swaping the attackplayer and the defendplayer turns
        let tempPlayerStore = attackerPlayer;
        attackerPlayer = defenderPlayer;
        defenderPlayer = tempPlayerStore;

    }

    //Declaring the winner and loser 
    if(attackerPlayer.health == 0) {
        console.log(`Game Ended: ${defenderPlayer.name} Won and ${attackerPlayer.name} Lost`)
    }else{
        console.log(`Game Ended: ${attackerPlayer.name} Won and ${defenderPlayer.name} Lost`)

    }

}

function isValidPlayerObject(player) {
    //Function to check if the player is a valid object of Player class or not
    //assumed that attack and strength of player can be zero
    return (
        player != null &&
        typeof player === 'object' &&
        typeof player.name === 'string' &&
        typeof player.health === 'number' &&
        player.health >= 0 &&
        typeof player.attack === 'number' &&
        player.attack >= 0 && 
        typeof player.strength === 'number' &&
        player.strength >= 0 &&
        typeof player.attackImpact === 'function' &&
        typeof player.defendImpact === 'function' &&
        typeof player.takeDamage === 'function' &&
        typeof player.isAlive === 'function' 
    )
}

export default fightSimulator;