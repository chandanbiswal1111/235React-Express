import React from 'react';

function EmployeeDetails() {

  const employees = [
    { id: 1, name: 'Scott', age: 30, department: 'Developer' },
    { id: 2, name: 'David', age: 35, department: 'Finance' },
    { id: 3, name: 'John', age: 32, department: 'Designer' },
    { id: 4, name: 'Michael', age: 25, department: 'Accountant' },
  ];

  return (
    <div>
      <h2>Employee Information</h2>
      <hr/>
      <table style={{ width:'50%',height:'50%',borderCollapse:'collapse' ,border: '2px solid blue', }}>
        <thead>
          <tr>
            <th style ={{border: '1px solid black', padding: '8px'}}> Employee ID</th>
            <th style ={{border: '1px solid black', padding: '8px'}}> Employee Name</th>

            <th style={{border: '1px solid black', padding: '8px'}}>Age</th>
            
            <th style ={{border: '1px solid black', padding: '8px' }}>Department</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate over each employee object */}
          {employees.map((employee, index) => (
            <tr key={index}>
              {/* Iterate over each property of the employee object */}
              {Object.keys(employee).map((key, index) => (
                <td key={index}>{employee[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetails;