import React from 'react'

export default function ListDemo2() {
    let employees = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
        { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
    ];

    let columnNames= Object.keys(employees[0])
    return <>
        <h2 className='text-center'>Employee List</h2>
        <table className='table table-bordered table-striped'>

            <thead>
               <tr>
                {columnNames.map((clmname,ind)=>{
                    return <th key={ind}>{clmname}</th>
                })}
               </tr>
            </thead>
            <tbody>

                {employees.map((emp) => {
                    return <tr key={emp.eId}>
                        <td>{emp.eId}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                        <td>{emp.gender}</td>
                    </tr>
                })}

            </tbody>
        </table>
    </>
}
