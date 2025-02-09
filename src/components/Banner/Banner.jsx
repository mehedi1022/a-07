import React from 'react';
import BannerPic from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="mt-8">
            <div className="bg-[url('././assets/banner.png')] py-[133px]">
            <div>
                <h1 className="text-center mx-52 text-white text-[52px] font-bold font-['Lexend'] leading-[76px] mb-4">Discover an exceptional cooking class tailored for you!</h1>
                <p className="text-center text-white text-lg font-normal font-['Lexend'] leading-[30px] mx-52 mb-10">Enhance your culinary skills, explore diverse recipes, master unique techniques, and create unforgettable meals. Join today to elevate your passion for cooking!</p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <button className="text-[#150b2b] text-xl font-semibold font-['Lexend'] h-[65px] px-[30px] py-5 bg-[#0be58a] rounded-[50px] justify-center items-center gap-2.5 inline-flex">Explore Now</button>
                <button className="text-white text-xl font-semibold font-['Lexend'] h-[65px] px-[30px] py-5 rounded-[50px] border border-white justify-center items-center gap-2.5 inline-flex">Our Feedback</button>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;