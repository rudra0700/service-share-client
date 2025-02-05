import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

const AddService = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleAddService = async (e) => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const serviceName = form.serviceName.value;
        const price = parseFloat(form.price.value);
        const area = form.area.value;
        const description = form.description.value;


        const formData = {
            photo,
            serviceName,
             price,
             area, 
             description,
             provider: {
                email: user?.email,
                displayName: user?.displayName,
                photo: user?.photoURL
              },
         }

        try {
            const {data} = await axios.post("https://service-sharing-server-one.vercel.app/add-service", formData);
            form.reset()
            navigate('/manageServices')
            toast.success("Service added successfully")

        } catch (error) {
          toast.error(error.message);  
        }
    }
    return (
        <div>   
         <Helmet>
             <title>SwiftServe | Add Service</title>
         </Helmet>
            <h3 className='text-center text-3xl font-semibold'>Add Your Service</h3>
             <form className='max-w-7xl mx-auto min-h-[calc(100vh-306px)] mt-5' onSubmit={handleAddService}>
                 <div className='flex gap-4 flex-col lg:flex-row'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Photo URL</span>
                        </label>
                        <input type="url" name='photo' className="input input-bordered w-full" required />
                    </div> 
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Service Name</span>
                        </label>
                        <input type="text" name='serviceName' className="input input-bordered" required />
                    </div> 
                 </div> 
                  <div className='flex gap-4 flex-col lg:flex-row'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Price</span>
                        </label>
                        <input type="text" name='price' className="input input-bordered w-full" required />
                    </div> 
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Serving Area</span>
                        </label>
                        <input type="text" name='area' className="input input-bordered" required />
                    </div> 
                 </div>
                 <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered textarea-lg" required />
                    </div> 
                 <button className="btn w-full btn-neutral mt-5">Add Service</button>
             </form>
            
        </div>
    );
};

export default AddService;