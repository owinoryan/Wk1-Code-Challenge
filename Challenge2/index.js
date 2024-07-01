function checkSpeed() {
    let speed = prompt("Enter the car's speed :");
    speed = Number(speed);


const speedLimit = 70;
const kmPerDemeritPoint = 5

if (speed < speedLimit) {
    console.log("Ok");
} 
else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}
}
checkSpeed();





