/**
 * 
 */

var human = {
	name : "김상형",
	age : 29
};
var json = JSON.stringify(human);
console.log(json);

var human2 = JSON.parse(json);
console.log("name = " + human2.name);
console.log("age = " + human2.age);