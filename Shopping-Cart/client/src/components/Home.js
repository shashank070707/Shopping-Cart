import React from 'react'

import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className=" bg-image home-back">
                
                <div className="text-center text-light bg-text">
                    <br /><br />
                    <h1>WELCOME TO SHOPPING CART</h1>
                    <h1>WE PROVIDE YOU A BETTER QUALITY PRODUCTS</h1>
                    <br /><br /><br /><br />
                    <h3 className="text-info">Availabe Categories of items :</h3>
                    <h3 className="text-info">1. Food</h3>
                    <h3 className="text-info">2. Vehicles</h3>
                    <h3 className="text-info">3. Mobiles</h3>
                    <h3 className="text-info">4. Cloth</h3>
                    <h3 className="text-info">5. Furniture</h3>
                    <h3 className="text-info">6. Books</h3>
                    <h3 className="text-info">7. Beauty Care</h3>
                    <h3 className="text-info">8. Electrical</h3>
                    
                    <br /><br /><br /><br />
                    <button className="btn btn-outline-secondary bg-danger"><NavLink className=" text-light" to="/shop">Start Shooping ==) </NavLink></button>
                </div>
                
            </div>
        </>
    )
}

export default Home
