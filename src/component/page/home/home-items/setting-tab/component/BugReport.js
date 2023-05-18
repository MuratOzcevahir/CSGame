import React from 'react'
import { IconGenerate } from '../../ItemsExport'
import SettingGrid from './SettingGrid'
import SettingTitle from './SettingTitle'

function BugReport() {
    return (
        <div>


            <div id="_bugReportHolder">
                <div className='row'>
                    <SettingGrid col="3" >
                        <SettingTitle title="Bug Report" />
                    </SettingGrid>
                    <SettingGrid col="9" >
                        <div className='d-flex flex-column w-100' >
                            <span className='d-flex align-items-center'>
                                <span>
                                    if you noticed any
                                </span>
                                <IconGenerate iconName="bug_report" size="45" color="255, 255, 26" />

                                <span> , report here </span>
                            </span>
                            <div className='d-flex flex-column'>
                                <input className='' type='text' placeholder='Your message' />
                                <button type="button">Save</button>
                            </div>
                        </div>
                    </SettingGrid>

                </div>
            </div>

        </div>
    )
}

export default BugReport