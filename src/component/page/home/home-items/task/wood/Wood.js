import React, { useContext } from 'react'
import { SellSetting, TaskDetail, TaskPrice, TaskTitle, TaskUpgradePrice, TaskPriceHolder, TaskDescription } from "../TaskDetailExport"
import { GlobalTaskItem } from '../../buttons/ButtonExport'
import { appContext } from '../../../../../context/AppContext'
import { IconGenerate } from '../../ItemsExport'
function Wood() {
    var ctx = useContext(appContext)
    return (
        <div className='_woodTaskHolder'>

            <div className='d-flex justify-content-between align-items-end'>

                <TaskTitle title="Wood task" />
                <div className='d-flex justify-content-end bg-secondary ' data-bs-toggle="collapse" data-bs-target="#collapseWoodTask" aria-expanded="false" aria-controls="collapseWoodTask"  style={{ cursor: "pointer" }} >
                    <IconGenerate iconName="visibility"  size="15"/>
                </div>

            </div>
            <div className='collapse.show' id="collapseWoodTask">

                <div id='_taskHolder' className='d-flex flex-column m-0 justify-content-between '>
                    {/* CLICK */}

                    <div className='w-100'>
                        <GlobalTaskItem btnColor="127,180,127" iconName="forest" title="Chop +1" task={() => { ctx.SetGameObj({ type: "WOOD", task: "_CLICK" }) }} />

                        <TaskDetail title="Lv" value={ctx.GameObject.Resource.Wood.General.Level} digit={1} />
                        <TaskDetail title="Power" value={ctx.GameObject.Resource.Wood.Detail.Power} />
                        <TaskDetail title="Multiply" value={ctx.GameObject.Resource.Wood.Detail.Multiply}  digit={1} />
                        <TaskDescription description="Chop chop chop. Collect Wood&Sell. Also you will need woods to build stuffs or upgrade" />
                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "WOOD", task: "_UPDATE_CLICK" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Resource.Wood.UpdatePrice.Coin} />
                    </div>
                    {/* SELL WOOD */}
                    <div className=''>
                        <GlobalTaskItem iconName="local_atm" btnColor="216,190,20" title="Sell Wood" task={() => { ctx.SetGameObj({ type: "WOOD", task: "_SELL_WOOD", percent: 100 }) }} />

                        <TaskDetail title="Level" value={ctx.GameObject.Resource.Coin.General.Level}  digit={1} />
                        <TaskDetail title="Power" value={ctx.GameObject.Resource.Coin.Detail.Power} />
                        <TaskDetail title="Multiply" value={ctx.GameObject.Resource.Coin.Detail.Multiply} digit={1}  />
                        <SellSetting />
                        <TaskDescription description="Everybody needs money. You can sell collected woods and earn coin. With coin you can upgrade your stuffs like woodcutter, chop etc." />

                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "WOOD", task: "_UPDATE_COIN" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Resource.Coin.UpdatePrice.Coin} />
                    </div>


                    {/* BUY STORAGE */}
                    <div className=''>
                        <GlobalTaskItem btnColor="190, 115, 0" iconName="warehouse" title="Wood Storage" task={() => { ctx.SetGameObj({ type: "WOOD", task: "_STORAGE_BUY" }) }} />
                        <TaskPriceHolder>
                            <TaskPrice iconName="local_atm" currentValue={ctx.GameObject.Resource.Coin.General.Amount} value={ctx.GameObject.Storage.WoodStorage.Detail.BuyPrice.Coin} />
                            <TaskPrice iconName="forest" currentValue={ctx.GameObject.Resource.Wood.General.Amount} value={ctx.GameObject.Storage.WoodStorage.Detail.BuyPrice.Wood} />
                        </TaskPriceHolder>
                        <TaskDetail title="Level" value={ctx.GameObject.Storage.WoodStorage.General.Level} digit={1}  />
                        <TaskDetail title="Full %" value={((ctx.GameObject.Resource.Wood.General.Amount * 100) / ctx.GameObject.Storage.WoodStorage.General.Capacity)} />
                        <TaskDetail title="Capacity" value={ctx.GameObject.Storage.WoodStorage.General.Capacity} />
                        <TaskDescription description="If you want to collect wood, you need Wood Storage. Each level increases x2 times storage capacity. Otherwise you cant collect wood more than storage capacity" />

                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "WOOD", task: "_UPDATE_STORAGE" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Storage.WoodStorage.Detail.UpdatePrice.Coin} />
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Wood