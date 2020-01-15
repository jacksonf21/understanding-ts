"use strict";
function addAndHandle(n1, n2, cb) {
    var newNumber = cb(n2);
    var result = n1 + newNumber;
    return result;
}
console.log(addAndHandle(3, 3, function (input) {
    return input + 5;
}));
