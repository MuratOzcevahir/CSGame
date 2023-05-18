import React from 'react'
import SettingGrid from './SettingGrid'
import SettingTitle from './SettingTitle'

function ProfileSetting() {
    return (
        <div id="_profileSetting">
            <div className='row'>
                <SettingGrid col="3" >
                    <SettingTitle title="Profile" />
                </SettingGrid>
                <SettingGrid col="9" >
                    <div className='row'>
                        <div className='col-12 col-lg-4'>
                            <div className='d-flex flex-column'>
                                <label className='form-label'>Profile name</label>
                                <input className='' type='text' />
                                <button type="button">Save</button>
                            </div>
                        </div>
                        <div className='col-12 col-lg-8'>
                            <div className='w-100 d-flex flex-column'>
                                <label className='form-label'>Change password</label>
                                <div className='d-flex  justify-content-between'>
                                    <label>Old password</label>
                                    <input className='' type='text' />
                                </div>
                                <div className='d-flex  justify-content-between'>
                                    <label>New password</label>
                                    <input className='' type='text' />
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <label>New password</label>
                                    <input className='' type='text' />
                                </div>
                                <button type="button">Save</button>
                            </div>
                        </div>
                    </div>
                </SettingGrid>

            </div>
        </div>
    )
}

export default ProfileSetting