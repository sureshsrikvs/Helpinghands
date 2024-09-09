import React from 'react'
import "./Adupcomingevents.css"

const Adupcomingevents = () => {
  return (
    <div className="main-adupcomingevent">
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className='eventname'>Event Name</th>
            <th className='date'>Date</th>
            <th className='location'>Location</th>
            <th className='DESC'>Desc</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='eventname'>Charity Run</td>
            <td className='date'>2024-09-10</td>
            <td className='location'>New York City</td>
            <td className='DESC'>as</td>
            <td>asdfgh</td>
            <td><button className="table-button">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Adupcomingevents
