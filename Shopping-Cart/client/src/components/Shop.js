import React, {useState, useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'

import Categorynav from './Categorynav'
import Itemcard from './Itemcard';

const Shop = () => {
    const {cate} = useParams();
    
    const [item, setItem] = useState([]);
    const [user,setUser] = useState({
        email:""
    });

    const history = useHistory();

    const verifyUser = async(req,res)=>{
        try {
            const res = await fetch("/getuserinformation", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const userData = await res.json();
            setUser({
                email:userData.email
            })
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            window.alert("You need to login first.");
            history.push("/userlogin");
        }
    }

    const getItems = async (req, res) => {
        try {
            const res = await fetch("/getitems", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setItem(data);
            if (res.status !== 200 || !data) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCategoryWiseItems = async()=>{
        try {
            const res = await fetch("/cateitems", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cate
                })
            });
            const data = await res.json();

            setItem(data);

            if (res.status !== 200 || !data) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(cate===undefined){
            getItems();
        }else{
            getCategoryWiseItems();
        } 
    })

    const addtoCart = async(id,name,link,cost,organization)=>{
        verifyUser();
        if(user.email !== ""){
            let email = user.email;
            let itemId = id;
            try {
                const res = await fetch("/addtocart", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email, itemId, name, link, cost, organization
                    })
                })
                // window.alert(data.message);
                if (res.status === 200) {
                    window.alert("Item added to cart successfully!!");
                } else if (res.status === 422) {
                    window.alert("This item was already added to cart!!");
                } else {
                    const err = new Error(res.error);
                    throw err;
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <Categorynav />
            <div className="container shop-div">
                {
                    item.map((currEle,Ind)=>{
                        return(
                            <Itemcard
                                id={item[Ind]._id}
                                name={currEle.name}
                                link={currEle.link}
                                cost={currEle.cost}
                                organization={currEle.organization}
                                clickEvent={addtoCart}
                                text = "Add to cart"
                            />
                        )
                    })
                }
            </div>
            <br/><br/>
        </>
    )
}

export default Shop
