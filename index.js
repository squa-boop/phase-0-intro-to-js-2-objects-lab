// Write your solution in this file!

const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; 
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(updatedEmployee); 

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30);
console.log(employee); 

const newEmployeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log(newEmployeeWithoutAddress); 

destructivelyDeleteFromEmployeeByKey(employee, 'age');
console.log(employee); 

