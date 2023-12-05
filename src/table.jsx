import React from 'react'
import './App.css'

const Table = ({data}) => {
  return (
    <table className='table-container'>
        <tbody>
        <tr>
            <th className='table-header'>First Name</th>
            <th className='table-header'>Last Name</th>
            <th className='table-header'>Gender</th>
        </tr>

        {data.map((item) =>(
            <tr key={item.id}>
                <td className='table-data'>{item.first_name}</td>
                <td className='table-data'>{item.last_name}</td>
                <td className='table-data'>{item.gender}</td>

            </tr>
        ))}
     </tbody>
    </table>
  )
}

export default Table