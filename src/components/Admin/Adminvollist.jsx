import React from 'react'
import "./Adminvollist.css"

const Adminvollist = () => {
  return (
    <div className="adminvollist">
            <h2 className="vl-table-title">VOLUNTEERS LIST</h2>

      <div className="vl-table-container">
      <table className="vl-table">
        <thead>
          <tr>
            <th className='vl-th'>NAME</th>
            <th>CITY</th>
            <th>AREA</th>
            <th>EMAIL</th>
            <th>MOBILE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sss</td>
            <td>ccc</td>
            <td>www</td>
            <td>ggg</td>
            <td>999999</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Adminvollist
