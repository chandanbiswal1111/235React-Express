import React from "react";
import { useState } from "react";
import axios from "axios";

function FetchEmpData() {
    let [empArray, setEmpArray] = useState([]);
    function getEmpData() {
        let url = "https://cors-anywhere.herokuapp.com/https://dummy.restapiexample.com/api/v1/employees";
        axios.get(url).then((resData) => {
            console.log(resData.data.data);
            setEmpArray(resData.data.data);
        });
    }

    let resultArray = empArray.map(item => {
        return <div key={item.id}>
                    <h4><b>Employee Id: {item.id}</b></h4>
                    <h3 style={{color: "Red"}}>Employee Name{item.employee_name}</h3>
                    <p>Salary: {item.employee_salary}</p>
                    <p>Age: {item.employee_age}</p>
                </div>
    })

    return (
        <>
            <div>
                <h2>Ajax Employee Details</h2>
                <br/>
                <input type="button"  onClick={getEmpData} value="Get Data" />
                <div>
                    {resultArray}
                </div>
            </div>
        </>
    );
}

export default FetchEmpData;