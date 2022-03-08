import React, { useState } from 'react';
import DisplayEntries from './Components.jsx/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components.jsx/AddEntry.jsx/AddEntryForm';
import EntriesChartTracker from './Components.jsx/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '2022-03-01'}, {weight: 123, date: '2022-03-03'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }  
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} /> 
          </div>
          <div className='border-box'>
            <AddEntryForm addNewEntry={addNewEntry} /> 
          </div>
        </div>
    
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
