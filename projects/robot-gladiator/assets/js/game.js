// this creates a function named "fight"
var playername = window.prompt("What is your robot's name?");
// note the lack of quotation marks around playername
window.alert(playername);
function fight(){
    window.alert("The fight has begun!");
    console.log(playername);
    console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
    console.log(10 + 10);
// what is this?
    console.log("Our robot's name is " + playername);
}
fight()
var name = "your name";
console.log(name);