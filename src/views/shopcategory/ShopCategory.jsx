import CommonCategoryCard from '@/(components)/card/CommonCategoryCard';
import React from 'react';
import { BaseUrlSrc } from "@/Utility/Url";
import axios from "axios";

async function getData() {
    const res = await axios.get(`${BaseUrlSrc}/category`);
    return res?.data
}

export default async function ShopCategory() {
    const data = await getData();

    console.log("data", data)

    return <main>
        <div>
            <section className="md:h-full justify-center items-center text-gray-600">
                <div className="px-[20px] py-[20px]">
                    <div className="text-center mb-[20px]">
                        <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">Category</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-4 lg:gap-4 xl:gap-7 2xl:gap-12">
                        {
                            data?.data?.length > 0 ? data?.data?.map((item, index) => (
                                <div key={index} className='mb-[20px]'>
                                    <CommonCategoryCard id={item?._id} title={item?.name} />
                                </div>

                            )) : ''
                        }
                    </div>
                </div>
            </section>
        </div>

    </main>;
}