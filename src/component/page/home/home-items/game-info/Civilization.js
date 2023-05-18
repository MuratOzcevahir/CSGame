import React, { useContext } from 'react'
import { IconGenerate } from '../ItemsExport'
import "./css/civilization.css"
import { appContext } from '../../../../context/AppContext'
import digitFix from '../../../../global-page-items/DigitFix'
function Civilization() {
    var ctx = useContext(appContext)
    return (
        <div id='_civilizationHolder' className='container'>
            <div className='d-flex align-items-center'>
                <div className='row w-100'>
                    <div className='col-4 col-lg-1'>

                        <h5>Resource</h5>
                    </div>
                    <div className='col-6 d-flex'>
                        <div className='d-flex align-items-center'>


                            <div className='d-flex align-items-center'>
                                <span>Gain :</span>

                                <IconGenerate iconName='egg_alt' color={"200,100,100"} size="14" />
                                <span> +{(ctx.GameObject.Worker.FoodWorker.Detail.Multiply * ctx.GameObject.Worker.FoodWorker.Detail.Power * ctx.GameObject.Worker.FoodWorker.General.Amount).toLocaleString(undefined, digitFix)}/s</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <IconGenerate iconName='forest' color={"100,190,20"} size="14" />
                                <span>+{(ctx.GameObject.Worker.WoodWorker.Detail.Multiply * ctx.GameObject.Worker.WoodWorker.Detail.Power * ctx.GameObject.Worker.WoodWorker.General.Amount).toLocaleString(undefined, digitFix)}/s</span>
                            </div>
                            <span>Reduce : </span>
                            <IconGenerate iconName='egg_alt' color={"200,100,100"} size="14" />

                            <span>total</span>

                            <span>-{(ctx.GameObject.Civilization.TotalFoodReduce).toLocaleString(undefined, digitFix)}/s</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span>  |f.worker -{(ctx.GameObject.Worker.FoodWorker.General.Amount * ctx.GameObject.Worker.FoodWorker.Detail.FoodReduce).toLocaleString(undefined, digitFix)}/s</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span>  |w.worker -{(ctx.GameObject.Worker.WoodWorker.General.Amount * ctx.GameObject.Worker.WoodWorker.Detail.FoodReduce).toLocaleString(undefined, digitFix)}/s</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='d-flex align-items-center'>
                <div className='row w-100'>

                    <div className='col-4 col-lg-1'>
                        <h5>People</h5>
                    </div>
                    <div className='col-6 d-flex'>

                        <div className='d-flex align-items-center'>
                            <IconGenerate iconName='man' color={"0,20,20"} size="14" />
                            <span>{ctx.GameObject.Civilization.Population}/{((ctx.GameObject.Civilization.House.General.Amount * ctx.GameObject.Civilization.House.Detail.Capacity * ctx.GameObject.Civilization.House.Detail.Multiply) + (ctx.GameObject.Civilization.House.General.Amount * ctx.GameObject.Civilization.House.Detail.Room))}</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <IconGenerate iconName='house' color={"0,0,0"} size="14" />
                            <span> {(ctx.GameObject.Civilization.House.General.Amount)}</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Civilization