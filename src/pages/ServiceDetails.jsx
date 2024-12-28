import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {Helmet} from "react-helmet";

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [service, setService] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
       fetchSingleService();
    }, [id])

    const fetchSingleService = async () => {
        const {data} = await axios.get(`https://service-sharing-server-one.vercel.app/service/${id}`);
        console.log(data);
        setService(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
          <Helmet>
            <title>SwiftServe | Service Details</title>
           </Helmet>
        {/* provider Details */}
        <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
          <div>
            <div className='ml-2'>
                <img
                  src={service.provider?.photo}
                  referrerPolicy='no-referrer'
                  className='w-14 h-14 object-cover rounded-full'
                  alt='provider image'
                />
              </div>
            <p className='mt-6 text-sm font-bold text-gray-600 '>
              Provider Details:
            </p>
            <div className='flex items-center gap-5'>
              <div>
                <p className='mt-2 text-sm  text-gray-600 '>
                  Name: {service.provider?.displayName || "N/A"}
                </p>
                <p className='mt-2 text-sm  text-gray-600 '>
                  Email: {service.provider?.email}
                </p>
                <p className='mt-2 text-sm  text-gray-600 '>
                  Loation: {service.area}
                </p>
              </div>
            
            </div>
          </div>
        </div>
        {/* service Details */}
        <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
          
  
          <form onSubmit={handleSubmit}>
            <div className='mt-4 sm:grid-cols-2'>
              <div>
                  <img src={service.photo} className='rounded-md w-96 h-64 object-cover' alt="service image" />
              </div>
              <h2 className='text-lg font-semibold mt-3 text-gray-700 capitalize '>
                    {service?.serviceName}
                </h2>
                <p className='mt-3'>{service?.description}</p>
                <p className='mt-6 text-lg font-bold text-gray-600 '>
                   Price: ${service?.price}
                </p>
            </div>
  
            <div className='flex justify-end mt-6'>
              <Link to={`/serviceBookingForm/${id}`}
                type='submit'
                className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
              >
                Book Now
              </Link>
            </div>
          </form>
        </section>
      </div>
    );
};

export default ServiceDetails;