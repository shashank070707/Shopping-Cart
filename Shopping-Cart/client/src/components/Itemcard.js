import React from 'react'

const Itemcard = (props) => {

    const addCartEvent = ()=>{
        props.clickEvent(props.id,props.name,props.link,props.cost,props.organization);
    }

    return (
        <>
            <div> 
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" style={{ float: "left" }}>
                    <div className="card2-div">
                        <div className="card" style={{ border: "1px solid black" }}>
                            <img className="card-img-top card-image"
                                src={props.link}
                                alt={props.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{props.name}</h5>
                                <h4 className="card-text">₹ {props.cost}/-</h4>
                                <p>Sold By : {props.organization}</p>
                                <button style={{ marginBottom: "20px" }} onClick={addCartEvent} className="btn btn-primary">{props.text}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>   
    );
}

export default Itemcard
