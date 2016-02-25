"use strict";

var defineProperty = function(obj, name, value) {  
  Object.defineProperty(obj, name, {  
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
