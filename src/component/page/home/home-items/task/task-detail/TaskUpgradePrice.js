import React from 'react'
import { IconGenerate } from '../../ItemsExport'
import digitFix from '../../../../../global-page-items/DigitFix'

function TaskUpgradePrice(prop) {
    return (
        <div id='_taskUpgradePriceHolder' >

            <button onClick={
                prop.itemUpgrade 
            } type="button" className='d-flex justify-content-center align-items-center'>

                <span>upgrade </span>(
                <IconGenerate iconName="local_atm" size="17" color="216,190,20" />
                <span style={
                    prop.currentCoin >= prop.upgradeCoinPrice ?
                        { color: "rgb(103, 193, 41)" }
                        :
                        { color: "rgb(182, 40, 49)" }
                }>{Number(prop.upgradeCoinPrice).toLocaleString(undefined,digitFix)}</span>)

            </button>

        </div >
    )
}

export default TaskUpgradePrice