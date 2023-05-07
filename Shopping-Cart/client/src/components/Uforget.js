import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
const Uforget = () => {

    const [pwd, setPwd] = useState(false);

    const history = useHistory();

    const showPwd = () => {
        if (pwd === true) {
            setPwd(false);
        } else {
            setPwd(true);
        }
    }

    const [user, setUser] = useState({
        email: "",
        password: "",
        cpassword: ""
    })

    let name, value;
    const inputEvent = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const changePass = async(e)=>{
        e.preventDefault();
        try {
            const { email, password, cpassword } = user;
            const res = await fetch("/updateuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password, cpassword
                })
            });
            const data = await res.json();
            if (res.status === 422 || !data) {
                window.alert(data.msg);
            } else {
                window.alert(data.msg);
                history.push("/userlogin");
            }
        } catch (error) {
            window.alert(error);
        }
    }

    return (
        <>
            <div className="container userLoginBlock">
                <h2>Update Password (USER)</h2><br/>
                <form method="POST">
                    
                    <div className="form-group">
                        <label className="name-field">
                            <i class="zmdi zmdi-email"></i>
                            <input required type="email" name="email" className="exampleInputText" aria-describedby="emailHelp" placeholder="Enter email" 
                                value={user.email}
                                onChange={inputEvent}
                            />
                        </label>
                    </div>
                    
                    
                    
                    <div className="form-group">
                        <label className="name-field">
                            <i class="zmdi zmdi-lock"></i>
                            <input required type={pwd === false ? "password" : "text"}
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

                    <input type="checkbox" name="showpwd" value="select" onClick={showPwd} />
                    <lable for="showpwd">  Show Password</lable>
                    <br /><br />

                    <button type="submit" onClick={changePass} className="btn btn-outline-primary">Change Password</button>
                    <br />
                    <NavLink to="/userlogin">Go Back</NavLink><br /><br />
                </form>
            </div>
        </>
    )
}

export default Uforget
