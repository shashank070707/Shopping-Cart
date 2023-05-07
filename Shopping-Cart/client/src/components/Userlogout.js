import React, { useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const Userlogout = () => {

    const history = useHistory();

    const logoutUser = async (req, res) => {
        try {
            const res = await fetch("/userlogout", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            // const data = await res.json();
            //console.log(data);
            history.push("/userlogin");
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logoutUser();
    })

    return (
        <>
            
        </>
    )
}

export default Userlogout