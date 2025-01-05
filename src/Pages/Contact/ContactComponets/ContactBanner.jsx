import React from 'react';
import HeroCover from '../../Shared/HeroCover';
import contactimg from '../../../assets/contact/banner.jpg'

const ContactBanner = () => {
    return (
        <div>
            <HeroCover img={contactimg} title={'CONTACT US'} subtitle={'Would you like to try a dish?'}/>
            
        </div>
    );
};

export default ContactBanner;