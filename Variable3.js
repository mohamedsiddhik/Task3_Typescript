"use strict";
//Number
exports.__esModule = true;
exports.Person = void 0;
var first = 45;
var second = 0x24B;
var third = 587;
var fourth = 587;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
// String
var empName = 'Mohamed';
var empDept = 'IT';
var empRole = 'Front-end Developer';
console.log(empName);
console.log(empDept);
console.log(empRole);
var fullDetails = empName + " is worked on " + empRole + " role in 3 months in " + empDept + " Department";
console.log(fullDetails);
//Boolean
var a = 5;
var b = 10;
console.log(a < b);
console.log(a > b);
console.log(a === b);
console.log(a !== b);
console.log(a < b && a > b);
console.log(a < b || a > b);
//Void 
function Warning() {
    console.log("This is a Warning Message");
}
// Null
var value3 = null;
value3 = 'hello';
value3 = undefined;
//Any
var val = 'h1';
val = 150;
console.log(val);
val = true;
console.log(val);
function myfunction2(a, b) {
    console.log(a + b);
}
myfunction2(20, 30);
myfunction2("hi ", " Welcome");
//User
//defined
//Array
//Type 1
var fruits1 = ['banana', 'orange', 'apple'];
console.log(fruits1);
//Type 2
var fruits2;
fruits2 = ['banana', 'orange', 'apple'];
console.log(fruits2);
//Multi-Dimensional Array
var fruits3 = ['apple', 100, 'orange', 50];
console.log(fruits3);
var fruits4;
fruits4 = ['Guava', 30, 'grape', '40'];
console.log(fruits4);
//Accessing Array Element
var fruits5 = ['pear', 'fig', 'apricot', 'rambutan'];
console.log(fruits5[0]);
console.log(fruits5[1]);
console.log(fruits5[2]);
console.log(fruits5[3]);
console.log(fruits5[4]);
//For loop
for (var i = 0; i < fruits5.length; i++) {
    console.log(fruits5[i]);
}
// Class
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.dept);
    };
    return Employee;
}());
var emp = new Employee;
emp.eid = 101;
emp.ename = 'MOHAMED';
emp.dept = 'IT';
emp.display();
// Tuple
var Employee2 = [110, 'Siddhik', 'SW'];
console.log(Employee2);
//enum 
var Cards;
(function (Cards) {
    Cards[Cards["Club"] = 0] = "Club";
    Cards[Cards["Heart"] = 1] = "Heart";
    Cards[Cards["Spade"] = 2] = "Spade";
    Cards[Cards["Diamond"] = 3] = "Diamond";
})(Cards || (Cards = {}));
function displayCards(cards) {
    switch (cards) {
        case Cards.Club:
            console.log("Club");
            break;
        case Cards.Heart:
            console.log("Heart");
            break;
        case Cards.Spade:
            console.log("Spade");
            break;
        case Cards.Diamond:
            console.log("Diamond");
            break;
    }
}
displayCards(Cards.Heart);
// Any
var data = ['hello', 123, false];
console.log(data);
//instanceof
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var p = new Person();
p.name = 'john';
p.age = 15;
p.newLearner = true;
console.log(p instanceof Person);
console.log(typeof p);
console.log(typeof p.name);
console.log(typeof p.age);
console.log(typeof p.newLearner);
