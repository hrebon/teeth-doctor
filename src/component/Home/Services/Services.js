import React from 'react';
import fluoride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const serviceData = [
    {
        name: 'Flouride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: teeth
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color: '#3A4256'}}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='w-75 row mt-5 pt-5'>
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;