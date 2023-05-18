import React from 'react'
import { IconGenerate } from '../ItemsExport'
import "./css/button.css"
function    GlobalTaskItem(prop) {
    return (
        <button className='d-flex align-items-center justify-content-between' style={{ backgroundColor: `rgb(${prop.btnColor})` }} type="button" onClick={
            prop.task
        }>
            <div className='d-flex align-items-center'>
                <IconGenerate iconName={prop.iconName} size="30" color="0,0,0" />
                {prop.title}
            </div>
        </button>
    )
}

export default GlobalTaskItem