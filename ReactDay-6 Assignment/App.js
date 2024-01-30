import React, { useState } from 'react';
import Child1 from './Components/Child1';


 
export var userDetailsContext  = React.createContext(null);


function App(){

  let [usersArray, setUsersArray] = useState([ 'Chandan','Sameer','Jadhav']
  );
   
    return (
      <div style={{margin:"10px", border:"2px solid Blue"}}>  
        <h3>This is the Parent Component</h3>    
        <hr/>
        <userDetailsContext.Provider  value={usersArray}>
            <Child1/>
        </userDetailsContext.Provider>  
          
      </div>
    );   
}

export default App;