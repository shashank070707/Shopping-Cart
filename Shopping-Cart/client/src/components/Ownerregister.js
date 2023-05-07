import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import signUpImg from '../images/signup.png';

const Ownerregister = () => {

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
        name: "",
        email: "",
        phone: "",
        organization:"",
        address: "",
        password: "",
        cpassword: ""
    })

    let name, value;
    const inputEvent = (e) => {
        name = e.target.name;
        value = e.target.value;
        setOwner({ ...owner, [name]: value })
    }

    const addOwner = async (e) => {
        e.preventDefault();
        const { name, email, organization, phone, address, password, cpassword } = owner;
        const res = await fetch("/registerowner", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, organization, phone, address, password, cpassword
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Registration Failed!");
        } else {
            history.push("/ownerlogin");
            window.alert("Registration Successfull!");
        }
    } 

    return (
        <>
            <div className="container register-block">
                <div class="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 order-sm-1">
                        <img className="regi-image" src={signUpImg} alt="register_image" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-lg-5 p-md-5 p-sm-5 order-lg-1 order-md-1 order-sm-2 order-2 ">
                        <div className="signUp">Owner Registration</div><br />
                        <form method="POST">
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-account"></i>
                                    <input type="name" name="name" className="exampleInputText" placeholder="Enter name" autoComplete="off"
                                        value={owner.name}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-email"></i>
                                    <input type="email" name="email" className="exampleInputText" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off"
                                        value={owner.email}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-balance"></i>
                                    <input type="text" name="organization" className="exampleInputText" aria-describedby="emailHelp" placeholder="Enter organization name" autoComplete="off"
                                        value={owner.organization}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-phone"></i>
                                    <input type="phone" name="phone" className="exampleInputText" placeholder="Enter mobile number" autoComplete="off"
                                        value={owner.phone}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-home"></i>
                                    <input type="text" name="address" className="exampleInputText" placeholder="Enter your address" autoComplete="off"
                                        value={owner.address}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-lock"></i>
                                    <input type={pwd === false ? "password" : "text"}
                                        name="password"
                                        className="exampleInputText"
                                        placeholder="Enter password"
                                        autoComplete="off"
                                        value={owner.password}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-lock-outline"></i>
                                    <input type={pwd === false ? "password" : "text"}
                                        name="cpassword"
                                        className="exampleInputText"
                                        placeholder="Confirm your password"
                                        autoComplete="off"
                                        value={owner.cpassword}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>

                            <input type="checkbox" name="showpwd" value="select" onClick={showPwd}/>
                            <lable for="showpwd">  Show Password</lable>
                            <br /><br />

                            <button type="submit" onClick={addOwner} className="btn btn-outline-primary">Register</button>
                            <br />
                            <NavLink to="/ownerlogin">Already have an account</NavLink><br /><br />
                        </form>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )
}

export default Ownerregister
