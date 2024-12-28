import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import {Helmet} from "react-helmet";

const ServiceBookForm = () => {
    const {user} = useContext(AuthContext)
    const {id} = useParams();
     const [service, setService] = useState({});
     const [startDate, setStartDate] = useState(new Date());

     useEffect(() => {
        fetchSingleService();
     }, [id])
 
     const fetchSingleService = async () => {
         const {data} = await axios.get(`https://service-sharing-server-one.vercel.app/service/${id}`);
         console.log(data);
         setService(data)
     }

     const {_id, serviceName, provider, price} = service;

      const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const date = startDate;
        const job_id = _id;
        const providerEmail = provider?.email;
        const providerName = provider?.displayName;
        const email = user?.email
        const description = form.description.value
        const status = "Pending";

        // if(user?.email === provider?.email) return toast.error("Provider Can't book own service")
         
        const bookingData = {job_id, serviceName, providerEmail, providerName, email, price, date, description, status}

        try {
            // make post request
            await axios.post(`https://service-sharing-server-one.vercel.app/bookingServices`, bookingData);
            form.reset();
            toast.success("Service booked successfully")
            navigate('/bookedService')
           } catch (error) {
            toast.error(error.message)
           }
      }
    return (
        <div>
        <h3 className='text-center text-3xl font-semibold'>Book Your Service</h3>
         <form className='max-w-7xl mx-auto min-h-[calc(100vh-306px)] mt-5' onSubmit={handleSubmit}>
             <div className='flex gap-4 flex-col lg:flex-row'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Service ID</span>
                    </label>
                    <input type="text" name='_id' defaultValue={_id} disabled className="input input-bordered w-full" required />
                </div> 
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Service Name</span>
                    </label>
                    <input type="text" name='serviceName' defaultValue={serviceName} disabled className="input input-bordered" required />
                </div> 
             </div> 
              <div className='flex gap-4 flex-col lg:flex-row'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Provider Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={provider?.email} disabled className="input input-bordered w-full" required />
                </div> 
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Provider Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={provider?.displayName} disabled className="input input-bordered" required />
                </div> 
             </div> 
             <div className='flex gap-4 flex-col lg:flex-row'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Your Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user?.email} disabled className="input input-bordered w-full" required />
                </div> 
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Your Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} disabled className="input input-bordered" required />
                </div> 
             </div>
              <div className='flex gap-4 flex-col lg:flex-row'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Booking Date</span>
                    </label>
                    <DatePicker selected={startDate} className='border p-3 rounded-md w-full outline-none' onChange={(date) => setStartDate(date)} />
                </div> 
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={price} disabled className="input input-bordered" required />
                </div> 
             </div>
             <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-600">Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered textarea-lg" required />
                </div> 
             <button className="btn w-full btn-neutral mt-5">Book Now</button>
         </form>
        
    </div>
    );
};

export default ServiceBookForm;