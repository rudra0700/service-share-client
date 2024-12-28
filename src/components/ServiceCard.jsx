import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
     const {_id, photo, serviceName, price, description, provider} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="service photo" className='w-80 h-52 object-cover rounded-md' />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center">
            {serviceName}
            <div className="badge">$ {price}</div>
          </h2>
            <div className='flex items-center justify-between'>
               <h5 className='font-medium text-gray-600'>Provided By : {provider?.displayName}</h5>
                <img src={provider?.photo} className='w-10 h-10 rounded-full object-cover' alt="provider image" />
            </div>
          <p className='text-gray-600'>{description.substring(0, 100)}...</p>
          <div className="card-actions justify-end">
            <Link to={`/serviceDetails/${_id}`} className="badge badge-outline">View Details</Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;
