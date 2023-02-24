"use client"
import React from 'react';
import Image from 'next/image';
import { shopLogo } from '@/Utility/AllImageImport';
import Link from 'next/link';

const ShopCard = ({
    title = "some Title",
    description = "some Description",
    new_arrivals = false,
    image = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg",
    price = "0"
}) => {

    return (

        <Link href="/product/1" className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer relative">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-[200px] md:h-[160px] w-full object-cover object-center"
                    src={image} alt="blog" />
                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                    {/* <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                        2021</h2> */}
                    <h1 className="text-2xl font-semibold mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{description}</p>

                    <div className="flex justify-between">
                        <span classNameName="flex justify-center items-center">{price} ৳</span>
                        <Image
                            src={shopLogo}
                            alt="Picture of the author"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="flex items-center flex-wrap ">
                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span
                            className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">

                        </span>
                    </div>
                </div>
            </div>

            {new_arrivals && <div className='absolute right-4 top-4 bg-red-400 text-sm text-white py-[2px] px-1 rounded-sm'>New</div>}
        </Link>

    );
};

export default ShopCard;