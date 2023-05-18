import React, { useContext, useState } from 'react'
import "./css/gametitle.css"
import { appContext } from '../../../../context/AppContext';
function GameTitle() {

    const [gameSaving, setgameSaving] = useState(false)
    var ctx = useContext(appContext)

    const SaveGame = (isLogout) => {
        setgameSaving(true)
        ctx.SetGameUser({
            type: "USER_SAVE_GAME", id: ctx.currentUser.Id, isGameSaving: (respond) => {
                setgameSaving(respond)
                if (isLogout === "log_out") {
                    ctx.currentuser = null;
                    document.cookie = "user=; expires=Thu, 01 Jan 1969 00:00:00 UTC; path=/;";
                    window.location.href = "/"
                }
            }
        });
    }

    return (
        <div id='_gameTitleHolder'>
            <div className='position-absolute end-0 m-0 p-0 w-100'>
                <div className='d-flex justify-content-between  align-items-start'>
                    <div className='d-flex flex-column'>
                        <button id="_btnWebsite" type="button">Site</button>
                        <button id="_btnDonate" type="button">Don </button>

                    </div>
                    < p>beta</p >
                    {
                        gameSaving ?

                            <div className='_gameSaving ' >
                                <div>

                                </div>
                                <div className="spinner-border" role="status">
                                </div>
                                <div>
                                    <p>Saving. Do not close browser, till done</p>

                                </div>

                            </div>

                            :

                            <div className='d-flex flex-column'>

                                <button id="_btnGameSave" type="button" onClick={SaveGame}> Save</button>
                                <button id='_btnLogOut' onClick={() => { SaveGame("log_out") }} type='button'>Logout</button>
                            </div>
                    }
                </div>

            </div>
            <div id='_gameTitle'>
                <h1>Collect&Sell


                </h1>
                <span>v0.0.0.1 </span>
            </div>

        </div>

    )
}

export default GameTitle