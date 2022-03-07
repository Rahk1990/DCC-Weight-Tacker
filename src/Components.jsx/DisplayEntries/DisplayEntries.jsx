
const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
          <th>Enter Number</th>
          <th>Weight</th>
          <th>Date</th>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) => { 
          return (
            <tr key={index}>
                <td>{index + 1 }</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
            </tr>
            );
          })}
          <tr>

          </tr>
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;