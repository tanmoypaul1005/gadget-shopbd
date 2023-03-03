import useUtilityStore from '@/Stores/UtilityStore'
import { iCart, shopLogo } from '@/Utility/AllImageImport'
import Image from 'next/image'
import React from 'react'

function WebViewTopBar() {

    const { isTopBarOpen, setIsTopBarOpen } = useUtilityStore()

    return (
        <div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="max-w-[24px] min-w-[24px] h-8"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10 space-x-4">
                                <a
                                    href="/"
                                    className={`hover:bg-[#2257AA] text-white px-3 py-2 rounded-md text-sm font-medium
                    ${window.location.pathname === '/' && 'bg-[#2257AA] text-white'}`}>
                                    Home
                                </a>

                                <a
                                    href="/tour-package"
                                    className={`text-gray-300 hover:bg-[#2257AA] hover:text-white px-3 py-2 rounded-md 
                    text-sm font-medium ${window.location.pathname === '/tour-package' && 'bg-[#2257AA] text-white'}`}
                                >Tour Package
                                </a>

                                <a
                                    href="/blog"
                                    className={`hover:bg-[#2257AA] text-white px-3 py-2 rounded-md text-sm font-medium
                    ${window.location.pathname === '/blog' && 'bg-[#2257AA] text-white'}`}
                                >
                                    Blog</a>

                                <a
                                    href="/booking-cart"
                                    className={`hover:bg-[#2257AA] text-white px-3 py-2 rounded-md text-sm font-medium
                      ${window.location.pathname === '/booking-cart' && 'bg-[#2257AA] text-white'}`}
                                >
                                    Booking Cart
                                </a>

                                <a href="/login"
                                    className={`hover:bg-[#2257AA]
                                     text-white px-3 py-2 
                                     rounded-md text-sm 
                                     font-medium
                                    ${window.location.pathname === '/login' || window.location.pathname === '/singup' ? 'bg-[#2257AA] text-white' : ''}`}
                                >
                                    Login
                                </a>
                            </div>
                        </div>

                    </div>

                    {!isTopBarOpen && <div 
                    className='cursor-pointer flex justify-end items-end invisible md:visible'>
                        <Image
                            src={iCart}
                            alt="Picture of the author"
                            width={40}
                            height={40}
                        />

                    </div>}

                    <div className="flex -mr-2 md:hidden">

                        {!isTopBarOpen && <div className='cursor-pointer flex justify-end items-end '>
                            <Image
                                src={iCart}
                                alt="Picture of the author"
                                width={40}
                                height={40}
                            />
                        </div>}


                        <button
                            onClick={() => setIsTopBarOpen(!isTopBarOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isTopBarOpen ? (
                                <svg
                                    className="block w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebViewTopBar
