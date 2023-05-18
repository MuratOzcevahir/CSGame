import React from 'react'
import MenuItem from './MenuItem'
function Menu() {
    return (
        <ul>
            <MenuItem title="Welcome" toLink="/" />

            <MenuItem title="Log-in" toLink="/log-in" />
            <MenuItem title="Sign-Up" toLink="/sign-in" />
            <MenuItem title="Donate" toLink="#" />

        </ul>
    )
}

export default Menu