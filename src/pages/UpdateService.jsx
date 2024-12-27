import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateService = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [service, setService] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        const fetchAllServices = async () => {
            const {data} = await axios.get(`http://localhost:5000/service/${id}`)
            setService(data)
        }

        fetchAllServices()
    }, [id]);

    console.log(service);

     const handleUpdateService = async (e) => {
        e.preventDefault();
         
        const form = e.target;
        const photo = form.photo.value;
        const serviceName = form.serviceName.value;
        const price = parseFloat(form.price.value);
        const area = form.area.value;
        const description = form.description.value;

        // console.log(photo, serviceName, price, area, description);
        const formData = {
            photo,
            serviceName,
             price,
             area, 
             description,
         }


       try {
        const {data} =  await axios.put(`http://localhost:5000/update-service/${id}`,  formData);
        console.log(data);
        toast.success("service updated successfully")
        navigate('/manageServices')  
       } catch (error) {
         toast.error(error.messaage);
       }
     }
    return (
        <div>
            <h3 className='text-center text-3xl font-semibold'>Update Your Service</h3>
             <form className='max-w-7xl mx-auto min-h-[calc(100vh-306px)] mt-5' onSubmit={handleUpdateService}>
                 <div className='flex gap-4 flex-col lg:flex-row'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Photo URL</span>
                        </label>
                        <input type="url" name='photo' defaultValue={service?.photo} className="input input-bordered w-full" required />
                    </div> 
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Service Name</span>
                        </label>
                        <input type="text" name='serviceName' defaultValue={service?.serviceName} className="input input-bordered" required />
                    </div> 
                 </div> 
                  <div className='flex gap-4 flex-col lg:flex-row'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={service?.price} className="input input-bordered w-full" required />
                    </div> 
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Serving Area</span>
                        </label>
                        <input type="text" name='area' defaultValue={service?.area} className="input input-bordered" required />
                    </div> 
                 </div>
                 <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-600">Description</span>
                        </label>
                        <textarea placeholder='bio' name='description' defaultValue={service?.description} className="textarea textarea-bordered textarea-lg" required />
                    </div> 
                 <button className="btn w-full btn-neutral mt-5">Update Service</button>
             </form>
            
        </div>
    );
};

export default UpdateService;