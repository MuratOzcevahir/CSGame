import "./css/home.css"
import { GameTitle, Resources, Profile, Achievement, Civilization, Task, SettingTab, StatisticTab, GameIsLoading } from "./home-items/ItemsExport";
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../context/AppContext'
import { secretPass } from "../../context/Crpyto";
import CryptoJS from "crypto-js";

function Home() {
    var ctx = useContext(appContext);

    const [refreshedUser, setrefreshedUser] = useState(ctx.currentgameuser)
    const [gameDataLoading, setgameDataLoading] = useState(true)

    useEffect(() => {
        var cookieuser = checkCookie("user")
        if (cookieuser != null && cookieuser != undefined && cookieuser != "") {
            const bytes = CryptoJS.AES.decrypt(cookieuser, secretPass);
            const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            ctx.currentgameuser = data
            if (data != null) {
                ctx.setcurrentuser(ctx.currentgameuser)
                ctx.SetGameUser({
                    type: "USER_LOAD_GAME", id: ctx.currentgameuser.Id, GameLoading: (res) => {
                        setgameDataLoading(res)
                        ctx.SetGameObj({ type: "WOOD", task: "GAMEREFRESH" })
                    }
                })
            }
            ctx.SetGameObj({ type: "WOOD", task: "GAMEREFRESH" })
            setrefreshedUser(ctx.currentgameuser)
        }
        if (ctx.currentgameuser == null) {
            window.location.href = "/login"
        }
    }, [])
    useEffect(() => {
        var workerWorking = setInterval(() => {

            if (ctx.GameObject.Resource.Food.General.Amount > ctx.GameObject.Civilization.TotalFoodReduce && ctx.GameObject.Worker.WoodWorker.IsStopped == false) {
                ctx.GameObject.Worker.WoodWorker.CanWork = true
            }
            ctx.SetGameObj({ type: "WOOD", task: "_WORKER_WORKING" })

        }, 1000);
        return () => {
            clearInterval(workerWorking)
        }
    }, [gameDataLoading, ctx.GameObject.Worker.WoodWorker.CanWork, ctx.GameObject.Worker.WoodWorker.IsStopped, ctx.GameObject.Worker.FoodWorker.CanWork, ctx.GameObject.Worker.FoodWorker.IsStopped])
    useEffect(() => {
        var autosell = setInterval(() => {
            if (ctx.GameObject.Resource.Coin.Detail.Autosell) {

                ctx.SetGameObj({ type: "WOOD", task: "_SELL_WOOD", percent: 100 })
            }
        }, 2000);

        return () => {
            clearInterval(autosell)

        }
    }, [ctx.GameObject.Resource.Coin.Detail.Autosell])

    useEffect(() => {
        ctx.currentgameuser = refreshedUser
    }, [refreshedUser])


    return (
        <div id="_homeHolder">
            {console.log(gameDataLoading, " gameisloadng")}
            {
                refreshedUser != null && gameDataLoading == false ?
                    <>
                        <GameTitle />
                        <Profile />
                        <div className="container p-0">
                            <nav id="_mainTabs" className="">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <div className="d-flex">
                                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#main_resource" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                        <button className="nav-link " id="nav-shop-tab" data-bs-toggle="tab" data-bs-target="#nav-shop" role="tab" aria-controls="nav-shop" aria-selected="false">Shop</button>
                                        <button className="nav-link" id="nav-settings-tab" data-bs-toggle="tab" data-bs-target="#settings" role="tab" aria-controls="nav-settings" aria-selected="false">Settings</button>
                                        <button className="nav-link" id="nav-statistic-tab" data-bs-toggle="tab" data-bs-target="#statistic" role="tab" aria-controls="nav-statistic" aria-selected="false">Statistic</button>
                                    </div>
                                    {ctx.globalErr}
                                </div>
                            </nav>
                            <div className="tab-content"  >
                                <div className="tab-pane fade show active" id="main_resource" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <Resources />
                                    <Civilization />
                                    <Task />
                                </div>
                                <div className="tab-pane fade" id="nav-shop" role="tabpanel" aria-labelledby="nav-shop-tab">SHOP</div>
                                <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="nav-settings-tab">
                                    <SettingTab />
                                </div>
                                <div className="tab-pane fade" id="statistic" role="tabpanel" aria-labelledby="nav-statistic-tab">
                                    <StatisticTab />
                                </div>
                            </div>
                        </div>
                        <hr ></hr >
                    </>
                    :
                    <>
                        <GameIsLoading />
                    </>
            }
        </div>
    )
}

export default Home