var hobbies = ["sewing", "record shopping", "roller-skating", "jogging", "reading", "listening to music"];
console.log(hobbies.length);
hobbies.push("fashion");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "swimming", "photography");
hobbies.shift();
hobbies.unshift();
console.log(hobbies);

//create array and combine arrays
var goals = ["Finish Break Into Tech by EOY", "Workout 5 times per week", "Get a raise in early 2024"];
var allTheThings = hobbies.concat(goals);
console.log(allTheThings);
console.log(allTheThings.indexOf("roller-skating"));
allTheThings.splice(3, 1);
console.log(allTheThings);

//map over an array
var plans = allTheThings.map(function(item){
    return `I can't wait to start ${item}`
});
console.log(plans);
