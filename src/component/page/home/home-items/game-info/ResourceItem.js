import React from 'react'
import { IconGenerate } from '../ItemsExport'
import "./css/resource.css"
import digitFix from '../../../../global-page-items/DigitFix'
function ResourceItem(prop) {
    

    return (
        <div id='_resourceItemHolder'>

            <div className='_resource'>
                <IconGenerate iconName={prop.iconName} />
                <span> {Number(prop.resourceAmount).toLocaleString(undefined,  digitFix)} / {Number(prop.resourceStorage).toLocaleString(undefined,  digitFix)}</span>

            </div>
           
        </div>

    )
}

export default ResourceItem