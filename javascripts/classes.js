"use strict";

var Gauntlet = function (g) {

  g.GuildHall = function () {
    let _professions = new Map();

    return {
      classes () {
        return _professions;
      },
      load (callBack) {
        return new Promise((resolve, reject) => {
          $.ajax({url: "./data/classes.json"}).done((response) => {
            response.classes.forEach(($class) => {
              // Define the prototype for the new profession
              let prototypeForObject = ($class.prototype === null) ? {} : _professions.get($class.prototype);

              // Create the new profession
              let profession = Object.create(prototypeForObject);

              // Add all properties from JSON definition of profession
              Object.keys($class).filter((k) => k !== "prototype").forEach((property) => {
                defineProperty(profession, property, $class[property]);
              });
              defineProperty(profession, "toString", () => $class.label);

              // Add new profession to the Map
              _professions.set($class.id, profession);
            });

            // Resolve the promise
            resolve(_professions);

          }).fail((xhr, error, msg) => {
            console.error(msg);
          });
        });
      }
    }
  }();

  return g;

}(Gauntlet || {});

