import React, { useState } from 'react';
import DisplayEntries from './Components.jsx/DisplayEntries/DisplayEntries';

function App() {

  const[entries, setEntries] = useState([{weight: 175, date: '3-4-2022'}, {weight: 123, date: '3-3-2022'}])
  
  return (
    <div>
      <DisplayEntries parentEntries={entries}/> 
    </div>
  );
}

export default App;
