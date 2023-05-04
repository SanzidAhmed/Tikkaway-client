import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div className=' bg-yellow-100'>
                <div className="navbar container mx-auto ">
                    <div className="flex-1">
                        <img className='w-14' src="https://i.ibb.co/p46dLVy/Borcelle-removebg-preview.png" alt="" />
                    </div>
                    <div className="flex-none gap-6 md:gap-12 text-red-400 font-bold">
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/login">Login</Link>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;