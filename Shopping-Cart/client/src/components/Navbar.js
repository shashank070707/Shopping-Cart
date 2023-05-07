import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const Render =()=>{

        return (
            <>
                <li className="nav-item  active">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" to="/"><b>Home</b> </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" to="/shop"><b>Shop</b></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" title="Your Cart" to="/cart"><b>My cart</b></NavLink>
                </li>
                <li>
                    <b class="nav-link text-light dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                    </b>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/uaccount">User account</NavLink>
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/oaccount">Owner account</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active-class" className="nav-link text-light" to="/contact"><b>Contact</b></NavLink>
                </li>
                <li>
                    <b class="nav-link text-light dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Login
                    </b>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/userlogin">Login as User</NavLink>
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/ownerlogin">Login as Owner</NavLink>
                    </div>
                </li>


                <li>
                    <b class="nav-link text-light dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Register
                    </b>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/userregister">Register as User</NavLink>
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/ownerregister">Register as Owner</NavLink>
                    </div>
                </li>


                <li>
                    <b class="nav-link text-light dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Logout
                    </b>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/userlogout">Logout as User</NavLink>
                        <NavLink exact activeClassName="active-class" className="nav-link text-dark" class="dropdown-item" to="/ownerlogout">Logout as Owner</NavLink>
                    </div>
                </li>  
            </>
        )
    }

    return (
        <>
            <div className="bg-dark">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark container">
                    <spam className="navbar-brand text-danger"><i class="fas fa-shopping-cart"></i> Shopping Cart </spam>
                    <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-left ml-auto text-center">
                            <Render/>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar