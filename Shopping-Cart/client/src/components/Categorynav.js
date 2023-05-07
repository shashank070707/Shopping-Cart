import React from 'react'
import { NavLink } from 'react-router-dom'

const Categorynav = (props) => {
    return (
        <>
            <br/>
            <div className="bg-light">
                <nav className="navbar   navbar-light bg-light container">
                    <div className="bg-info" style={{ width: "100%" }}>
                            <ul className="navbar-nav ml-auto bg-light">
                            <div className="row">
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div active">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop">All</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/food">Food</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/vehicle">Vehicles</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/mobile">Mobiles</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/cloth">Cloth</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/furniture">Furniture</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/book">Books</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/beautycare">Beauty Care</NavLink>
                            </li>
                            <li className="nav-item col-lg-1 col-md-3 col-sm-4 col-4 cate-div">
                                <NavLink exact activeClassName="active-class" className="nav-link text-dark" to="/shop/electrical">Electrical</NavLink>
                            </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Categorynav
