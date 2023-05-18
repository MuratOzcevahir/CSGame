import React, { useContext } from 'react'
import { appContext } from '../../../../context/AppContext';
import "./css/achievement.css"
function Achievement() {
    var ctx = useContext(appContext)
    return (
        <>
            <div id="_achievementHolder">

                <a type="button" data-bs-toggle="modal" data-bs-target="#achievement">
                    Achievement
                </a>
                <div className="modal fade" id="achievement" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className='modal-content'>
                            <div className='d-flex flex-column'>
                                COMING SOON!
                                <hr></hr>

                                <p> Profile</p>
                                <span>Level {ctx.GameObject.Achievement.Profile.Level.Current} / {ctx.GameObject.Achievement.Profile.Level.Reach}</span>
                                <span>Exp {ctx.GameObject.Achievement.Profile.Exp.Current} / {ctx.GameObject.Achievement.Profile.Exp.Reach}</span>
                                <hr></hr>
                                <p>    Resource</p>
                                <span>Coin {ctx.GameObject.Achievement.Resource.Coin.Amount.Current} / {ctx.GameObject.Achievement.Resource.Coin.Amount.Reach}</span>
                                <span>Wood {ctx.GameObject.Achievement.Resource.Wood.Amount.Current} / {ctx.GameObject.Achievement.Resource.Wood.Amount.Reach}</span>
                                <span>Food {ctx.GameObject.Achievement.Resource.Food.Amount.Current} / {ctx.GameObject.Achievement.Resource.Food.Amount.Reach}</span>
                                <hr></hr>

                                <p> Civilization</p>
                                <span>Population {ctx.GameObject.Achievement.Civilization.Population.Amount.Current} / {ctx.GameObject.Achievement.Civilization.Population.Amount.Reach}</span>
                                <span>House {ctx.GameObject.Achievement.Civilization.House.Amount.Current} / {ctx.GameObject.Achievement.Civilization.House.Amount.Reach}</span>
                                <span>Wood Worker {ctx.GameObject.Achievement.Worker.WoodWorker.Amount.Current} / {ctx.GameObject.Achievement.Worker.WoodWorker.Amount.Reach}</span>
                                <span>Food Worker {ctx.GameObject.Achievement.Worker.FoodWorker.Amount.Current} / {ctx.GameObject.Achievement.Worker.FoodWorker.Amount.Reach}</span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Achievement