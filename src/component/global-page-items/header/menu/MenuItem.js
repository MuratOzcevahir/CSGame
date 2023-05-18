import React from 'react'
import { Link } from 'react-router-dom'
function MenuItem(prop) {
    return (
        <>

            <li><Link to={prop.toLink}>{prop.title} </Link></li>
        </>
    )
}

export default MenuItem