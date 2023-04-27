//UC1
let Is_present = 1;
let check = Math.floor(Math.random()*10%2);
if (check == Is_present) {
    console.log("Employee is Present");
}
else {
    console.log("Employee is Absent");
}
//UC5
let Wage_Per_Hr = 20, Full_Day_Hr = 8, Part_Day_Hr = 4,Is_Full_Time=1,Is_Part_Time=2;
const Num_of_Workingdays =20;
const Max_Hrs_InMonth=100;
let totalworkingdays=0;
let empHrs = 0;
while(empHrs<= Max_Hrs_InMonth && empHrs <Num_of_Workingdays)
{
    totalworkingdays++;
    let check1 =Math.floor(Math.random()*10)%3;
    empHrs +=GetWorkingHrs(check1);
}

let Wage = empHrs*Wage_Per_Hr;
console.log("Emp Wage "+Wage);
function GetWorkingHrs(check1)
{
    switch(check1)
    {
        case Is_Full_Time:
           return Full_Day_Hr;
             break;
        case Is_Part_Time:
            return Part_Day_Hr;
            break;
        default:
            return 0;
    }
}