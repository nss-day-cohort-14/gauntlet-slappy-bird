"use strict";

var Gauntlet = function (g) {

  g.GuildHall = function () {
    var _classes = {};

    return {
      classes () {
        return _classes;
      },
      load (callBack) {
        return new Promise((resolve, reject) => {
          $.ajax({url: "./data/classes.json"}).done((response) => {
            response.classes.forEach(($class) => {
              var currentClass;
              var prototypeForObject = ($class.prototype === null) ? null : _classes[$class.prototype].prototype;
              var addPropertiesTo;

              _classes[$class.id] = Object.create(prototypeForObject);
              currentClass = _classes[$class.id];
              currentClass.prototype = {};

              addPropertiesTo = ($class.prototype === null) ? currentClass.prototype : currentClass;


              Object.keys($class).forEach((property) => {
                defineProperty(currentClass.prototype, property, $class[property]);
              });

              // Create a toString() overloader to return just the class label
              defineProperty(currentClass, "toString", ()=> {return $class.label;});

            });

            // Resolve the promise
            resolve(_classes);

          }).fail((xhr, error, msg) => {
            console.error(msg);
          });
        });
      }
    }
  }();

  return g;
  
}(Gauntlet || {});

