import React, { useContext } from 'react'
import { appContext } from '../../../../../context/AppContext'
import { IconGenerate } from '../../ItemsExport'

function PrestigePopup() {
    const ctx = useContext(appContext)

    return (
        <>
        {console.log( Number(ctx.GameObject.Prestige.PrestigeCost)) }

        <div className="modal fade" id="prestige" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header d-flex flex-column position-relative">
                        <a className="btn-close position-absolute end-0 me-4" data-bs-dismiss="modal"  ></a>

                        <h1> {ctx.currentUser.Nickname}</h1>
                        <h2>Welcome Prestige</h2>
                    </div>
                    <div className="modal-body">
                        <p id="_prestigeWarning">
                            <IconGenerate iconName="warning" size="45" />
                            WARNING: there is no return after prestige. Everything you have will reset to default but their multiply will increase. Everytime you prestige it will multiply itself.
                            <br></br>
                            example: 1 | 2 | 4 | 16 | 32
                        </p>
                        <p id="_prestigeNote">TETESTET</p>
                        <h6>Cost: {BigInt(ctx.GameObject.Prestige.PrestigeCost).toLocaleString()} </h6>
                        <p>your coin</p>
                        <p> {ctx.GameObject.Resource.Coin.General.Amount.toFixed(2)}</p>
                        <p>{((ctx.GameObject.Resource.Coin.General.Amount * 100) / Number(ctx.GameObject.Prestige.PrestigeCost)).toFixed(5)}%</p>
                        <p>{(BigInt(ctx.GameObject.Prestige.PrestigeCost) - BigInt(Math.round(ctx.GameObject.Resource.Coin.General.Amount))).toLocaleString()} </p>


               
                        <p>to go</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => {
                            ctx.SetGameObj({ type: "PRESTIGE", task: "_PRESTIGE_UP" })
                        }}>prestige</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PrestigePopup