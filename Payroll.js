class EmployeeData{
    id;
    salary;
    gender;
    startdate;
    constructor (id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    get name(){ return this._name}
    set name(name){
        this._name=name;
    }
    tostring()
    {
        return "id = "+this.id +" , name = "+this.name+" , salary = "+this.salary;
    }
}
let employeeData =new EmployeeData(1,"Prince",30000);
console.log(employeeData.tostring());