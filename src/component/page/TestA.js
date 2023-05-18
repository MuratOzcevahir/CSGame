import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { conUserAttacking, conUserAttacked } from "./../context/connection/Connection"
var attackFinish = 0
var attackerBack = 0
var attackFinishDiff = 0
var attackerBackDiff = 0
var attackStartDate = ""
var attackEndDate = ""
var attackerBackDate = ""
var isDeleted = false;
// Date.parse(today)
// , attackEndDate.toUTCString())
function TestA() {
    var [dateDifference, setdateDifference] = useState("")
    var [attackerBack, setattackerBack] = useState("")

    const [enemyAttackingYou, setenemyAttackingYou] = useState([])
    const [enemyAttackedYou, setenemyAttackedYou] = useState([])

    const [refresh, setrefresh] = useState(0)

    var data = []
    var [timeData, settimeData] = useState([])


    const [finishedWar, setfinishedWar] = useState([])

    function Difference() {
        var attackStartDate = new Date()
        var attackEndDate = new Date()
        var attackerBackDate = new Date()

        attackEndDate.setTime(attackEndDate.getTime() + (45 * 1000))
        attackerBackDate.setTime(attackerBackDate.getTime() + (45 * 2) * 1000)

        console.log(attackEndDate)
        axios.post(conUserAttacking, {
            AttackerId: 1,
            AttackedId: 2,
            AttackStartDate: attackStartDate.getTime(),
            AttackEndDate: attackEndDate.getTime(),
            AttackerBackDate: attackerBackDate.getTime()
        })
        GetDate()
    }
    function GetFinishedWar() {
        axios.get(conUserAttacked).then((response) => {

            if (response.data.length == 0 || response.data == null || response.data == undefined) {
                return
            }
            else {
                response.data.filter((attacking) => { return attacking.AttackerId === 1; })
                setfinishedWar(response.data.filter((attacking) => { return attacking.AttackerId === 1; }))

                console.log("after getdate ", data)
            }
        })




    }
    function GetDate() {
        axios.get(conUserAttacking).then((response) => {
            if (response.data.length == 0 || response.data == null || response.data == undefined) {
                return
            }
            else {
                response.data.filter((attacking) => { return attacking.AttackerId === 1; })
                settimeData(response.data.filter((attacking) => { return attacking.AttackerId === 1; }))
                setenemyAttackingYou(response.data.filter((attacking) => { return attacking.AttackerId != 1 && attacking.AttackedId === 1 }))
                console.log("after getdate ", data)
            }
        })

    }

    function AddWood(id) {
        axios.post(conUserAttacked, {
            AttackerId: 2,
            AttackedId: 1,
            WarId: id,
            WoodAmount: (Math.floor(Math.random() * 512) + 1),
        }).then(() => {

        }).catch()
    }

    function GetAttackedResult(id) {
        axios.get(conUserAttacked   ).then((response) => {
            if (response.data.length == 0 || response.data == null || response.data == undefined) {
                return
            }
            else {
          
                setenemyAttackedYou(response.data.filter((attacking) => { return attacking.AttackedId === 1; }))
                console.log("after getdate ", data)
            }
        })


    }
    function DeleteValue(id) {

        axios.delete(conUserAttacking + id).then(() => {

            AddWood(id)
            window.location.href = "/"
            console.log("after delete " + id)
            console.log("after delete usestate ", data)

        })
        GetDate()

    }
    useEffect(() => {

        console.log(timeData, " ilk yükleme timedata")

        GetDate()
        GetFinishedWar()
        GetAttackedResult()
        var attackStartDate = new Date()
        var attackEndDate = new Date()
        var attackerBackDate = new Date()
        console.log("başlangıç end", attackEndDate)
        attackEndDate.setTime(attackEndDate.getTime() + (200 * 1000))
        console.log("sonraki end  ", attackEndDate)


        attackerBackDate.setTime(attackerBackDate.getTime() + (200 * 2) * 1000)

        attackFinish = attackEndDate - attackStartDate;
        attackerBack = attackerBackDate - attackStartDate


        attackFinishDiff = Math.round(attackFinish / 1000);
        attackerBackDiff = Math.round(attackerBack / 1000);


        if (attackFinishDiff >= 0) {
            setdateDifference(attackFinishDiff--)
            setattackerBack(attackerBackDiff--)

        }
        var timer = setInterval(() => {
            setrefresh(refresh + 1)

            console.log(refresh)
        }, 1000);

        return () => {
            clearInterval(timer)
        }

    }, [])


    return (
        <div>
            <button type="button" onClick={() => { Difference() }}> SALDIR </button>
            <br></br>

            enemyAttackedYou
            {
                enemyAttackedYou.map((enemyAttackedYouItem, i) => {
                    return (
                        <div key={i} style={{ color: " red" }}>

                            Stolen wood amount from you :    {enemyAttackedYouItem.WoodAmount}

                            ward id: {enemyAttackedYouItem.id}:
                        </div >


                    )
                })
            }
<hr></hr>
            enemyAttackingYou
            {
                enemyAttackingYou.map((enemyAttackingYouItem, i) => {
                    return (
                        <div key={i} style={{ color: " red" }}>

                            {((enemyAttackingYouItem.AttackEndDate - Date.now()) / 1000).toFixed(0) <= 0 ?
                                <>
                                    Attack ended check result <button id='' type="button" onClick={(e) => { e.currentTarget.disabled = true; GetAttackedResult(enemyAttackingYouItem.id) }}>Taamamla</button>
                                </>
                                :
                                <>

                                </>
                            }
                            ward id: {enemyAttackingYouItem.id}:
                        </div >
                    )
                })
            }
            <hr></hr>


            your War finished
            {console.log(timeData, " data after rfefersh")}
            {
                finishedWar.map((finishedWarItem, i) => {
                    return (
                        <div key={i}>
                            ward id: {finishedWarItem.WarId}:
                            Wood {finishedWarItem.WoodAmount}
                        </div >
                    )
                })

            }


            <hr></hr>
            your  war continue



            {
                timeData.map((attackItem, i) => {
                    return (
                        <div key={i}>

                            {
                                console.log(attackItem.id)
                            }
                            <div>
                                {attackItem.id}-

                                {((attackItem.AttackEndDate - Date.now()) / 1000).toFixed(0) <= 0 ?
                                    <>
                                        wood:
                                        <button id='' type="button" onClick={(e) => { e.currentTarget.disabled = true; DeleteValue(attackItem.id) }}>Taamamla</button>


                                    </>
                                    :
                                    <>    Varış: {((attackItem.AttackEndDate - Date.now()) / 1000).toFixed(0)} /</>
                                }


                                {/* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(attackItem.AttackEndDate)} */}

                                Dönüş:     {((attackItem.AttackerBackDate - Date.now()) / 1000).toFixed(0)}-

                                {
                                    ((attackItem.AttackerBackDate - Date.now()) / 1000).toFixed(0) <= 0 ?

                                        "dönüş 0sa"
                                        :
                                        <> dönüş 0 değilse</>
                                }

                            </div>
                        </div>

                    )
                })



            }
            {/* {timeData.attackStartDate}<br></br>
            {timeData.attackEndDate}<br></br>
            {timeData.attackerBackDate}<br></br>
            saldırı biter {dateDifference}<br></br>
            saldıranlar geri gelir {attackerBack}<br></br> */}
            <button type="button" onClick={() => { GetDate() }}> get date from axios </button>


        </div >
    )
}

export default TestA