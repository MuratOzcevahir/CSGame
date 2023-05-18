import React from 'react'

function TaskPriceHolder(taskPrice) {
    return (
        <div className='d-flex justify-content-end _taskPriceHolder'>
            {taskPrice.children}
        </div>
    )
}

export default TaskPriceHolder