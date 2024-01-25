import axios from 'axios';
import React, { useState } from 'react';

function AjaxDemo2() {   

   const [usersArray, setUsersArray] = useState([]);

  function getDataButton_click() {

      let url = "https://reqres.in/api/users";
      axios.get(url).then( (resData) => 
      {
        console.log(resData.data.data);
        setUsersArray(resData.data.data);
      });
  }

  let resultArray = usersArray.map(item => 
    {
      return <tr>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
      </tr>;
    });


  return (
    <div style={{"padding":"5px"}}> 

      <h3>AJAX Programming in React JS using Axios Package</h3>
      <hr/>


      <input type="button" onClick={getDataButton_click} 
               value="Get Data" />

      <hr/>

      <table  border="2" cellSpacing="0" width="500">
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th> First Name</th>
            <th> Last Name</th>
          </tr>
          {resultArray} 
      </table>         

    </div>
  );
}

export default AjaxDemo2;