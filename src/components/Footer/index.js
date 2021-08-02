import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <div className='footer'>
            <span>© Copyrights 2019 Stack. All Rights Reserved.</span>
            <div className='terms'>
                <span>Privacy Policy</span>
                <span>Terms and Conditions</span>
            </div>
        </div>
    );
}


export default Footer;