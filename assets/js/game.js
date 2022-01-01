var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function begins
var fight = function (enemyName) {
  // repeat and execute as long as robot is alive
  while (enemyHealth > 0) {
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player choses to fight, then fight
    if (promptFight === 'fight' || promptFight === 'FIGHT') {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          ' attacked ' +
          enemyName +
          '. ' +
          enemyName +
          ' now has ' +
          enemyHealth +
          ' health remaining.'
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          ' attacked ' +
          playerName +
          '. ' +
          playerName +
          ' now has ' +
          playerHealth +
          ' health remaining.'
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
      } else {
        window.alert(
          playerName + ' still has ' + playerHealth + ' health left.'
        );
      }
      // if player chooses to skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
      // confirmation of the skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip?");
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from player as punishment for skip
        playerMoney = playerMoney - 2;
      }
      // if no, ask again by running fight() again
      else {
        fight();
      }
      // if player did not choose 1 or 2
    } else {
      window.alert('You need to choose a valid option. Try again!');
    }
  }
};
// end of fight function ^

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
