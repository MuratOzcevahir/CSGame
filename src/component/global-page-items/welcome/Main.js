import React from 'react'
import Login from '../../page/log-in/Login'
import Header from '../header/Header'
import { Sign } from "../../page/Indexing"
import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Main