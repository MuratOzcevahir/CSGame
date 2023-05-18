import React, { useContext, useState } from 'react'
import { appContext } from '../../context/AppContext'

import emailjs from "@emailjs/browser"
import "./css/sign.css"
import IconGenerate from '../home/home-items/icon-generate/IconGenerate'
function Sign() {
    var ctx = useContext(appContext)
    const [userName, setuserName] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userCreateErr, setuserCreateErr] = useState("")
    const [userCreateSuccess, setuserCreateSuccess] = useState("")
    function SignIn() {
        var newUser = {
            Nickname: userName,
            ProfileName: "",
            Password: userPassword,
            Email: userEmail,
            CreatedDate: ""
        }

        ctx.SetGameUser({
            type: "USER_CREATE_NEW", userObj: newUser, IsUserCreated: (res) => {

                console.log(res)
                if (res == "E_N_ERROR") {
                    setuserCreateErr("E-mail or Nickname are already in use")
                    setuserCreateSuccess("")

                }
                else if (res == "USER_CREATE_ERROR") {
                    setuserCreateErr("Something happened, could not create")
                    setuserCreateSuccess("")
                }
                else if (res == "USER_CREATED") {

                    setuserCreateSuccess(`check ${userEmail}`)
                    setuserCreateErr("");
                }
                else if (res == "PASSWORD_ERROR") {
                    setuserCreateErr("Password needs a number and a special character at least")
                    setuserCreateSuccess("")
                }
            }
        })


    }

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("çakıştı")
        SignIn()

        console.log("çaıştı")
        e.preventDefault();
        console.log(e.target, " targeeeeeet");
        if (userCreateSuccess) {

        }
        emailjs.sendForm('service_m6znkzj', 'template_hg296jq', e.target, 'USSEVhj_pcFaOdnhX')
    }
    return (
        <>
            <div id='_signHolder' className=''>
                <div className='container-fluid d-flex flex-column text-center p-0 m-0'>
                    <p>Sign Up</p>
                    <hr />
                </div>


                <div className='container-fluid text-center'>
                    <div className='row d-flex justify-content-center'>

                        <div className='col-12 col-lg-7 p-0 m-0 text-center justify-content-center ' >
                            <div className='d-flex flex-column align-items-center'>
                                <form className='w-100 d-flex flex-column align-items-center' onSubmit={sendEmail}>

                                    <div className='d-flex flex-column inputHolder'>
                                        <span className='_userErr'> {userCreateErr}</span>
                                        {
                                            userCreateSuccess != "" ? <span className='_userSuccess'> {userCreateSuccess}<a href='/log-in'> login here </a></span> : ""
                                        }
                                        <label htmlFor='userName' className=''>User name</label>
                                        <input onChange={(e) => { setuserName(e.target.value) }} value={userName} id='userName' type="text" name="email_name" placeholder='eg; kediko' />
                                    </div>
                                    <div className='d-flex flex-column inputHolder '>

                                        <label htmlFor='password' className=''>Password</label>
                                        <input onChange={(e) => { setuserPassword(e.target.value) }} value={userPassword} id='password' type="password" name="userPassword" placeholder='eg; ****' />
                                    </div>

                                    <div className='d-flex flex-column inputHolder '>
                                        <label htmlFor='eMail' className=''>e-Maile</label>
                                        <input onChange={(e) => { setuserEmail(e.target.value) }} value={userEmail} id='eMail' type="text" name="email_to" placeholder='eg; kediko@.com' />
                                    </div>
                                    <div id="_warning" className='d-flex align-items-center justify-content-center'>
                                        <IconGenerate iconName="release_alert" size="12" color="255,20,110" />
                                        <span>  fill all fields</span>
                                    </div>



                                    <div className=' inputHolder'>
                                        <button onClick={() => {


                                        }} type="submit" >Sign-up</button>
                                    </div>

                                </form>
                                <span className='d-flex'>If you already have an account  <a href='/log-in'> login here </a> </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}
export default Sign