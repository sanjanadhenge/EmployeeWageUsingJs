class EmployeeData{
    id;
    salary;
    gender;
    startdate;

    constructor (...Params)
    {
        this.id=Params[0];
        this.name=Params[1];
        this.salary=Params[2];
        this.gender=Params[3];
        this.startdate=Params[4]
    }
    get id(){ return this._id}
    set id(id){
        let idRegex = RegExp('^[1-9]{1}$');
        if(idRegex.test(id))
        {
            this._id=id;
        }
        else
        {
                throw 'Id is Incorrect !';
        }
    }
    get salary(){return this._salary}
    set salary(salary){
        if(salary>0)
        {
            this._salary = salary;
        }
        else throw 'Salary is Incorrect !';
    }
    get gender(){ return this.gender;}
    set gender(gender){
        let genderRegex = RegExp('^[M?||F?]$');
        if(genderRegex.test(gender))
        {
            this.gender=gender;
        }
        else throw 'Incorrect';
       
    }
    get name(){ return this._name}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        {
            this._name=name;
        }
        else throw 'Name is Incorrect !';
       
    }
    get startdate(){ return this._startdate}
    set startdate(startdate){
        let ms = Date.now();
        if(startdate<=ms)
        {
            this._startdate=startdate;
        }
        else throw 'Date is Incorrect !';
       
    }
   
    tostring()
    {
        const options ={year : 'numeric',month :'long',day : 'numeric'};
        const empDate =this.startdate ===undefined? "undefined":
                        this.startdate.toLocaleDateString("en-US",options);
        return "Id = "+this.id +" , Name = "+this.name+" , Salary = "+this.salary+" , Gender = "+ this.gender+" StartDate = "+empDate;
    }
}
try{
    let employeeData =new EmployeeData(1,"Prince",30000,"M",new Date());
    console.log(employeeData.tostring());
    let newemployeeData = new EmployeeData(2,"Terrisa",30000,"F",new Date());
     console.log(newemployeeData.tostring());
       
}
catch{
    console.error(e);
}


