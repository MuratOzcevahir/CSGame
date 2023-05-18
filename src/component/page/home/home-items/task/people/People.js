import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../../../../context/AppContext'
import GlobalTaskItem from '../../buttons/GlobalTaskItem'
import { TaskDescription, TaskDetail, TaskPrice, TaskPriceHolder, TaskTitle, TaskUpgradePrice } from '../TaskDetailExport'
import { IconGenerate } from '../../ItemsExport'

function People() {
    var ctx = useContext(appContext)

    const [isWWorkerStopped, setisWWorkerStopped] = useState(ctx.GameObject.Worker.WoodWorker.IsStopped)
    const [isFWorkerStopped, setisFWorkerStopped] = useState(ctx.GameObject.Worker.WoodWorker.IsStopped)
    useEffect(() => {
        setisWWorkerStopped(ctx.GameObject.Worker.WoodWorker.IsStopped)
        setisFWorkerStopped(ctx.GameObject.Worker.FoodWorker.IsStopped)
    }, [isWWorkerStopped, ctx.GameObject.Worker.WoodWorker.IsStopped, ctx.GameObject.Worker.FoodWorker.IsStopped, isFWorkerStopped])
    function StopAllWorker() {

        setisWWorkerStopped(true)
        setisFWorkerStopped(true)
        ctx.GameObject.Worker.FoodWorker.IsStopped = true
        ctx.GameObject.Worker.WoodWorker.IsStopped = true
    }
    function WorkerStopStart(worker) {
        if (worker === "WOODCUTTER") {
            if (ctx.GameObject.Worker.WoodWorker.IsStopped === true) {
                ctx.GameObject.Worker.WoodWorker.IsStopped = false
                setisWWorkerStopped(false)
            }
            else {
                ctx.GameObject.Worker.WoodWorker.IsStopped = true
                setisWWorkerStopped(true)
            }
        }
        else if (worker === "HUNTER") {
            if (ctx.GameObject.Worker.FoodWorker.IsStopped === true) {
                ctx.GameObject.Worker.FoodWorker.IsStopped = false
                setisFWorkerStopped(false)
            }
            else {
                ctx.GameObject.Worker.FoodWorker.IsStopped = true
                setisFWorkerStopped(true)
            }
        }
    }
    return (
        <div className='_civilizationTaskHolder'>


            <div className='d-flex justify-content-between align-items-center'>

                <TaskTitle title="Civilization" />
                <div>
                    <a onClick={() => { StopAllWorker() }}>stop</a>
                </div>
                <div className='d-flex align-self-end bg-secondary ' data-bs-toggle="collapse" data-bs-target="#collapseCivilizationTask" aria-expanded="false" aria-controls="collapseCivilizationTask" style={{ cursor: "pointer" }}>
                    <IconGenerate iconName="visibility" color="0,0,0" size="15" />
                </div>
            </div>
            <div className='collapse.show' id="collapseCivilizationTask">

                <div id='_taskHolder' className='d-flex flex-column justify-content-between'>
                    {/**WOODCUTTER */}
                    <div className=''>

                        <GlobalTaskItem btnColor="101, 143, 184" iconName="man" title="Woodcutter +1" task={() => { ctx.SetGameObj({ type: "WOOD", task: "_WORKER_BUY" }) }} />
                        <TaskPriceHolder>
                            <div className="d-flex align-items-center">
                                {
                                    ctx.GameObject.Worker.WoodWorker.General.Amount > 0 ?
                                        <>
                                            <a className='float-end' onClick={() => { WorkerStopStart("WOODCUTTER") }}>
                                                {
                                                    isWWorkerStopped === true ? "Resume" : "Stop"
                                                }
                                            </a></>
                                        :
                                        ""
                                }
                            </div>

                            <TaskPrice iconName="local_atm" currentValue={ctx.GameObject.Resource.Coin.General.Amount} value={ctx.GameObject.Worker.WoodWorker.Detail.BuyPrice.Coin} />
                            <TaskPrice iconName="forest" currentValue={ctx.GameObject.Resource.Wood.General.Amount} value={ctx.GameObject.Worker.WoodWorker.Detail.BuyPrice.Wood} />
                            <TaskPrice iconName="egg_alt" currentValue={ctx.GameObject.Resource.Food.General.Amount} value={ctx.GameObject.Worker.WoodWorker.Detail.BuyPrice.Food} />
                        </TaskPriceHolder>

                        <TaskDetail title="Lv" value={ctx.GameObject.Worker.WoodWorker.General.Level} digit={1}  />
                        <TaskDetail title="Amount" value={ctx.GameObject.Worker.WoodWorker.General.Amount} digit={1}  />
                        <TaskDetail title="Power" value={ctx.GameObject.Worker.WoodWorker.Detail.Power} />
                        <TaskDetail title="Food r-" value={(ctx.GameObject.Worker.WoodWorker.Detail.FoodReduce*ctx.GameObject.Worker.WoodWorker.General.Amount)} />
                        <TaskDetail title="Multiply" value={ctx.GameObject.Worker.WoodWorker.Detail.Multiply} digit={1} />


                        <TaskDescription description={`Each woodcutter eats ${ctx.GameObject.Worker.WoodWorker.Detail.FoodReduce.toFixed(2)} meat every second, otherwise they won't chop`} />

                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "WOOD", task: "_UPDATE_WORKER" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Worker.WoodWorker.UpdatePrice.Coin} />
                    </div>
                    {/**FOOD HUNTER */}
                    <div className=''>
                        <GlobalTaskItem btnColor="200, 127, 170" iconName="man" title="Hunter +1" task={() => { ctx.SetGameObj({ type: "FOOD", task: "_WORKER_BUY" }) }} />
                        <TaskPriceHolder>
                            <div className="d-flex align-items-center">
                                {
                                    ctx.GameObject.Worker.FoodWorker.General.Amount > 0 ?
                                        <>
                                            <a className='float-end' onClick={() => { WorkerStopStart("HUNTER") }}>
                                                {
                                                    isFWorkerStopped ? "Resume" : "Stop"
                                                }
                                            </a></>
                                        :
                                        ""
                                }
                            </div>
                            <TaskPrice iconName="local_atm" currentValue={ctx.GameObject.Resource.Coin.General.Amount} value={ctx.GameObject.Worker.FoodWorker.Detail.BuyPrice.Coin} />
                            <TaskPrice iconName="forest" currentValue={ctx.GameObject.Resource.Wood.General.Amount} value={ctx.GameObject.Worker.FoodWorker.Detail.BuyPrice.Wood} />
                            <TaskPrice iconName="egg_alt" currentValue={ctx.GameObject.Resource.Food.General.Amount} value={ctx.GameObject.Worker.FoodWorker.Detail.BuyPrice.Food} />
                        </TaskPriceHolder>
                        <TaskDetail title="Lv" value={ctx.GameObject.Worker.FoodWorker.General.Level} digit={1}  />
                        <TaskDetail title="Amount" value={ctx.GameObject.Worker.FoodWorker.General.Amount}  digit={1} />
                        <TaskDetail title="Power" value={ctx.GameObject.Worker.FoodWorker.Detail.Power} />
                        <TaskDetail title="Food r-" value={(ctx.GameObject.Worker.FoodWorker.Detail.FoodReduce*ctx.GameObject.Worker.FoodWorker.General.Amount)} />
                        <TaskDetail title="Multiply" value={ctx.GameObject.Worker.FoodWorker.Detail.Multiply} digit={1}  />

                        <TaskDescription description={`Each food hunters eats ${ctx.GameObject.Worker.FoodWorker.Detail.FoodReduce.toFixed(2)} meat every second, otherwise they won't hunt`} />

                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "FOOD", task: "_UPDATE_WORKER" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Worker.FoodWorker.UpdatePrice.Coin} />
                    </div>
                    {/* HOUSE */}
                    <div className=''>
                        <GlobalTaskItem btnColor="120, 181, 150" iconName="house" title="House +1" task={() => {
                            ctx.SetGameObj({ type: "PEOPLE", task: "_HOUSE_BUY" })
                        }} />
                        <TaskPriceHolder>
                            <TaskPrice iconName="local_atm" currentValue={ctx.GameObject.Resource.Coin.General.Amount} value={ctx.GameObject.Civilization.House.Detail.BuyPrice.Coin} />
                            <TaskPrice iconName="forest" currentValue={ctx.GameObject.Resource.Wood.General.Amount} value={ctx.GameObject.Civilization.House.Detail.BuyPrice.Wood} />

                        </TaskPriceHolder>

                        <TaskDetail title="Lv" value={ctx.GameObject.Civilization.House.General.Level} digit={1} />
                        <TaskDetail title="Amount" value={ctx.GameObject.Civilization.House.General.Amount} digit={1} />
                        <TaskDetail title="Capacity" value={((ctx.GameObject.Civilization.House.Detail.Capacity * ctx.GameObject.Civilization.House.General.Amount) + (ctx.GameObject.Civilization.House.General.Amount * ctx.GameObject.Civilization.House.Detail.Room))} digit={1} />
                        <TaskDetail title="Room" value={(ctx.GameObject.Civilization.House.Detail.Room)} digit={1}  />
                        <TaskDetail title="Multiply" value={ctx.GameObject.Civilization.House.Detail.Multiply} digit={1}  />
                        <TaskDescription description={`To have more people, you need to buy houses. Each house has 5 rooms. Upgrading houses will give you extra +${ctx.GameObject.Civilization.House.Detail.Room} room for each house`} />
                        <TaskUpgradePrice itemUpgrade={() => { ctx.SetGameObj({ type: "PEOPLE", task: "_UPDATE_HOUSE" }) }} currentCoin={ctx.GameObject.Resource.Coin.General.Amount} upgradeCoinPrice={ctx.GameObject.Civilization.House.UpdatePrice.Coin} />
                    </div>

                </div>
            </div >
        </div >

    )
}

export default People