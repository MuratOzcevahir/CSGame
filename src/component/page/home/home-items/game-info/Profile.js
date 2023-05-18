import React, { useContext } from 'react'
import "./css/profile.css"
import { appContext } from '../../../../context/AppContext'
import ProfileItem from './ProfileItem'
import { Achievement, IconGenerate } from '../ItemsExport'
import PrestigePopup from './component/PrestigePopup'
import digitFix from '../../../../global-page-items/DigitFix'
function Profile(prop) {
    var ctx = useContext(appContext)
    return (
        <div id='_profileHolder' className='z-3'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div id='_coinInfo' className='d-flex flex-column align-items-start'>
                    <div>
                        <span>  {(ctx.GameObject.Resource.Coin.General.Amount).toLocaleString(undefined, digitFix)}</span>

                    </div>
                    <div>
                        <a data-bs-toggle="modal" data-bs-target="#prestige">prestige<br></br>{ctx.GameObject.Profile.Prestige}</a>

                    </div>
                </div>
                <div id='_profileInfo'>
                    <ProfileItem value={ctx.currentUser.Nickname} title="" />
                    <ProfileItem value={ctx.GameObject.Profile.Level} title="lv" />
                    <div className='text-end'>
                        {ctx.GameObject.Profile.CurrentExperiance.toLocaleString()}/{ctx.GameObject.Profile.Experiance}</div>
                    <Achievement />
                </div>
            </div>
            <PrestigePopup />
        </div>
    )
}

export default Profile