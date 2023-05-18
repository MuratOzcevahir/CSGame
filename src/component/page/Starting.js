import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Main } from '../global-page-items/GlobalPageExport';
import { Home, Login, Sign, Welcome, NoPage } from "./Indexing";
function Starting() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} >
                        <Route path="/" element={<Welcome />} />
                        <Route path="/log-in" element={<Login />} />
                        <Route path="/sign-in" element={<Sign />} />

                    </Route>
                    <Route path="/home" element={<Home />} />

                    <Route path="*" element={<> <Main /><NoPage /></>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Starting