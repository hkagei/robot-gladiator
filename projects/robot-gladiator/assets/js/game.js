// this creates a function named "fight"
var playername = window.prompt("What is your robot's name?");
// note the lack of quotation marks around playername
window.alert(playername);
function fight(){
    window.alert("The fight has begun!");
    console.log(playername);
}
fight()