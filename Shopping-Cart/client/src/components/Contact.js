import React,{useState,useEffect} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [udta, setUdta] = useState({});

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
            const data = await res.json();
            setUdta({
                name: data.name,
                email: data.email,
                phone: data.phone,
                balance: data.balance,
                address: data.address
            });
            if (res.status === 422 || !data) {
                const err = new Error(res.error);
                throw err;
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        verifyUser();
    }, [])

    const sendMail = async (e) => {
        e.preventDefault();
        try {
            const con = window.confirm("Do you want to send mail to ShoppingCart ?");
            if (con) {
                await emailjs.sendForm('service_vwvy6rx', 'template_iie1jds', e.target, 'user_GV6Gj19hil0Fd7h57Cgt8');
                window.alert('Message has been sent. Thank you!! \nFor forward information please check your email once.');
            }
        } catch (error) {
            // window.alert(error);
            console.log(error);
        }
    }

    return (
        <>
            <div className="row contact-head-div">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="contact-first-div">
                        <div className="contact-icons" ><i class="fas fa-mobile"></i></div>
                        <div className="inContact-div">Phone <br /> {udta.phone}</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="contact-second-div">
                        <div className="contact-icons" ><i class="fas fa-envelope"></i></div>
                        <div className="inContact-div">Email <br /> {udta.email}</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="contact-third-div">
                        <div className="contact-icons" ><i class="fas fa-map-marked-alt"></i></div>
                        <div className="inContact-div">Address<br /> {udta.address}</div>
                    </div>
                </div>
            </div>

            <div className="contact-main">
                <div className="container">
                    <div className="contactUs">Contact us</div><br />
                    <form onSubmit= {sendMail}>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <input
                                    className="contact-data-div"
                                    type="name"
                                    name="name"
                                    value={udta.name}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <input
                                    className="contact-data-div"
                                    type="email"
                                    name="user_email"
                                    value={udta.email}
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <input
                                    className="contact-data-div"
                                    type="phone"
                                    name="phone"
                                    value={udta.phone}
                                    placeholder="Your mobile number"
                                />
                            </div>
                        </div><br /><br /><br />
                        <textarea
                            className="contact-message"
                            type="text"
                            name="message"
                            placeholder="Message"
                        ></textarea><br /><br />
                        <input type="submit" value="Send Message" style={{ marginLeft: "10%" }} className="btn btn-outline-primary" />
                    </form>
                </div>
            </div>
            <br/><br/>
        </>
    )
}

export default Contact
