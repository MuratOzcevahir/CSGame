import React from 'react'
import "./css/setting-tab.css"
import DevelopedBy from './component/DevelopedBy';
import Screen from './component/Screen';
import ProfileSetting from './component/ProfileSetting';
import BugReport from './component/BugReport';

function SettingTab() {

    return (
        <div id='_settingTab' className='mt-2 p-3'>
            <Screen />
            <hr></hr>
            <ProfileSetting />
            <hr></hr>
            <DevelopedBy />      
                 <hr></hr>
            <BugReport />
        </div>
    )
}

export default SettingTab