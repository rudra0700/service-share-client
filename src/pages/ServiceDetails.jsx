import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [service, setService] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
       fetchSingleService();
    }, [id])

    const fetchSingleService = async () => {
        const {data} = await axios.get(`http://localhost:5000/service/${id}`);
        console.log(data);
        setService(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
        {/* provider Details */}
        <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
          <div className='flex items-center justify-between'>
            {/* <span className='text-sm font-light text-gray-800 '>
              Deadline: {deadline && format(new Date(deadline), 'P')}
            </span> */}
            <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
              {/* {category} */}
            </span>
          </div>
  
          <div>
            <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
               {/* {service?.serviceName} */}
            </h1>
  
            <p className='mt-2 text-lg text-gray-600 '>
                {/* {service?.description} */}
            </p>
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
            <p className='mt-6 text-lg font-bold text-gray-600 '>
              {/* Price: ${service?.price} */}
            </p>
            
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
              <div>
                {/* <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label> */}
                {/* <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  disabled
                  defaultValue={user?.email}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                /> */}
              </div>
  
              <div>
                {/* <label className='text-gray-700 ' htmlFor='comment'>
                  Comment
                </label> */}
                {/* <input
                  id='comment'
                  name='comment'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                /> */}
              </div>
              <div className='flex flex-col gap-2 '>
                {/* <label className='text-gray-700'>Deadline</label> */}
  
                {/* Date Picker Input Field */}
                {/* <DatePicker
                  className='border p-2 rounded-md'
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                /> */}
              </div>
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