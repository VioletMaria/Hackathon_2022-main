import { useHistory } from "react-router-dom";
import SignupForm from "./Signupform";
import axios from "axios";
import { useState } from "react";

const LoginForm = (props) => {
    const history = useHistory();
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
                                history.push("/dashboard")
                            }
                        })
                        .catch(err => console.log("Error checking userToken in LoginForm", err))
                }
            })
            .catch(err => console.log("get account error", err))
    }

    return (
        <div className="form-group background-image container" style={{ textAlign: "center" }}>
            <form onSubmit={handleLogin}>
                <p style={{ color: "red" }}>{loginErrors?.error}</p>
                <input type="text" name="email" className="form-control" id="email" placeholder="Email: someone@somewhere.com" onChange={(e) => onChangeHandler(e)} /> <br></br><br />
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={(e) => onChangeHandler(e)} /> <br></br> <br></br>
                <button type="submit" variant="primary" >Log In</button>
            </form> <br></br>
            <p>Forgot password?</p>
            <button onClick={() => { history.push("/signinform") }}>Create New Account</button>
        </div >
    )
}

export default LoginForm;