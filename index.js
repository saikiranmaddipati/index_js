// Difference between call,apply and bind method

let employee={
    salary:50000,
    getSalary: function (a,b){
        console.log(this.salary);
        console.log(a,b);
    },

    greet: function (wish){
        console.log(`Hello ${this.name} ${wish}`)
    }
}

let employee1={
    salary: 30000
}

let employee2={
    salary: 40000
}

let employee3={
    salary: 80000,
    name: "saikiran"
}


employee.getSalary.call(employee1,15,20);    //call Method

employee.getSalary.apply(employee2,[25,30]);  // apply Method

let result=employee.greet.bind(employee3); //bind Method

let result1=employee.getSalary.bind(employee3);

result("good morning")

result1(30,35)