// Employee data (array of employee objects)
const employees = [
    { name: "Alice", age: 28, department: "HR", salary: 55000 },
    { name: "Bob", age: 35, department: "Engineering", salary: 75000 },
    { name: "Charlie", age: 30, department: "Marketing", salary: 50000 },
    { name: "David", age: 40, department: "Engineering", salary: 90000 },
    { name: "Eve", age: 25, department: "HR", salary: 60000 }
  ];
  
  // Load and display employee data on page load
  document.addEventListener("DOMContentLoaded", () => {
    displayEmployees(employees);
  });
  
  // Function to display employees
  function displayEmployees(employeeList) {
    const employeeListElement = document.getElementById("employees");
    employeeListElement.innerHTML = ""; // Clear current list
  
    employeeList.forEach(employee => {
      const employeeItem = document.createElement("li");
      employeeItem.textContent = `${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: $${employee.salary}`;
      employeeListElement.appendChild(employeeItem);
    });
  }
  
  // Calculate Average Salary
  function calculateAverageSalary() {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    const averageSalary = (totalSalary / employees.length).toFixed(2);
  
    document.getElementById("average-salary").textContent = `Average Salary: $${averageSalary}`;
  }
  
  // Find Employees by Department
  function findEmployeesByDepartment() {
    const department = document.getElementById("department-name").value.trim();
  
    const filteredEmployees = employees.filter(employee => employee.department.toLowerCase() === department.toLowerCase());
  
    const departmentEmployeesElement = document.getElementById("department-employees");
    departmentEmployeesElement.innerHTML = ""; // Clear previous results
  
    if (filteredEmployees.length > 0) {
      filteredEmployees.forEach(employee => {
        const employeeItem = document.createElement("li");
        employeeItem.textContent = `${employee.name}, Age: ${employee.age}, Salary: $${employee.salary}`;
        departmentEmployeesElement.appendChild(employeeItem);
      });
    } else {
      departmentEmployeesElement.textContent = "No employees found in this department.";
    }
  }
  
  // Increase Salary
  function increaseSalary() {
    const percentage = parseFloat(document.getElementById("salary-percentage").value);
  
    if (isNaN(percentage) || percentage <= 0) {
      alert("Please enter a valid percentage.");
      return;
    }
  
    employees.forEach(employee => {
      employee.salary += (employee.salary * (percentage / 100));
    });
  
    displayEmployees(employees);
    alert(`Salaries increased by ${percentage}%`);
  }
  
  // Sort Employees by Age
  function sortEmployeesByAge() {
    const sortedEmployees = [...employees].sort((a, b) => a.age - b.age);
  
    const sortedEmployeesElement = document.getElementById("sorted-employees");
    sortedEmployeesElement.innerHTML = ""; // Clear previous results
  
    sortedEmployees.forEach(employee => {
      const employeeItem = document.createElement("li");
      employeeItem.textContent = `${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: $${employee.salary}`;
      sortedEmployeesElement.appendChild(employeeItem);
    });
  }
  