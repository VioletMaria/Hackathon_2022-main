import React, { useState } from 'react'
import school from "../styles/icons8-school-64.png"
import food from "../styles/icons8-foods-64.png"
import house from "../styles/icons8-house-64.png"
import axios from 'axios'


const Dashboard = () => {

    const [tempLogin, setTempLogin] = useState({});
    const [loginErrors, setLoginErrors] = useState({});


    const onChangeHandler = (e) => {
        setTempLogin({
            ...tempLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        // validate then axios call to submit.
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login", tempLogin, { withCredentials: true })
            .then(res => {
                console.log("response when logging in", res)
                if (res.data.error) {
                    setLoginErrors(res.data)
                } else {
                    axios.get("http://localhost:8000/api/users/getLoggedInUser", { withCredentials: true })
                        .then(res => {
                            if (res.data.results) {
                                sessionStorage.setItem("user", JSON.stringify(res.data.results))
                                // console.log(sessionStorage.getItem("user"))
                                sessionStorage.getItem("user")
                            }
                        })
                        .catch(err => console.log("Error checking userToken in LoginForm", err))
                }
            })
            .catch(err => console.log("get account error", err))
    }

    return (
        <div>
            <body>
                <div class="header">
                    <div class="header-left-back">
                        <div class="header-left"></div>
                    </div>
                    <div class="header-right">
                        <h2 class="heading-text">Our mission</h2>
                        <p class="header-text">Our team wanted to find an optimal way to help social issues in Ukraine. Although it is common to find websites with resources, to housing, schooling and food access, at this time. We believe finding help should be easy. That is why we created space where all these resources can come together in a categorized way.</p>
                        <div class="content-box">
                            <img src={school} alt="school icon" width="30px" height="30px" />
                            <img src={food} alt="food icon" width="30px" height="30px" />
                            <img src={house} alt="house icon" width="30px" height="30px" />
                        </div>
                        <h2 class="heading">How you can help</h2>
                        <p class="header-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae molestiae reiciendis doloremque, quae quis nobis rerum recusandae labore fugit itaque, vero quo id, earum similique eligendi veniam deserunt praesentium quod! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi modi vel numquam velit! Quaerat blanditiis quas omnis molestiae dolorem veritatis, odit asperiores doloribus, laboriosam eaque sed quia, debitis exercitationem tempora.</p>
                    </div>
                </div>
                <div class="post-back">
                    <div class="single-post">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>

                    <div class="single-post">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>

                    <div class="single-post">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>

                    <div class="single-post">
                        <div class="provider-info">
                            <p class="time-stamp">1 hour ago</p>
                            <h2 class="provider-name">Name of Providers Establishment</h2>
                            <p><span class="highlight">[Nearby]</span>(Location upon approval)</p>
                            <p><i>(Number) users have pending requests for <span class="highlight">(resource name)</span> at this location.</i></p>
                        </div>
                        <div class="card-btns">
                            <div>
                                <h3>Food</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div>
                                <h3>Housing</h3>
                                <p>() Available</p>
                                <p>() Claimed</p>
                            </div>
                            <div class="request">
                                <h3>Send Request</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="register-back" id="login">
                    <form onSubmit={handleLogin}>
                        <div className="background-form">
                            <div className="front-form">
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Password" />
                                <button type="submit">Log in</button>
                            </div>
                            <div className="signup">
                                <h2>Don't have an account?</h2>
                                <button>Sign up</button>
                            </div>
                        </div>
                    </form>
                    <div className="footer">
                        <p>Have a problem?</p>
                        <p>Contact us at: resourceukraine@gmail.com</p>
                    </div>
                </div>
            </body >
        </div >
    )
}

export default Dashboard