//You have been hired to write a program that will register runners for the race and give them instructions on race day.
//Early adults receive a race number at or above 1000. All others receive a number below 1000.

//Adult registrants run at 9:30 am or 11:00 am.
//Early adults run at 9:30 am.
//Late adults run at 11:00 am.


let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true
let runnerAge = 19
if (runnerAge > 18 && earlyReg === true){
  raceNumber = raceNumber + 1000
};

if (runnerAge > 18 && earlyReg === true) {
  console.log(`Your race starts at 9:30AM, ${raceNumber}`)
} else if(runnerAge > 18 && !earlyReg) {
  console.log(`Your race starts at 11:00, ${raceNumber}`)
} else if(runnerAge < 18 ) {
  console.log(`Your race starts at 12:30, ${raceNumber}`)
} else{
  console.log(`see registration desk, ${raceNumber}`)
}
