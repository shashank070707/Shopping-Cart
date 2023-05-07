import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Userlogout = () => {

    const history = useHistory();

    const logoutOwner = async (req, res) => {
        try {
            const res = await fetch("/ownerlogout", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            // const data = await res.json();
            //console.log(data);
            history.push("/ownerlogin");
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logoutOwner();
    })

    return (
        <>

        </>
    )
}

export default Userlogout
