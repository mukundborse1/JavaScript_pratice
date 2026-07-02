data = 45;
console.log(data);
// hoisting is working for var but not for let and const.
var data;

info = 24;
console.log(info);
// cannot access 'info' before initialization.
let info;

city = "Losvegus";
console.log(city);
// missing initializer in const declaration.
const city;