//UC1
let Is_present = 1;
let check = Math.floor(Math.random()*10%2);
if (check == Is_present) {
    console.log("Employee is Present");
}
else {
    console.log("Employee is Absent");
}
//UC6
let Wage_Per_Hr = 20, Full_Day_Hr = 8, Part_Day_Hr = 4,Is_Full_Time=1,Is_Part_Time=2;
const Num_of_Workingdays =20;
const Max_Hrs_InMonth=100;
let totalworkingdays=0;
let empDailywage = new Array();
let empHrs = 0;
let totalempHrs=0;

while(empHrs<= Max_Hrs_InMonth && empHrs <Num_of_Workingdays)
{
    totalworkingdays++;
    let check1 =Math.floor(Math.random()*10)%3;
    empHrs +=GetWorkingHrs(check1);
    totalempHrs += empHrs;
    empDailywage.push(CalculateWage(empHrs));

}

let Wage = CalculateWage(totalempHrs);
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
function CalculateWage(empHrs)
{
 return empHrs*Wage_Per_Hr;
}

console.log("Total days:"+totalworkingdays+"Total Hrs "+totalempHrs+" Emp wage"+empDailywage);

//UC 7A
let totEmpWage =0;
function sum(dailywage)
{
    totEmpWage += dailywage;
}
empDailywage.forEach(sum)
console.log("Total days:"+totalworkingdays+"Total Hrs "+totalempHrs+" Emp wage"+totEmpWage);
function totalWages(totalwage,dailywage)
{
    return totalwage+dailywage;
}
console.log("Emp Wage with reduce "+empDailywage.reduce(totalWages,0));

//UC7B
let dailyCntr =0;
function mapDaywithWage(dailywage)
{
    dailyCntr++;
    return dailyCntr + " = "+dailywage;
}
let mapDaywithWageArr = empDailywage.map(mapDaywithWage);
console.log("Daily Wage Map");
console.log(mapDaywithWageArr);

//UC7D
function FullTimeWage(dailywage)
{
    return dailywage.includes("160")
}
let fullDayWageArr= mapDaywithWageArr.filter(FullTimeWage);
console.log("Daily wage filter when Fulltime wage Earned");
console.log(fullDayWageArr);

//UC7D
function FindFulltimeWage(dailywage)
{
    return dailywage.includes("160")
}
console.log("Daily wage filter when Fulltime wage Earned");
console.log(mapDaywithWageArr.find(FindFulltimeWage));