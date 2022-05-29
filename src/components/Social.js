import React from 'react';
import {ReactComponent as Facebook} from '../svg/Facebook.svg';
import {ReactComponent as Instagram} from '../svg/Instagram.svg';
import {ReactComponent as Twitter} from '../svg/Twitter.svg';

function Social(){


    return(
        <div className="social">
            <div>
                Follow us
            </div>

            <a href="https://www.facebook.com/choicehealth.healthfoodstore" target="_blank" rel="noreferrer noopener">
            <Facebook alt="Facebook logo" className='socialLogo'/>
            </a>
            
            <a href="https://www.instagram.com/choicehealth.westfield" target="_blank" rel="noreferrer noopener">
            <Instagram alt="Instagram logo" className='socialLogo'/>
            </a>

            <a href="https://twitter.com/choicehealthma" target="_blank" rel="noreferrer noopener">
            <Twitter alt="Twitter logo" className='socialLogo'/>
            </a>
        </div>
    )

}

export default Social;