import React from 'react';
import DoctList from './DoctList';
import StudList from './StudList';
function App() {
  return (
    <>
      <h3 align="center">Welcome to React Applications</h3>
      <hr />
       <StudList/><hr/>
       <DoctList/>
    </>
  );
}

export default App;