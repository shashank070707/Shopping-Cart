import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="error-div">
                <p>404</p>
                <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
                <h6>THE PAGE YPU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</h6>
                <br />
                <NavLink to="/"><button> BACK TO HOMEPAGE </button></NavLink>
            </div><br/>
        </>
    )
}

export default Error
