import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard discription="You can visit our site any time" CardTitle="Opening Hours" img={clock} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard discription="Visit Our site for more details" CardTitle="Visit Our Location" img={marker} bgClass="bg-[#3A4256]"></InfoCard>
            <InfoCard discription="Sent us message or call for contact or serial" CardTitle="Contact Us Now" img={phone} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;