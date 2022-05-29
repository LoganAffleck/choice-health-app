import React from 'react';

function Hero() {

    return(
        <div className="hero">
            <img src="http://choicehealthwestfield.com/wp-content/uploads/2019/03/IMG_1276-front-header.jpg" alt="The Choice Health Store." className="heroImage"/>
            <div className="heroText">
                <h1>Choice Health</h1>
                <p>Prevention is superior to treatment.</p>
                <p>Monday – Saturday 10am to 6pm</p>
                <a href="tel: 413-568-8333">413-568-8333</a>
                <p>307 East Main Street, <br/> Westfield, MA 01085</p>
                <a href="https://www.google.com/maps/place/Choice+Health+-+Health+Food+Store/@42.112528,-72.726389,15z/data=!4m5!3m4!1s0x89e71e3be9fc177b:0x9a3c1b4368d765bc!8m2!3d42.1126964!4d-72.7264321?hl=en-US">Visit Our Store</a>
            </div>
        </div>
    )

}

export default Hero;