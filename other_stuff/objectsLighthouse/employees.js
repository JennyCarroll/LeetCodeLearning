class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  //link up the nodes by adding an employee to the subordinates array of its boss and set its boss:
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
  // If we call this method on ada, the algorithm will traverse through the entire company using recursion
  // method to find every single employee under Ada, that makes over amount a year
  employeesThatMakeOver(amount) {
    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }
    //recursive case is that we still have subordinates
    //base case is if there are no more subordinates
    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver =
        subordinate.employeesThatMakeOver(amount); // 3
      //employees will be equal to the result of line 44 once we get to the base case and it starts going backwards
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  // method that will count the total number of employees under a certain employee,
  // including that employee. This will let us calculate the total number of people in a certain department.
  //   For example, if we called this method on Craig, the total would be 5:
  // 2 direct subordinates (Simone, Ali) +
  // 2 indirect subordinates (Sarah, Andrew) +
  // Craig
  get totalEmployees() {
    let totalEmployees = 1; // 1
    for (const subordinate of this.subordinates) {
      totalEmployees += subordinate.totalEmployees;
    }
    return totalEmployees;
  }
}

//create the root node
const ada = new Employee("Ada", "CEO", 3000000.0);

//create employees
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

//link the emloyee nodes to the CEO
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
// console.log(ada);
// console.log(craig);
// console.log(craig.numberOfPeopleToCEO);
// console.log(craig.boss);
// console.log(craig.numberOfSubordinates);
// let wealthyEmployees = ada.employeesThatMakeOver(418401);
// console.log(wealthyEmployees);
console.log(ada.totalEmployees); // Returns the total number of employees in the entire company.
console.log(craig.totalEmployees); // Returns the total number of employees working in software development.
