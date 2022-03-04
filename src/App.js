import React, { useState } from 'react';


function App() {

  const[entries, setEntries] = useState([{weight: 175, date: '3-4-2022'}, {weight: 123, date: '3-3-2022'}])
  return (
    <div>
      <table>
        <thead>
          <th>Enter Number</th>
          <th>Weight</th>
          <th>Date</th>
        </thead>
        <tbody>
          {entries.map((entry, index) =>{ 
          return(
            <tr>
              <td>{index + 1 }</td>
              <td>{entry.weight}</td>
              <td>{entry.date}</td>
            </tr>
          )
          })}
          <tr>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
