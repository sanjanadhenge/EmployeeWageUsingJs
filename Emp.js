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
let empMap = new Map();
let empMapHrs = new Map();
let empDailywageandHrsArr = new Array();

while(empHrs<= Max_Hrs_InMonth && empHrs <Num_of_Workingdays)
{
    totalworkingdays++;
    let check1 =Math.floor(Math.random()*10)%3;
    empHrs +=GetWorkingHrs(check1);
    totalempHrs += empHrs;
    empDailywage.push(CalculateWage(empHrs));
    empMapHrs.set(totalworkingdays,empHrs);
    empMap.set(totalworkingdays,CalculateWage(empHrs));
    empDailywageandHrsArr.push(
        {
            dayNum:totalworkingdays,
            dailyhrs:empHrs,
            dailywage:CalculateWage(empHrs),
           toString(){
              return '\nDay '+this.dayNum+'  ----> working Hrs is '+this.dailyhrs+'  And Wage is --->'+this.dailywage
           },
        }
    );

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

//UC7C
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

//UC7E
function isAllFulltimeWage(dailywage)
{
    return dailywage.includes("160");
}
console.log("Check all Element have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));

//UC7F
function isAllParttimeWage(dailywage)
{
    return dailywage.includes("80");
}
console.log("Check all Element have part Time Wage: "+mapDaywithWageArr.some(isAllParttimeWage));


//UC7G
function TotalDaysWorked(numofDays,dailywage)
{
    if(dailywage>0) return numofDays+1;
    return numofDays; 
}
console.log("Number of Days empWorked: "+empDailywage.reduce(TotalDaysWorked,0));

//UC8
console.log(empMap);
console.log("Emp wage Map to totalhours :"+Array.from(empMap.values()).reduce(totalWages,0));

//UC9
//UC9A
const findTotal=(totalval,dailyval)=>{
    return totalval+dailyval;
}
let totalhours = Array.from(empMapHrs.values()).reduce(findTotal,0);
let totalSalary=empDailywage.filter(dailywage=>dailywage>0).reduce(findTotal,0);
console.log("Emp wage with Arrow ---->"+"Total Hours ="+ totalhours+"  Total Wages ="+totalSalary);
//UC9B
let nonWorkingDays= new Array();
let partWorkingDays= new Array();
let fullWorkingDays= new Array();
empMapHrs.forEach((value,key,map )=> {
    if(value == 8)
    {
        fullWorkingDays.push(key);
    }
   else if(value == 4)
    {
        partWorkingDays.push(key);
    }
    else
    {
        nonWorkingDays.push(key);
    }
    
})
console.log("Full working days:"+fullWorkingDays);
console.log("Parttime working days:"+partWorkingDays);
console.log("Fulltime working days:"+nonWorkingDays);

//UC10
console.log("Daily hours worked and wage --->"+ empDailywageandHrsArr);

//UC11
//UC11A
let totalwages = empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailywage>0).reduce((totalWage,dailywageandhrs)=>totalWage += dailywageandhrs.dailywage,0);
let totalhrs = empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailywage>0).reduce((totalhr,dailywageandhrs)=>totalhr += dailywageandhrs.dailywage,0);
console.log("Total Wage is ---->"+totalwages+" Total Hrs ----->"+totalhrs);
//UC11B
let d=0;
function mapDaywithWage1(dailywage)
{
    d++;
    return dailyCntr + " = "+dailywage;
}
let mapDaywage = empDailywageandHrsArr.map(mapDaywithWage1);
console.log("Daily Wage Map");
console.log(mapDaywage);

//UC11C
empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailyhrs==8).forEach(dailywageandhrs=>console.log(dailywageandhrs.toString()));
//UC11D
empDailywageandHrsArr.find(dailywageandhrs=>dailywageandhrs.dailyhrs==8).forEach(dailywageandhrs=>console.log(dailywageandhrs.toString()));
//UC11D
//UC11E
let flag1=empDailywageandHrsArr.every(dailywageandhrs=>dailywageandhrs.dailywage==160);
console.log(flag1);
//UC11F
let flag2=empDailywageandHrsArr.some(dailywageandhrs=>dailywageandhrs.dailywage==80);
console.log(flag2);
//UC11G
let totalworkedday = empDailywageandHrsArr.filter(dailywageandhrs=>dailywageandhrs.dailywage>0).reduce((numday,dailywageandhrs)=>numday += dailywageandhrs.dailywage,0);
console.log(totalworkedday);
