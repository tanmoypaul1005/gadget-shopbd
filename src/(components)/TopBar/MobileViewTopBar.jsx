import React from 'react'
import { Transition } from "@headlessui/react";
import useUtilityStore from '@/Stores/UtilityStore';

function MobileView() {

    const { isTopBarOpen, setIsTopBarOpen } = useUtilityStore()

    return (
        <div>
            <Transition
                show={isTopBarOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a
                                href="/"
                                className=
                                "block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                Home
                            </a>
                            <a
                                href="/tour-package"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                Tour Package
                            </a>

                            <a
                                href="/blog"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                Blog
                            </a>

                            <a
                                href="/booking-cart"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                Booking Cart
                            </a>

                            <a
                                href="/singin"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                SingIn
                            </a>

                        </div>
                    </div>
                )}
            </Transition>
        </div>
    )
}

export default MobileView
