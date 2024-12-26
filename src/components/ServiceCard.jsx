import React from 'react';

const ServiceCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center">
            Home Cleaning
            <div className="badge">$ 40</div>
          </h2>
            <div className='flex items-center justify-between'>
               <h5>Provided By : Rudra</h5>
                <img src="https://i.ibb.co.com/MBSRfTM/jersy.jpg" className='w-10 h-10 rounded-full object-cover' alt="provider image" />
            </div>
          <p>Our expert plumbers are here to fix leaks, unclog drains, and install new plumbing systems quickly and efficiently. Whether it’s a minor repair or a major installation, we ensure quality service to keep your home running smoothly. From faucet repairs to bathroom remodeling, our team has you covered.</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">View Details</div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;
