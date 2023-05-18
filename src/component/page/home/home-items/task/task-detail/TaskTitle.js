import React, { useContext } from 'react'
import { appContext } from '../../../../../context/AppContext'


function TaskTitle(prop) {

    var ctx = useContext(appContext)

    return (
        <div className='_taskTitle'>
            <p>{prop.title}</p>
            <hr></hr>
        </div>
    )
}

export default TaskTitle