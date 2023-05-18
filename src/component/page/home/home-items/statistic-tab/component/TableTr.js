import React from 'react'

function TableTr(prop) {
    return (
        <tr >
            <td> {prop.title}</td>
            <td>{prop.value}</td>
        </tr>
    )
}

export default TableTr