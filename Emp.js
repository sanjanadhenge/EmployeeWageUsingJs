//UC1
let Is_present = 1;
let check = Math.floor(Math.random()*10%2);
if (check == Is_present) {
    console.log("Employee is Present");
}
else {
    console.log("Employee is Absent");
}
//UC2
let Wage_Per_Hr = 20, Full_Day_Hr = 8, Part_Day_Hr = 4,Is_Full_Time=1,Is_Part_Time=2;
let empHrs = 0;

let check1 =  Math.floor(Math.random()*10) % 3;
switch(check1)
{
    case Is_Full_Time:
        Is_Full_Time=1;
         empHrs=Full_Day_Hr;
         break;
    case Is_Part_Time:
        Is_Part_Time=2;
        empHrs=Part_Day_Hr;
        break;
    default:
        empHrs=0;
}
let Wage = empHrs*Wage_Per_Hr;
console.log("Emp Wage "+Wage);