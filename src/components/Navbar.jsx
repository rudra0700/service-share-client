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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <Link>Home</Link>
              <Link>Services</Link>
              <li>
                <a></a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">SwiftServe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link>Home</Link></li>
            {user &&  <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="w-40 z-40">
                  <li><Link>Add Service</Link></li>
                  <li><Link>Manage Service</Link></li>
                  <li><Link>Booked Service</Link></li>
                  <li><Link>Service-to-do</Link></li>
                </ul>
              </details>
            </li>}
           
            <li><Link>Services</Link></li>
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
                        <li><Link>Add Service</Link></li>
                        <li><Link>Manage Service</Link></li>
                        <li><Link>Booked Service</Link></li>
                        <li><Link>Service-to-do</Link></li>
                        <li><Link onClick={logout}>Logout <IoLogOutOutline /></Link></li>
            </ul>
          </div>: <Link to={'/login'}>Login</Link>}
         
        </div>
      </div>
    );
};

export default Navbar;