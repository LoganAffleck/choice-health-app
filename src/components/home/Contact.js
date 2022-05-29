import React from "react";
import FacebookEmbed from "./FacebookEmbed";

function Contact(){
    return(
        <div className="contactHome">
            <h2>Contact Us</h2>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <p>Phone</p>
                    <p>Email</p>
                    <p>Place an order for in-store pickup or ask us a question:</p>
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input htmlFor="name"></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input htmlFor="email"></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone:</label>
                            <input htmlFor="phone"></input>
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea htmlFor="email"></textarea>
                        </div>

                    </form>
                </div>
            <FacebookEmbed/>
            </div>
        </div>
    )
}

export default Contact;