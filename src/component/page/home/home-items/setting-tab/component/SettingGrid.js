import React from 'react'

function SettingGrid(prop) {
    return (
        <>
                <div className={`col-12 col-lg-${prop.col}  align-items-center`}>
                    {prop.children}
                </div>

        </>
    )
}

export default SettingGrid