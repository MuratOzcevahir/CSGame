import React, { useContext } from 'react'
import { appContext } from '../../../../../context/AppContext'

function SellSetting() {
    var ctx = useContext(appContext)
    return (
        <div id='_sellSettingHolder' className='d-flex justify-content-between px-2'>
            <span onClick={() => { ctx.GameObject.Resource.Coin.Detail.Autosell === true ? ctx.GameObject.Resource.Coin.Detail.Autosell = false : ctx.GameObject.Resource.Coin.Detail.Autosell = true }}
                style={
                    ctx.GameObject.Resource.Coin.Detail.Autosell === false ?
                        {}
                        :
                        { backgroundColor: "rgba(213, 213, 139, 0.827)", color: "black" }
                }
            >Autosell</span>
            <span onClick={() => { ctx.SetGameObj({ type: "WOOD", task: "_SELL_WOOD", percent: 25 }) }}>25</span>
            <span onClick={() => { ctx.SetGameObj({ type: "WOOD", task: "_SELL_WOOD", percent: 50 }) }}>50</span>
            <span onClick={() => { ctx.SetGameObj({ type: "WOOD", task: "_SELL_WOOD", percent: 75 }) }}>75</span>
        </div>
    )
}

export default SellSetting