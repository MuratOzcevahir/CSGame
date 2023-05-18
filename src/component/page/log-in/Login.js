import React, { useContext, useEffect, useState } from 'react'
import "./css/login.css"
import CryptoJS from 'crypto-js';
import { useNavigate, useParams } from 'react-router-dom'
import { appContext } from '../../context/AppContext';
import {secretPass} from '../../context/Crpyto';
function Login() {
    var ctx = useContext(appContext)
    var b=1;
    var navigategame = useNavigate()
    var navigate = new useNavigate()
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    var user = {}
    function UserLogin() {
        // var user = ctx.USERLOG({ username: userName, userpassword: userPassword })
        // ctx.setcurrentuser(user)
        // ctx.currentgameuser = user
        // console.log(ctx.currentgameuser)

        console.log(secretPass)
        ctx.SetGameUser({
            type: "USER_LOGIN",
            username: userName,
            userpassword: userPassword,
            completed: (user) => {
                ctx.setcurrentuser(user)
                ctx.currentgameuser = user;
                console.log(ctx.currentgameuser, " giren kullanıcı")
                var userc = CryptoJS.AES.encrypt(
                    JSON.stringify(ctx.currentgameuser),
                    secretPass
                ).toString();
                console.log("userjson ", userc)
                setCookie("user", userc, 9000)

                ctx.SetGameUser({
                    type: "USER_LOAD_GAME", id: ctx.currentgameuser.Id  
         
                })

             navigategame("/home")

            }
        })


    }
    return (
        <>
            <div id='_loginHolder' className=''>

                <div className='container-fluid d-flex flex-column text-center p-0 m-0'>
                    <p>Login</p>
                    <hr />
                </div>
                <div className='container-fluid text-center'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-12 col-lg-7 p-0 m-0 text-center justify-content-center ' >
                            <div className='d-flex flex-column align-items-center'>
                                <div className='d-flex flex-column inputHolder'>
                                    <label htmlFor='userName' className='text-start'>User name</label>
                                    <input onChange={(e) => { setUserName(e.target.value) }} value={userName} id='userName' type="text" name="userName" placeholder='eg; kediko' />
                                </div>
                                <div className='d-flex flex-column inputHolder '>
                                    <label htmlFor='password' className='text-start'>Password</label>
                                    <input onChange={(e) => { setUserPassword(e.target.value) }} value={userPassword} id='password' type="password" name="userName" placeholder='eg; ****' />
                                </div>
                                <div className='inputHolder'>
                                    <button type="button" onClick={

                                        UserLogin

                                    } >Login</button>
                                </div>
                                <span className='d-flex'>If you dont have an account <a href='/sign-in'> create here </a> </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Login
