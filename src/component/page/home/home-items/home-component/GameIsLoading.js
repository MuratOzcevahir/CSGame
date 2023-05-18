import React from 'react'

function GameIsLoading() {
    return (
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif')", backgroundPosition: "center" }}>

            <span className="text-white"> Game is loading </span>
        </div>

    )
}

export default GameIsLoading