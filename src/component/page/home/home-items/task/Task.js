import React, { useContext } from 'react'
import "./css/task.css"
import People from './people/People'
import Wood from './wood/Wood'
import Food from './food/Food'
function Task() {

    return (
        <div id='_taskHolder' className="container mt-2">
            <div className='d-flex justify-content-start'>
                <div className='row'>
                    <div className='col-12 col-lg-3'>
                        <Wood />
                    </div>
                     <div className='col-12 col-lg-3'>
                        <Food />
                    </div>
              
                    <div className='col-12 col-lg-3'>
                        <People />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task