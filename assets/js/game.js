// this asks for user input
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// Game States
// '"WIN" - Player robot has defeated all enemy robots
//  *Fight all enemy robots
//  *Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// defining fight function
var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {

        // ask user if they want to fight this round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if user picks skip confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update in the 'enemyHealth' var
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // award player money for winning
            playerMoney = playerMoney + 20;
            // leave while loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' var
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "  health remaining "
        );
        // check our robot's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died");
            // leave while loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            // call fight function with enemy robot
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // play again
    endGame();
}
// end game function
var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they want to play again
    var playerAgainConfirm = window.confirm("Would you like to play again?");
    if(playerAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
// start game when page loads
startGame();