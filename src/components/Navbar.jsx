import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
          </div>
          <a className="btn btn-ghost text-xl">SwiftServe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className='text-gray-600 font-semibold'>Home</Link></li>
            {user &&  <li>
              <details>
                <summary className='text-gray-600 font-semibold'>Dashboard</summary>
                <ul className="w-40 z-40">
                  <li><Link to={'/addService'} className='text-gray-600 font-semibold'>Add Service</Link></li>
                  <li><Link to={'/manageServices'} className='text-gray-600 font-semibold'>Manage Service</Link></li>
                  <li><Link to={'/bookedService'} className='text-gray-600 font-semibold'>Booked Service</Link></li>
                  <li><Link to={'/serviceToDo'} className='text-gray-600 font-semibold'>Service-to-do</Link></li>
                </ul>
              </details>
            </li>}
            <li><Link to={'/allServices'} className='text-gray-600 font-semibold'>All Services</Link></li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          
          {/* profile icon */}
          {user && user?.email ?  <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}
                  referrerPolicy='no-referrer'
                  title={user?.displayName}
                  />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 w-52 p-2 shadow">
                        <li><Link to={'/addService'} className='text-gray-600 font-semibold'>Add Service</Link></li>
                        <li><Link to={'/manageServices'} className='text-gray-600 font-semibold'>Manage Service</Link></li>
                        <li><Link to={'/bookedService'} className='text-gray-600 font-semibold'>Booked Service</Link></li>
                        <li><Link to={'/serviceToDo'} className='text-gray-600 font-semibold'>Service-to-do</Link></li>
                        <li><Link onClick={logout} className='text-gray-600 font-semibold'>Logout <IoLogOutOutline /></Link></li>
            </ul>
          </div>: <Link to={'/login'}>Login</Link>}
         
        </div>
      </div>
    );
};

export default Navbar;