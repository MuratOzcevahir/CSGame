import React, { useState } from 'react'
import SettingGrid from './SettingGrid';
import SettingTitle from './SettingTitle';
function Screen() {
    const [isFullScreen, setisFullScreen] = useState(false)
    var elem = document.documentElement;
    function setScreen() {
        if (!isFullScreen) {
            setisFullScreen(true)
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }
        if (isFullScreen) {
            setisFullScreen(false)
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    }

    return (
        <div id='_setScreen'>
            <div className='row'>
                <SettingGrid col="3" >
                    <SettingTitle title="Screen display" />
                </SettingGrid>
                <SettingGrid col="9" >
                    <button onClick={() => { setScreen() }}>
                        {
                            !isFullScreen ? "Fullscreen" : "Exit full screen"
                        }
                    </button>
                </SettingGrid>
            </div>
        </div>
    )
}

export default Screen