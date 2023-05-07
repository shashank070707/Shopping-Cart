import React,{useState,useEffect} from 'react'

import proImg from '../images/profile.png'

const Account = () => {

    const [item, setItem] = useState({
        name: "",
        email: "",
        category: "",
        organization:"",
        link: "",
        cost: ""
    })

    const [odta,setOdta] = useState({});

    const verifyOwner = async(req,res)=>{
        try {
            const res = await fetch("/getownerinformation", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setOdta({
                name:data.name,
                email:data.email,
                organization:data.organization,
                balance:data.balance,
                phone:data.phone,
                address:data.address
            });
            if (res.status === 422 || !data) {
                const err = new Error(res.error);
                throw err;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        verifyOwner();
    })

    let name,value;
    const inputEvent = (e)=>{
        name=e.target.name;
        value=e.target.value;
        setItem({ ...item, [name]: value, email: odta.email, organization: odta.organization})
    }

    const addItem = async(e)=>{
        e.preventDefault();
        const {name,email,category,organization,link,cost} = item;
        const res = await fetch("/additem",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, category,organization, link, cost
            })
        });
        const data = await res.json();
        if (res.status === 422 || !data) {
            window.alert("Something wrong. Cant't add item!");
        } else {
            window.alert("Item added successfully!");
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
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{odta.name}</strong>
                        </div><br/>    
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="email">Email : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{odta.email}</strong>
                        </div><br/>  
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="phone">Phone : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{odta.phone}</strong>
                        </div><br/>    
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="phone">Organization:</lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{odta.organization}</strong>
                        </div><br />  
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="phone">Balance:</lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{odta.balance}</strong>
                        </div><br />
                        <div className="row">
                            <lable className="col-lg-4 col-md-4 col-sm-5 col-5" for="address">Address : </lable>
                            <strong className="col-lg-8 col-md-8 col-sm-7 col-7">{odta.address}</strong>
                        </div><br/>                                              
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 acc-one">
                        <h2>Add Item Here</h2>
                        <form method="POST">
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="fas fa-tshirt"></i>
                                    <input type="name" name="name" className="exampleInputText" placeholder="Enter item name" autoComplete="off"
                                        value={item.name}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-email"></i>
                                    <input disabled type="email" name="email" className="exampleInputText" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off"
                                        value={odta.email}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="fas fa-arrow-right"></i>
                                    <input type="text" name="category" className="exampleInputText" autoComplete="off" placeholder="Enter item Category"
                                        value={item.category}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="zmdi zmdi-balance"></i>
                                    <input disabled type="text" name="organization" className="exampleInputText" autoComplete="off" placeholder="Enter organization name"
                                        value={odta.organization}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="fas fa-link"></i>
                                    <input type="text" name="link" className="exampleInputText" placeholder="Paste your link " autoComplete="off"
                                        value={item.link}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="name-field">
                                    <i class="fas fa-rupee-sign"></i>
                                    <input type="number" name="cost" className="exampleInputText" placeholder="Enter cost of item " autoComplete="off"
                                        value={item.cost}
                                        onChange={inputEvent}
                                    />
                                </label>
                            </div>
                            <button type="submit" onClick={addItem} className="btn btn-outline-primary">Add item</button>
                            <br />
                        </form>
                    </div> 
                </div>
            </div><br/>
        </>
    )
}

export default Account
