import React from 'react'
import digitFix from '../../../../../global-page-items/DigitFix'
function TaskDetail(prop) {

    return (
        <div id="_taskDetailHolder" className='d-flex justify-content-between px-2'>
            <span>{prop.title}</span>
            {prop.digit == 1 ?

                <span> {Number(prop.value).toLocaleString()}</span>

                :
                <span> {Number(prop.value).toLocaleString(undefined, digitFix)}</span>
            }
        </div >
    )
}

export default TaskDetail