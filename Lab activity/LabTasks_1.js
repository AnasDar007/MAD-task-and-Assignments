
/* Task Number 1
Create a function named Student with properties name and class and gpa.
Create another function that creates and return the array of 3 students.
Display the name of each student on screen.
    Task 2
  Use filter function to separate students with gpa above 3.
     */
// Solution of Task Number 1

// Object for Student information 
function student(Name, std_class, C_GPA) {
    this.Name = Name;
    this.std_class = std_class;
    this.C_GPA = C_GPA;
}

function student_Creator() {
    let std1 = new student("Mustafa Khan", 21, 2.2);
    let std2 = new student("Muhammad Waqas", 24, 3.3);
    let std3 = new student("Kashan Ali", 22, 3.1);
    let std4 = new student("Amna Tufail", 22, 3.2)
    let std5 = new student("Aliya Riaz", 23, 2.5);

    return [std1, std2, std3, std4, std5];
}

let all_Students = student_Creator();

/*Task Number 2 Solution
 Function for Filtering the students whose gpa is greater than 3 
Applying Filter function on Array and passing the function as Parameter*/
let filteredStudents = all_Students.filter(function filtering(stud) {

    return stud.C_GPA > 3;
});

console.log("All Students");
console.log(all_Students);
console.log("Filterd Students");
console.log(filteredStudents);


/*Task Number 3
  Create a Arrow function that takes Name and Display it*/

let myName = (yourName) => console.log(yourName);

myName("Muhammad Anas Dar");

/* Task Number 4
  Create a function that takes any Number of Arguments
 Separate the Even Odd Numbers 
 After Separation Devide Even Numbers by 2 and multiply Odd Numbers with 2.
 Return the object {Even[],Odd[]}

 */

let dynamicData = (...args) => {
    // 3 Arrays one for all data and two separated Arrays
    let allData = [3, 6, 4, 2, 7, 5, 9, 11, 10, 33, 44, 50, 99, 100];
    let Even = [];
    let Odd = [];

    // The Function for Seprating the Even and Odd Numbers
    // After Applying the filter on the Array

    // Functions for Filtering 

    // Function for Seprating Even Numbers
    let EvenNumbers = (number) => {
        if (number % 2 == 0) {
            return number;
        }
    };
    //Function for Seprating Odd Numbers
    let oddNumbers = (number) => {
        if (number % 2 != 0) {
            return number;
        }
    };

    // Functions for Mapping

    // Function for deviding the  Even Number by 2
    let evenNumberMap = (number) => { return number / 2; };
    // Function for multiplying Odd Number with 2
    let oddNumberMap = (number) => { return number * 2; };

    // Applying Filter on the Array

    Even = allData.filter(EvenNumbers);
    Odd = allData.filter(oddNumbers);

    // Applying map on the Arrays

    Odd = Odd.map(oddNumberMap);
    Even = Even.map(evenNumberMap);

    // Returing Object
    return { ODD: [Odd], EVEN: [Even] };
}

// Calling the function and Displaying Data
console.log(dynamicData());
