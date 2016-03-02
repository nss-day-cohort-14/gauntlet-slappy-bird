"use strict";

var Gauntlet = function (g) {

  let Monster = Object.create(null);
  Monster.prototype = {
    init() {
      this.playerName = name || "Grax";
      this.health = this.health + 30;
      this.intelligence -= 50;
      this.strength += 30;
    }
  };

  g.Horde = function () {
    var _troopList = {};

    return {
      troops () {
        return _troopList;
      },
      load () {

        return new Promise((resolve, reject) => {
          $.ajax({url: "./data/horde.json"}).done((response) => {
            response.classes.forEach(($monster) => {
              var currentMonster;
              var prototypeForObject = ($monster.prototype === null) ? null : _troopList[$monster.prototype].prototype;
              var addPropertiesTo;

              _troopList[$monster.id] = Object.create(prototypeForObject);
              currentMonster = _troopList[$monster.id];
              currentMonster.prototype = {};

              addPropertiesTo = ($monster.prototype === null) ? currentMonster.prototype : currentMonster;
              console.log("addPropertiesTo", addPropertiesTo);


              Object.keys($monster).filter((k) => k !== "prototype").forEach((property) => {
                defineProperty(addPropertiesTo, property, $monster[property]);
              });

              // Create a toString() overloader to return just the class label
              defineProperty(currentMonster, "toString", ()=> {return $monster.id;});

            });

            // Resolve the promise
            console.log("_troopList", _troopList);
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
