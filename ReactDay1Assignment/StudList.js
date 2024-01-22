import React from "react";

function StudList() {
  let sid = 16835;
  let sname = "Chandan Biswal";
  let course = "Mathematics";
  let age = 25;
  let total = 460;
  return (
    <div>
      <h1>Student Information</h1>
      <table border="2" width="400" cellspacing="0" cellpadding="5" >
        <tr>
          <th>StudentId</th>
          <th>Student Name</th>
          <th>Course</th>
          <th>Age</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{sid}</td>
          <td>{sname}</td>
          <td>{course}</td>
          <td>{age}</td>
          <td>{total}</td>
        </tr>
      </table>
    </div>
  );
}

export default StudList;