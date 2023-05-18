import React from 'react'

function TableHead(prop) {
    return (
        <thead>
            <tr className='tableHead'>
                <th colSpan="2">
                    <h4>{prop.tblhead}</h4>
                </th>
            </tr>
        </thead>
    )
}

export default TableHead