import React, { useContext } from 'react'
import "./css/statistictab.css"
import { appContext } from '../../../../context/AppContext'
import TableTr from './component/TableTr'
import TableHead from './component/TableHead'

function StatisticTab() {
  var ctx = useContext(appContext)
  return (
    <div id="_statisticTabHolder">
      <p>How many times you clicked. Note: even if you cant buy or upgrade anything, that doesnt mean u didnt click!</p>
      <div className='p-2'>

        <table>
          <TableHead tblhead="Buy/Sell Statistic" />
          <tbody>
            <TableTr title="Chop +1" value={BigInt(ctx.GameObject.Statistic.TimesClicked.Wood.Collected).toLocaleString()} />
            <TableTr title="Hunt +1" value={ctx.GameObject.Statistic.TimesClicked.Food.Collected} />
            <TableTr title="Wood Storage" value={ctx.GameObject.Statistic.TimesClicked.Wood.BuyStorage} />
            <TableTr title="Food Storage" value={ctx.GameObject.Statistic.TimesClicked.Food.BuyStorage} />
            <TableTr title="Sell Wood" value={ctx.GameObject.Statistic.TimesClicked.Wood.SellWood} />
            <TableTr title="Woodcutter +1" value={ctx.GameObject.Statistic.TimesClicked.Civilization.BuyWoodCutter} />
            <TableTr title="Hunter +1" value={ctx.GameObject.Statistic.TimesClicked.Civilization.BuyHunter} />
            <TableTr title="House +1" value={ctx.GameObject.Statistic.TimesClicked.Civilization.BuyHouse} />
          </tbody>
        </table>
        <table>
          <TableHead tblhead="Worker Statistic" />
          <tbody>
            <TableTr title="Woodcutters Worked" value={ctx.GameObject.Statistic.TimesClicked.Civilization.WoodCutterWorked} />
            <TableTr title="Hunters Worked" value={ctx.GameObject.Statistic.TimesClicked.Civilization.FoodHunterWorked} />
          </tbody>
        </table>
        <table>
          <TableHead tblhead="Update Statistic" />
          <tbody>
            <TableTr title="Wood Click Update" value={ctx.GameObject.Statistic.TimesClicked.Wood.UpdateClick} />
            <TableTr title="Food Click Update" value={ctx.GameObject.Statistic.TimesClicked.Food.UpdateClick} />
            <TableTr title="Coin Sell Update" value={ctx.GameObject.Statistic.TimesClicked.Wood.UpdateSellWood} />
            <TableTr title="Wood Storage Update" value={ctx.GameObject.Statistic.TimesClicked.Wood.UpdateBuyStorage} />
            <TableTr title="Food Storage Update" value={ctx.GameObject.Statistic.TimesClicked.Food.UpdateBuyStorage} />
            <TableTr title="Woodcutter Update" value={ctx.GameObject.Statistic.TimesClicked.Civilization.UpdateWoodCutter} />
            <TableTr title="Hunter Update" value={ctx.GameObject.Statistic.TimesClicked.Civilization.UpdateFoodHunter} />
            <TableTr title="House Update" value={ctx.GameObject.Statistic.TimesClicked.Civilization.UpdateHouse} />


          </tbody>
        </table>
      
      </div>

    </div>
  )
}

export default StatisticTab