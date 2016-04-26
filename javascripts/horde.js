"use strict";

var Gauntlet = function (g) {

  g.Horde = function () {
    let _battalion = new Map();

    return {
      soldier (type) {
        let soldier = Object.create(_battalion.get(type));
        return soldier;
      },
      random () {
        let enemies = [];
        for (let key of _battalion.keys()) {
          // Monster is the base class. Don't want to create instances of it.
          if (key !== "Monster") {
            enemies.push(key);
          }
        }
        let randomPosition = Math.round(Math.random() * (enemies.length - 1));
        let randomSoldier = _battalion.get(enemies[randomPosition]);
        let returnObject = Object.create(randomSoldier);
        return returnObject;
      },
      load () {
        return new Promise((resolve, reject) => {
          let _platoon = new Map();

          $.ajax({url: "./data/horde.json"}).done((response) => {
            response.classes.forEach(($monster) => {
              let prototypeForObject;

              // The base monster will always have Player as its prototype
              if ($monster.prototype === null) {
                prototypeForObject = g.Army.troops()["Player"].prototype;
              } else  {
                prototypeForObject = _battalion.get($monster.prototype);
              };

              let monsterForMap = Object.create(prototypeForObject);
              Object.keys($monster).filter((k) => k !== "prototype").forEach((property) => {
                defineProperty(monsterForMap, property, $monster[property]);
              });
              defineProperty(monsterForMap, "species", $monster["id"]);

              _battalion.set($monster.id, monsterForMap);
            });

            // Resolve the promise
            resolve(_battalion);

          }).fail((xhr, error, msg) => {
            console.error(msg);
          });
        });
      }
    }
  }();

  return g;

}(Gauntlet || {});
