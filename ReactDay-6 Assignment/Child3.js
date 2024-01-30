import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { userDetailsContext } from '../App';


function Child3(props) {     
    
  var  usersArray  = useContext(userDetailsContext);
 
  return <div style={{margin:"10px", border:"2px solid Red"}}>  
          <h3>This is  Child3 Component</h3>       
          <hr/>
          <ul>
            {usersArray.map((user,index) =>(
                <li key={index}>{user}</li>
            ))}
          </ul>
          

        </div>;
}

export default Child3;