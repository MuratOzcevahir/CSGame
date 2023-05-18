import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../../context/AppContext'
import axios from 'axios'
import { connGAME_STATS } from '../../../context/connection/Connection'
import TableItems from '../table-element/TableItems'

function GameLiveStatistic(prop) {
    var ctx = useContext(appContext)
    var digitFix = { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    var [totalOfGame, settotalOfGame] = useState({})
    const [totalClickWood, settotalClickWood] = useState(0)
    const [gameLoadErr, setgameLoadErr] = useState(0)

    function SumOfWood() {

        axios.get(connGAME_STATS).then((res) => {

            if (res.data.status) {
                console.log(totalOfGame.totalWood)
                console.log(res.data.gametestlist, " from api total click")
                console.log(res.data.testresult, " from api plus test")
                settotalClickWood(res.data.gametestlist)

                settotalOfGame(res.data.gamestats)
                console.log(total, " total sayı")

                return;
            }
            setgameLoadErr("Error: game stats load failed")
        }).catch((er) => {
            if (er.code == "ERR_NETWORK") {
                setgameLoadErr("Error: Server is not responding")
            }
        });


    }
    var a = BigInt("98219598212195982195982195");
    var b = BigInt(982195598219582195982195982195982195);
    var d = 1n;
    var c = (BigInt(a) * BigInt(a) * BigInt(a)) + d;
    if (totalOfGame.totalWoodCurrent != undefined) {
        console.log(totalOfGame.totalWoodCurrent)
        console.log(BigInt(Math.round(totalOfGame.totalWoodCurrent)), " test")
        a += BigInt(Number(Math.round(totalOfGame.totalWoodCurrent)))
    }

    useEffect(() => {

        SumOfWood()
    }, [])
    return (
        <>
            <div className='col-12 col-lg-6'>
                <div className='d-flex flex-column align-items-start justify-content-center'>
                    {
                        (totalOfGame.totalWood != undefined || totalOfGame.totalWood != null) ?

                            <>
                                <h5 className='infoTitle' style={{ backgroundColor: `rgb(${prop.titleColor})` }}> Game live statistic</h5>
                                <table className=''>
                                    <thead>
                                        <tr>
                                            <th colSpan="2">
                                                <h3>Game Resource </h3>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colSpan="2">
                                                <h4>(current)</h4>
                                            </th>
                                        </tr>
                                        <TableItems title="Coin" value={totalOfGame.totalCoinCurrent} />
                                        <TableItems title="Wood" value={totalOfGame.totalWoodCurrent} />
                                        <TableItems title="Food" value={totalOfGame.totalFoodCurrent} />
                                        <tr>
                                            <th colSpan="2">
                                                <h4>(all the time)</h4>
                                            </th>
                                        </tr>
                                        <TableItems title="Coin" value={totalOfGame.totalCoin} />
                                        <TableItems title="Wood" value={totalOfGame.totalWood} />
                                        <TableItems title="Food" value={totalOfGame.totalFood} />
                                    </thead>

                                </table>

                            </>

                            :
                            <>
                                <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                                    {
                                        gameLoadErr == 0 ?
                                            <>
                                                <span>Game stats is loading</span>
                                                <img src="https://cdn.dribbble.com/users/766394/screenshots/2478714/media/f557cfc25925bde5b9433f3ea7fba249.gif" width="200px" />
                                            </>
                                            : gameLoadErr
                                    }
                                </div>
                            </>

                    }
                </div>
            </div>

        </>
    )
}

export default GameLiveStatistic