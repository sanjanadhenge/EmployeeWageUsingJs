class EmployeeData{
    id;
    salary;
    startdate;
    gender;
   
    constructor (...Params)
    {
        this.id=Params[0];
        this.name=Params[1];
        this.salary=Params[2];
        this.gender=Params[3];
        this.startdate=Params[4]
    }
    get name(){ return this._name}
    set name(name){
        this._name=name;
    }
    tostring()
    {
        const options ={year : 'numeric',month :'long',day : 'numeric'};
        const empDate =this.startdate ===undefined? "undefined":
                        this.startdate.toLocaleDateString("en-US",options);
        return "Id = "+this.id +" , Name = "+this.name+" , Salary = "+this.salary+" , Gender = "+ this.gender+" StartDate = "+empDate;
    }
}
let employeeData =new EmployeeData(1,"Prince",30000);
console.log(employeeData.tostring());
try{
    employeeData.name="Sanjana";
}
catch{
    console.error(e);
}
let newemployeeData = new EmployeeData(1,"Terrisa",30000,"F",new Date());
console.log(newemployeeData.tostring());