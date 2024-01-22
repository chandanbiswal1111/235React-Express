import React from "react";
function DoctList() {
    
    let doctorsArray = [
        { doctorID: 10, docname: "Peter",designation:"Pediatric",experience:"5-years",contactno:6370012334  },
        { doctorID: 20, docname: "George",designation:"Neurology",experience:"9-years",contactno:6370012345  },
        { doctorID: 30, docname: "Steven",designation:"Cardialogy",experience:"8-years",contactno:6370012327  },
        { doctorID: 40, docname: "Smith",designation:"Surgeon",experience:"7-years",contactno:6370012389  },
    ];

    let result = doctorsArray.map((item) => {
        return <tr>
            <td>   {item.doctorID}  </td>
            <td>   {item.docname}  </td>
            <td>   {item.designation}  </td>
            <td>   {item.experience}  </td>
            <td>   {item.contactno}  </td>
        </tr>
    });

    return (
        <>
            <h2>List of Doctors</h2>
            <table border="2" width="400" cellspacing="0" cellpadding="5" >
                <tr>
                    <th>Doctor ID</th>
                    <th>Doc Name</th>
                    <th>Designation</th>
                    <th>Experience</th>
                    <th>ContactNo</th>
                </tr>
                {result}
            </table>
        </>
    );
}

export default DoctList;