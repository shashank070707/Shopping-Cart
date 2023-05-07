import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import proImg from '../images/profile.png'

const Uaccount = () => {

    const [udta, setUdta] = useState({});

    const history = useHistory();

    const verifyUser = async (req, res) => {
        try {
            const res = await fetch("/getuserinformation", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUdta({
                name: data.name,
                email: data.email,
                balance: data.balance,
                phone: data.phone,
                address: data.address
            });
            if (res.status === 422 || !data) {
                const err = new Error(res.error);
                throw err;
            }
        } catch (error) {
            console.log(error);
            history.push("/userlogin")
        }
    }


    useEffect(() => {
        verifyUser();
    },[])

    const addMoney = async(e)=>{
        e.preventDefault();
        const balance = window.prompt("How much money you want to add ? ");
        if(balance>0){
            try {
                const { email } = udta;
                const res = await fetch("/addmoneyinuser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email, balance
                    })
                });
                const data = await res.json();
                if (res.status === 422 || !data) {
                    window.alert(data.msg);
                } else {
                    window.alert(data.msg);
                    verifyUser();
                }
            } catch (error) {
                window.alert(error);
            }
        }else{
            window.alert("Money can't be negative or zero. ");
        }
    }

    return (
        <>
            <div className="container acc-div">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 acc-one">
                        <img className="proImg" src={proImg} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 acc-one">
                        <br /><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="name">Name : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{udta.name}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="email">Email : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{udta.email}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="phone">Phone : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{udta.phone}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="phone">Balance:</lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{udta.balance}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="address">Address : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{udta.address}</strong>
                        </div><br />
                        <br/>
                        <button className="btn btn-outline-primary" onClick={addMoney}>Add Money to account</button>
                    </div>
                </div>
            </div><br/><br/>
        </>
    )
}

export default Uaccount
