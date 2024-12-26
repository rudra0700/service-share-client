import React from 'react';
import Slider from '../components/Carousal';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
             <h3 className='mb-4 text-center text-3xl font-semibold'>Popular Services</h3>
             <Link to={'/allServices'}>View All</Link>
            </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                   <ServiceCard></ServiceCard>
                   <ServiceCard></ServiceCard>
                   <ServiceCard></ServiceCard>
                   <ServiceCard></ServiceCard>
                   <ServiceCard></ServiceCard>
                   <ServiceCard></ServiceCard>
              </div>
        </div>
    );
};

export default Home;