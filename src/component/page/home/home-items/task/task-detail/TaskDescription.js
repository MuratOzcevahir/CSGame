import React from 'react'
import { IconGenerate } from '../../ItemsExport'

function TaskDescription(prop) {
    return (
        <div id='_taskDescriptionHolder'>
            <hr></hr>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <IconGenerate iconName="question_mark" color="102, 102, 255" />
                </div>
                <h6>{prop.description}</h6>
            </div>

        </div>
    )
}

export default TaskDescription