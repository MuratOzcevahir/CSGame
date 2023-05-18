import React from 'react'

function TableItems(prop) {
    var digitFix = { minimumFractionDigits: 2, maximumFractionDigits: 2 }

    return (

        <tr>
            <td>{prop.title}</td>
            <td>
                {Number(prop.value).toLocaleString(undefined, digitFix)}
            </td>
        </tr>
    )
}

export default TableItems