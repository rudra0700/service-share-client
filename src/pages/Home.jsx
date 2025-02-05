import React, { useEffect, useState } from 'react';
import Slider from '../components/Carousal';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import carryImg from '../assets/lottifiles/box carrying.jpg'
import { MdOutlineMasks } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdSanitizer } from "react-icons/md";
import { GiWinterGloves } from "react-icons/gi";
import axios from 'axios';
import {Helmet} from "react-helmet";

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
       fetchAllServices()
    }, [])

    const fetchAllServices = async  () => {
        const {data} = await axios.get("https://service-sharing-server-one.vercel.app/services")
        setServices(data);
    }
    return (
        <div>
             <Helmet>
                <title>SwiftServe | Home</title>
            </Helmet>
            <Slider></Slider>
            <div className='flex justify-between items-center max-w-7xl mx-auto'>
                <h3 className='mb-4 text-center text-3xl font-semibold'>Popular Services</h3>
                <Link to={'/allServices'} className='font-semibold text-gray-600' >View All</Link>
            </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
              </div>
                {/* schedule section */}
               <div className='max-w-7xl mx-auto mt-14'>
                    <div className='flex items-center gap-3'>
                        <div className='border border-black w-10 h-[1px]'></div>
                        <p>HOW IT WORKS</p>
                    </div>
                    <h3 className='text-3xl font-semibold mt-4'>Easiest way to get a service</h3>
               </div>
               <div className='flex max-w-7xl mx-auto gap-10 items-center mt-5 flex-col lg:flex-row'>
                   <div className='flex-1'>
                      <img src={carryImg} alt="" className='rounded-lg' />
                   </div>
                   <div className='space-y-16'>
                       <div className='flex gap-4 items-center'>
                           <div className='border border-black w-14 text-center h-14 rounded-full flex items-center justify-center btn btn-neutral font-bold text-md'>1</div>
                            <div>
                                <h5 className='text-2xl font-semibold'>Select the Service</h5>
                                <p>Pick the service you are looking for- from the website or the app.</p>
                            </div>
                       </div>
                        <div className='flex gap-4 items-center'>
                           <div className='border border-black w-14 text-center h-14 rounded-full flex items-center justify-center btn btn-neutral font-bold text-md'>2</div>
                            <div>
                                <h5 className='text-2xl font-semibold'>Pick your schedule</h5>
                                <p>Pick your convenient date to avail the service. Pick service provider based on their rating.</p>
                            </div>
                       </div> 
                       <div className='flex gap-4 items-center'>
                           <div className='border border-black w-14 text-center h-14 rounded-full flex items-center justify-center btn btn-neutral font-bold text-md'>3</div>
                            <div>
                                <h5 className='text-2xl font-semibold'>Place Your Order & Relax</h5>
                                <p>Review and place the order. Now just sit back and relax.</p>
                            </div>
                       </div>
                   </div>
               </div>

               {/* why choose us section */}
               <div className='max-w-7xl mx-auto mt-14'>
                    <div className='flex items-center gap-3'>
                        <div className='border border-black w-10 h-[1px]'></div>
                        <p>WHY CHOOSE US</p>
                    </div>
                    <h3 className='text-3xl font-semibold mt-4'>Because we care about your safety..</h3>
               </div>
                <div className='flex max-w-7xl mx-auto gap-10 items-center mt-10 flex-col lg:flex-row'>
                    <div className='grid grid-cols-2 gap-10 flex-1'>
                        <div className='flex items-center gap-4 border p-4 rounded-lg'>
                           <MdOutlineMasks className='text-8xl' />
                            <p className='text-lg'>Ensuring Masks</p>
                        </div>
                        <div className='flex items-center gap-4 border p-4 rounded-lg'>
                            <MdOutlineSupportAgent className='text-8xl' />
                            <p className='text-lg'>24/7 support</p>
                        </div>
                        <div className='flex items-center gap-4 border p-4 rounded-lg'>
                            <MdSanitizer className='text-8xl' />
                            <p className='text-lg'>Sanitising Hands & Equipment <br /></p>
                        </div>
                        <div className='flex items-center gap-4 border p-4 rounded-lg'>
                           <GiWinterGloves className='text-8xl' />
                            <p className='text-lg'>
                            Ensuring
                            Gloves</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src="https://i.ibb.co.com/LQhS5jk/home-safety.jpg" alt="" className='rounded-lg' />
                    </div>
                </div>
        </div>
    );
};

export default Home;