import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom';
import Itemcard from './Itemcard';

const Cart = () => {

    const [item, setItem] = useState([]);
    const [user, setUser] = useState({
        email: ""
    });
    const [owner,setOwner]=useState({
        email:""
    })
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
            const userData = await res.json();
            // window.alert(userData.email);
            setUser({
                email: userData.email
            })
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            history.push("/userlogin");
        }
    }

    const getItems = async (req, res) => {
        let email = user.email;
        try {
            const res = await fetch("/getcartdata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({email})
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

    useEffect(() => {
        verifyUser();
        getItems();
    })

    const getOwnerEmail = async (itemid) => {
        try {
            const res = await fetch("/getowneremail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemid
                })
            });
            const data = await res.json();
            // window.alert(data.email);
            setOwner({email:data.email});

            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            window.alert(error);
        }
    }

    const decuser = async(cost)=>{
        try {
            let email = user.email;
            let email2 = owner.email;
            // window.alert(email);
            const res = await fetch("/buyoperation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,email2, cost
                })
            });
            const data = await res.json();
            if(res.status !== 200){
                const err = new Error(res.error);
                throw err;
            }else{
                return (data);
            }
        }catch(err){
            window.alert(err + " dec");
        }
    }

    const remo = async(id)=>{
        try{
            const email = user.email;
            const res = await fetch("/delitem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, id
                })
            });
            if (res.status !== 200) {
                const err = new Error(res.error);
                throw err;
            }
        }catch(err){
            window.alert(err);
        }   
    }

    const buyNow = async(id, name, link, cost, organization)=>{
        try {
            getOwnerEmail(id);
            if(owner.email ===""){
                window.alert("Click on buy now again please.");
            }else{
                const msg = await decuser(cost);
                if (msg.message === "You have no enough money."){
                    window.alert(msg.message);
                }else{
                    // window.alert(msg.message);
                    history.push("/success");
                    remo(id);
                }
            }   
                   
        } catch (error) {
           window.alert(error);
        }
    }

    
    if(item.length === 0){
        return(
            <>
                <div className="container shop-div">
                    <br/><br/>
                    <h1 className="text-center mt-5">Nothing is added to your cart yet. </h1>
                </div>
            </>
        )
    }else{
        return(
            <>
                <div className="container shop-div"> 
                    {
                        item.map((currEle, Ind) => {
                            return (
                                <Itemcard
                                    id={item[Ind].itemid}
                                    name={currEle.name}
                                    link={currEle.link}
                                    cost={currEle.cost}
                                    organization={currEle.organization}
                                    clickEvent={buyNow}
                                    text = "Buy Now"
                                />
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Cart