import React from 'react'

function ProfileItem(prop) {
    return (
        <div className='text-end'>{ prop.value}: {prop.title}


        </div>
    )
}

export default ProfileItem