// this asks for user input
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//logging multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // alert users they are starting the round
    window.alert("Welcome to Robot Gladiators");

    // ask user if they want to fight this round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update in the 'enemyHealth' var
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
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
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chooses to skip
    } 
    else if (promptFight === "skip" || promptFight === "FIGHT") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney - playerMoney - 2
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need to pick a valid option. Try again!");
    }
}

fight();