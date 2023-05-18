import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connGAME_STATS } from '../../context/connection/Connection'
import "./css/welcome.css"
import TableItems from './table-element/TableItems'
import Updates from './component/Updates'
import GameLiveStatistic from './component/GameLiveStatistic'

function Welcome() {

    return (

        <div id="_welcomeHolder">
            {/* <hr></hr>
            {a.toLocaleString()}
            <br></br>
            {b.toLocaleString()}
            <br></br>

            {c.toLocaleString()}
            {console.log(a, "a değeri")} */}
            <div id='_gameStatsHolder' className='container-fluid mt'>
                <div className='row'>
                    <Updates titleColor="57, 69, 28" />
                    <GameLiveStatistic titleColor="90, 70, 50" />
                </div>

            </div>

            <span className='d-flex'>Join the fun game </span>


        </div>


    )
}

export default Welcome
