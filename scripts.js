// Write your JavaScript code here.
// Remember to pay attention to page loading!
function takeoff() {
    var confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmation == true) {
        shuttleBackground.style.backgroundColor = "blue";
        flightStatus.innerHTML = "Shuttle in flight.";
        spaceShuttleHeight.innerHTML = "10000";
    }
}

function landing() {
    alert("The shuttle is landing. Landing gear engaged.");
    {
        shuttleBackground.style.backgroundColor = "green";
        flightStatus.innerHTML = "The shuttle has landed.";
        spaceShuttleHeight.innerHTML = "0";
    }
}

function missionAbort() {
    var abort = confirm("The shuttle is landing. Landing gear engaged.");
    if (abort == true) {
        shuttleBackground.style.backgroundColor = "green";
        flightStatus.innerHTML = "Mission aborted.";
        spaceShuttleHeight.innerHTML = "0";
    }
}

function up() {
    var height = document.getElementById("spaceShuttleHeight").innerHTML;
    var up = +height + 10000;
    spaceShuttleHeight.innerHTML = up;
}

function down() {
    var height = document.getElementById("spaceShuttleHeight").innerHTML;
    height -= 10000;
    spaceShuttleHeight.innerHTML = height;
}

function right() {
    var right = document.getElementById("rocket").style.margin;
    var move = +right + 10;
    document.getElementById("rocket").style.margin = +move + "px";
}

function left() {
    rocket.style.width -= "10";
}