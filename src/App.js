import React, { useState } from 'react';
import DisplayEntries from './Components.jsx/DisplayEntries/DisplayEntries';
import AddEntryFrom from './Components.jsx/AddEntry.jsx/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '2022-03-01'}, {weight: 123, date: '2022-03-03'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries)
  }  
  
  return (
    <div>
      <DisplayEntries parentEntries={entries}/> 
      <AddEntryFrom addNewEntryProperty={addNewEntry}/>

    </div>
  );
}

export default App;
