"use strict";

var Gauntlet = function (g) {

  g.Horde = function () {
    var _troopList = {};

    return {
      troops () {
        return _troopList;
      },
      random () {
        let enemies = Object.keys(_troopList).filter((m) => m !== "Monster");
        let random = Math.round(Math.random() * (enemies.length - 1));
        let randomTroop = _troopList[enemies[random]];
        return randomTroop;
      },
      load () {
        return new Promise((resolve, reject) => {
          $.ajax({url: "./data/horde.json"}).done((response) => {
            response.classes.forEach(($monster) => {
              var currentMonster;
              var prototypeForObject;
              var addPropertiesTo;

              if ($monster.prototype === null) { 
                prototypeForObject = g.Army.troops()["Player"].prototype;
              } else  {
                prototypeForObject = _troopList[$monster.prototype];
              };

              _troopList[$monster.id] = Object.create(prototypeForObject);
              currentMonster = _troopList[$monster.id];

              Object.keys($monster).filter((k) => k !== "prototype").forEach((property) => {
                defineProperty(currentMonster, property, $monster[property]);
              });

              // The Player.toString() method looks for a key of `species`,
              // which is stored in the `id` properties for the Horde, so 
              // create the mapping for it
              defineProperty(currentMonster, "species", $monster["id"]);

              // Create a toString() overloader to return just the class label
              // defineProperty(currentMonster, "toString", () => `${currentMonster.playerName} the ${currentMonster.id}` );
            });

            // Resolve the promise
            resolve(_troopList);

          }).fail((xhr, error, msg) => {
            console.error(msg);
          });
        });
   
      }
    }
  }();

  return g;
  
}(Gauntlet || {});
