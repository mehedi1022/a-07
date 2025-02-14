import React from 'react';
import { CiSearch } from "react-icons/ci";
import userIcon from "../../assets/user-icon.png"

const Header = () => {
    return (
        <header className="mt-6">
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
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="text-[#150b2b] text-[32px] font-bold font-['Lexend']">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-[#150b2b]/70 text-base font-normal font-['Lexend']">Home</a></li>
                        <li><a className="text-[#150b2b]/70 text-base font-normal font-['Lexend']">Recipes</a></li>
                        <li><a className="text-[#150b2b]/70 text-base font-normal font-['Lexend']">About</a></li>
                        <li><a className="text-[#150b2b]/70 text-base font-normal font-['Lexend']">Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="bg-[#150b2b]/5 hidden lg:flex items-center justify-center px-6 py-3 rounded-full mr-4">
                    <CiSearch className="w-6 h-6 relative overflow-hidden"/>
                <input className="input w-[160px] h-6 ml-2 bg-[#150b2b]/5 text-base font-normal font-['Lexend']" type="text" placeholder="Search" />
                
                    </div>
                    <img src={userIcon} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;