import React from "react";
import { useState } from "react";

function EmployeeList() {

    const [emplsArray, setEmplsArray] = useState([]);
    const [editingEmpl, setEditingEmpl] = useState(null);

    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");


    function getEmplsButton_click() {
        let tempArray = [
            { empno: 101, ename: "Mark", job: "Accountant",sal:"25000",deptno:10 },
            { empno: 102, ename: "Anderson", job: "Manager",sal:"75000",deptno:20 },
            { empno: 103, ename: "Peter", job: "Tester",sal:"35000",deptno:30 },
            { empno: 104, ename: "Lucas", job: "Developer",sal:"40000",deptno:40 },
        ];

        setEmplsArray(tempArray);
    }

    function addEmplButton_click() {

        let tempArray = [...emplsArray];       
        
        let emplObj = {};
        emplObj.empno = empno;
        emplObj.ename = ename;
        emplObj.job = job;
        emplObj.sal = sal;
        emplObj.deptno = deptno;
        tempArray.push(emplObj);        

        setEmplsArray(tempArray);


        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");


    }


    function deleteEmpl_click(eno) {

        let tempArray = [...emplsArray];    // cloning original array into temp array
        let index = tempArray.findIndex(item => item.empno == eno);
        tempArray.splice(index, 1);
        setEmplsArray(tempArray);
    }
    function editEmpl_click(empl) {
        setEditingEmpl(empl);
        setEmpno(empl.empno);
        setEname(empl.ename);
        setJob(empl.job);
        setSal(empl.sal);
        setDeptno(empl.deptno);
    }

    function updateEmplButton_click() {
        let tempArray = [...emplsArray];
        let index = tempArray.findIndex(item => item.empno === editingEmpl.empno);

        if (index !== -1) {
            tempArray[index].empno = empno;
            tempArray[index].ename = ename;
            tempArray[index].job = job;
            tempArray[index].sal = sal;
            tempArray[index].deptno = deptno;

            setEmplsArray(tempArray);
            setEditingEmpl(null);

            // Clear input fields after updating
            setEmpno("");
            setEname("");
            setJob("");
            setSal("");
            setDeptno("");
        }
    }


    let resultArray1 = emplsArray.map((item) => {
        return <tr>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td><a href="javascript:void(0);" onClick={() => editEmpl_click(item)}>Edit</a>
            </td>
            <td>
                <a href="javascript:void(0);" 
                   onClick={() => deleteEmpl_click(item.empno)}>Delete</a>
            </td>
        </tr>
    });

    return (
        <>
            <h3>Working with State -- CRUD Operations on Array of Objects</h3>
            <hr />

            <input type="text" placeholder="Employee Number" value={empno} onChange={ (e) => setEmpno(e.target.value)} />
            <input type="text" placeholder="Employee Name" value={ename} onChange={ (e) => setEname(e.target.value)} />
            <input type="text" placeholder="Empl Job" value={job} onChange={ (e) => setJob(e.target.value)} />
            <input type="text" placeholder="Employee Salary" value={sal} onChange={ (e) => setSal(e.target.value)} />
            <input type="text" placeholder="Employee Deptno" value={deptno} onChange={ (e) => setDeptno(e.target.value)} />
            <hr/>
            <input type="button" onClick={getEmplsButton_click} value="Get Empls" />
            <input type="button" onClick={addEmplButton_click} value="Add Employee" />
            <input type="button" onClick={updateEmplButton_click} value="Update Empl" />
            <hr />

            <table border="2" width="400" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Empl Job</th>
                    <th>Salary</th>
                    <th>Dept Number</th>
                    <th></th>
                    <th></th>
                </tr>
                {resultArray1}
            </table>
        </>
    );
}

export default EmployeeList;