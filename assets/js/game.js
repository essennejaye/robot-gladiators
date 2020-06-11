
// defining fight function
var fight = function (enemy) {
    while (enemy.health > 0 && playerInfo.health > 0) {

        // ask user if they want to fight this round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if user picks skip confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining "
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
            // leave while loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // generate random number damage value based on enemy attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack)
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + "  health remaining "
        );
        // check our robot's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died");
            // leave while loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
}
var startGame = function () {
    // reset player stats
    playerInfo.reset();
    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);

            // call fight function with enemy robot
            fight(pickedEnemyObj);
            // if we are not at last enemy in array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

                // ask if user wants to shop
                var storeConfirm = window.prompt("The fight is over, you have " + playerInfo.money + " player money visit the store before the next round?");
                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // play again
    endGame();
}
// end game function
var endGame = function () {
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they want to play again
    var playerAgainConfirm = window.confirm("Would you like to play again?");
    if (playerAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE": // new case
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE": // new case
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
}
// function to generate a random number
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}
// this asks for user input and defines player object
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money");
        }
    }
}
// this defines enemy object
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// start game when page loads
startGame();