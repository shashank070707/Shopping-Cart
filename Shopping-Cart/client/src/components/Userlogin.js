import React, { useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'

import loginImg from "../images/login.png" 

const Userlogin = () => {

    const history = useHistory();

    const [pwd, setPwd] = useState(false);

    const showPwd = () => {
        if (pwd === true) {
            setPwd(false);
        } else {
            setPwd(true);
        }
    }

    const [user,setUser] = useState({
        email:"",
        password:""
    })

    let name,value;
    const inputEvent = (e)=>{
        name = e.target.name
        value = e.target.value 
        setUser({...user,[name]:value})
    }

    const getUser =async(e)=>{
        e.preventDefault();
        const {email,password} = user;
        const res = await fetch("/loginbuyer",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, password
            })
        }); 

        const data = await res.json();
        if(res.status === 422 || !data){
            window.alert("Login Failed");
        }else{
            window.alert("You logged in successfull");
            history.push("/");
        }
    }

    return (
        <>
            <div className="container userLoginBlock">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className="login-image" src={loginImg} alt="login_image" /><br /><br />

                        <br />
                    </div>
                    <div style={{ paddingLeft: "50px", paddingRight: "50px" }} className="col-lg-6 col-md-6 col-sm-12">
                        <div className="signIn">User Login</div><br />
                        <form method="POST">
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-email"></i>
                                    <input type="email" name="email" className="exampleInputText"
                                        value={user.email}
                                        onChange={inputEvent}
                                        aria-describedby="emailHelp" placeholder="Enter email" />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-lock"></i>
                                    <input type={pwd === false ? "password" : "text"}
                                        name="password" className="exampleInputText"
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={inputEvent}
                                        placeholder="Enter password" />
                                </label>
                            </div>

                            <input type="checkbox" name="showpwd" value="select" onClick={showPwd} />
                            <lable for="showpwd">  Show Password</lable>
                            <br /><br />
                            <button onClick={getUser} type="submit" className="btn btn-outline-primary">Login</button><br /><br />

                            <NavLink to="/userregister">Don't have an account</NavLink>
                            <NavLink style={{ marginLeft: "25px" }} to="/uforget">Forget password</NavLink><br /><br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlogin
