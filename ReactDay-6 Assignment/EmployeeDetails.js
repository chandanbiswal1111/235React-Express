import React from 'react';

function EmployeeDetails() {

  const employees = [
    { id: 1, name: 'Scott', age: 30, department: 'Developer' },
    { id: 2, name: 'David', age: 35, department: 'Finance' },
    { id: 3, name: 'John', age: 32, department: 'Designer' },
    { id: 4, name: 'Michael', age: 25, department: 'Accountant' },
  ];

  const empObj = [];
  for (let employee of employees) {
    empObj.push(
      <tr>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.age}</td>
        <td>{employee.department}</td>
      </tr>
    );
  }
  return (
    <div>
      <h2>Employee Information</h2>
      <table style={{ borderCollapse: 'collapse', border: '2px solid blue' }}>
        <thead>
          <tr>
            <th  style ={{border: '1px solid black', padding: '8px'}}> Emp ID</th>
            <th  style ={{border: '1px solid black', padding: '8px'}}> Emp Name</th>
            <th  style ={{border: '1px solid black', padding: '8px'}}>Age</th>
            <th  style ={{border: '1px solid black', padding: '8px'}}>Department</th>
          </tr>
        </thead>
        <tbody>{empObj}</tbody>
      </table>
    </div>
  );
}

export default EmployeeDetails;