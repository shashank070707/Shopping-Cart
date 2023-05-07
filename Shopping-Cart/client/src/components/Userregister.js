import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'

import signUpImg from '../images/signup.png';

const Userregister = () => {

    const history  = useHistory();

    const[pwd,setPwd] = useState(false);

    const showPwd = () =>{
        if(pwd === true){
            setPwd(false);
        }else{
            setPwd(true);
        }
    }

    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        balance:"",
        password:"",
        cpassword:""
    })

    let name,value;
    const inputEvent = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }

    const addUser =async(e)=>{
        e.preventDefault();
        const { name, email, phone, address, balance, password, cpassword } = user;
        const res = await fetch("/registerbuyer",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, address, balance, password, cpassword
            })
        });
        const data = await res.json();
        if(res.status === 422 || !data){
            window.alert("Registration Failed!");
        }else{
            history.push("/userlogin");
            window.alert("Registration Successfull!");
        }
    }

    return (
        <>
            <div className="container register-block">
                <div class="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-lg-5 p-md-5 p-sm-5 order-lg-1 order-md-1 order-sm-2 order-2 ">
                        <div className="signUp">User Registration</div><br />
                        <form method="POST">   
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-account"></i>
                                    <input type="name" name="name" className="exampleInputText" placeholder="Enter name" autoComplete="off"
                                        value={user.name}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-email"></i>
                                    <input required type="email" name="email" className="exampleInputText" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off"
                                        value={user.email}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-phone"></i>
                                    <input required type="phone" name="phone" className="exampleInputText" placeholder="Enter mobile number" autoComplete="off"
                                        value={user.phone}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-home"></i>
                                    <input required type="text" name="address" className="exampleInputText" placeholder="Enter your address" autoComplete="off"
                                        value={user.address}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-home"></i>
                                    <input required type="number" name="balance" className="exampleInputText" placeholder="Add some money" autoComplete="off"
                                        value={user.balance}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-lock"></i>
                                    <input required type={pwd===false ? "password" : "text"}
                                        name="password"
                                        className="exampleInputText"
                                        placeholder="Enter password"
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-lock-outline"></i>
                                    <input required type={pwd === false ? "password" : "text"}
                                        name="cpassword"
                                        className="exampleInputText"
                                        placeholder="Confirm your password"
                                        autoComplete="off"
                                        value={user.cpassword}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>

                            <input required type="checkbox" name="showpwd" value="select" onClick={showPwd} />
                            <lable for="showpwd">  Show Password</lable>
                            <br /><br />

                            <button type="submit" onClick={addUser} className="btn btn-outline-primary">Register</button>
                            <br/>
                            <NavLink to="/userlogin">Already have an account</NavLink><br/><br/>
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 order-sm-1">
                        <img className="regi-image" src={signUpImg} alt="register_image" />
                    </div>
                </div>
            </div>
            <br/><br/>
        </>
    )
}

export default Userregister
