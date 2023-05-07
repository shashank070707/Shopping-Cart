import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'

import loginImg from "../images/login.png"

const Ownerlogin = () => {

    const history = useHistory();

    const [pwd, setPwd] = useState(false);

    const showPwd = () => {
        if (pwd === true) {
            setPwd(false);
        } else {
            setPwd(true);
        }
    }

    const [owner, setOwner] = useState({
        email: "",
        password: "",
    })

    let name, value;
    const inputEvent = (e) => {
        name = e.target.name;
        value = e.target.value;
        setOwner({ ...owner, [name]: value })
    }

    const getOwner = async (e) => {
        e.preventDefault();
        const { email, password} = owner;
        const res = await fetch("/loginowner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Login Failed!");
        } else {
            history.push("/");
            window.alert("You logged in!");
        } 
    }

    return (
        <>
            <div className="container userLoginBlock">
                <div className="row">
                    <div style={{ paddingLeft: "50px", paddingRight: "50px" }} className="col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1 order-sm-2 order-2">
                        <div className="signIn">Owner Login</div><br />
                        <form method="POST">
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-email"></i>
                                    <input type="email" name="email" className="exampleInputText"
                                        value={owner.email}
                                        onChange={inputEvent}
                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-lock"></i>
                                    <input type={pwd===false ? "password" : "text"} 
                                        name="password" className="exampleInputText"
                                        autoComplete="off"
                                        value={owner.password}
                                        onChange={inputEvent}
                                        placeholder="Enter password" />
                                </label>
                            </div>

                            <input type="checkbox" name="showpwd" value="select" onClick={showPwd} />
                            <lable for="showpwd">  Show Password</lable>
                            <br /><br />
                            <button onClick={getOwner} type="submit" className="btn btn-outline-primary">Login</button><br /><br />

                            <NavLink to="/ownerregister">Don't have an account</NavLink>
                            <NavLink style={{ marginLeft: "25px" }} to="/oforget">Forget password</NavLink><br /><br />
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 order-sm-1">
                        <img className="login-image" src={loginImg} alt="login_image" /><br /><br />

                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ownerlogin
