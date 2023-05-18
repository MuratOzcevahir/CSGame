import React from 'react'
import { IconGenerate } from '../../ItemsExport'

function TaskPrice(prop) {
    return (
        <div className='  mt-1 px-1'>
            <div className='d-flex align-items-center '>
                <IconGenerate iconName={prop.iconName} size="20" color="255,255,200"/>
                <span style={
                    prop.currentValue >= prop.value ?
                    {
                        color:"rgb(103, 193, 41)"
                    }
                    :
                    {
                        color:"rgb(182, 40, 49)"
                    }
                    }> {prop.value}</span>
            </div>
        </div>

    )
}

export default TaskPrice