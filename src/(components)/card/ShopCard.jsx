"use client"
import React from 'react';
import Image from 'next/image';
import { shopLogo } from '@/Utility/AllImageImport';
import Link from 'next/link';
import { addCart } from '@/Stores/cartStore';
import { useRouter } from 'next/navigation';
const ShopCard = ({
    title = "some Title",
    description = "some Description",
    new_arrivals = false,
    image = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg",
    price = "0",
    id = 0
}) => {
    const router = useRouter();
    return (

        <div onClick={()=>{router.push(`/product/${id}`)}}  className="cursor-pointer relative">

            <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a href="#">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
                        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 text-sm text-slate-400">4.9</span>
                        </div>
                    </div>

                    <div className="mt-1 p-2">
                        <h2 className="text-slate-700">{title}</h2>
                        <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="text-lg font-bold text-blue-500">$850</p>


                            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                                <button className="text-sm">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </a>
            </article>

            {new_arrivals && <div classNameNameName='absolute right-4 top-4 bg-red-400 text-sm text-white py-[2px] px-1 rounded-sm'>New</div>}
        </div>

    );
};

export default ShopCard;