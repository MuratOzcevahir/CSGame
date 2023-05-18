import React, { useContext } from 'react'
import { SellSetting, TaskDetail, TaskPrice, TaskTitle, TaskUpgradePrice, TaskPriceHolder, TaskDescription } from "../TaskDetailExport"
import { GlobalTaskItem } from '../../buttons/ButtonExport'
import { appContext } from '../../../../../context/AppContext'
import { IconGenerate } from '../../ItemsExport'
function Food() {
    var ctx = useContext(appContext)
    return (
        <div className='_foodTaskHolder'>

            <div className='d-flex justify-content-between align-items-end'>

                <TaskTitle title="Food task" />
                <div className='d-flex justify-content-end bg-secondary ' data-bs-toggle="collapse" data-bs-target="#collapseFoodTask" aria-expanded="false" aria-controls="collapseFoodTask"  style={{cursor:"pointer"}} >
                    <IconGenerate iconName="visibility" color="0,0,0" size="15" />
                </div>

            </div>
            <div className='collapse.show' id="collapseFoodTask">

                <div id='_taskHolder' className='d-flex flex-column m-0 justify-content-between '>
                    {/* CLICK */}
                    <div className='w-100'>
                        <GlobalTaskItem btnColor="200,127,127" iconName="egg_alt" title="Hunt +1" task={() => { ctx.SetGameObj({ type: "FOOD", task: "_CLICK" }) }} />

                        <TaskDetail title="Lv" value={ctx.GameObject.Resource.Food.General.Level}  digit={1} />
                        <TaskDetail title="Power" value={ctx.GameObject.Resource.Food.Detail.Power} />
                        <TaskDetail title="Multiply" value={ctx.GameObject.Resource.Food.Detail.Multiply}  digit={1} />
                        <TaskDescription description="Hunt food for workers stomach. " />
                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "FOOD", task: "_UPDATE_CLICK" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Resource.Food.UpdatePrice.Coin} />
                    </div>
                    {/* BUY STORAGE */}
                    <div className=''>
                        <GlobalTaskItem btnColor="190, 115, 0" iconName="warehouse" title="Food Storage" task={() => { ctx.SetGameObj({ type: "FOOD", task: "_STORAGE_BUY" }) }} />
                        <TaskPriceHolder>
                            <TaskPrice iconName="local_atm" currentValue={ctx.GameObject.Resource.Coin.General.Amount} value={ctx.GameObject.Storage.FoodStorage.Detail.BuyPrice.Coin} />
                            <TaskPrice iconName="forest" currentValue={ctx.GameObject.Resource.Wood.General.Amount} value={ctx.GameObject.Storage.FoodStorage.Detail.BuyPrice.Wood} />
                        </TaskPriceHolder>
                        <TaskDetail title="Level" value={ctx.GameObject.Storage.FoodStorage.General.Level} digit={1}  />
                        <TaskDetail title="Full %" value={((ctx.GameObject.Resource.Food.General.Amount * 100) / ctx.GameObject.Storage.FoodStorage.General.Capacity)} />
                        <TaskDetail title="Capacity" value={ctx.GameObject.Storage.FoodStorage.General.Capacity} />
                        <TaskDescription description="If you want to collect food, you need Food Storage. Each level increases x2 times storage capacity. Otherwise you cant collect food more than storage capacity" />
                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "FOOD", task: "_UPDATE_STORAGE" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Storage.FoodStorage.Detail.UpdatePrice.Coin} />
                    </div>


                </div>

            </div>
        </div>

    )
}

export default Food
