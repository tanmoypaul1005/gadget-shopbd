import ShopCard from '@/(components)/card/ShopCard'
import React from 'react';
import axios from "axios";
import { BaseUrlSrc } from '@/Utility/Url';

async function getData(id) {
    const res = await axios.post(`${BaseUrlSrc}/product`, { category_id: id });
    return res?.data
}

export default async function page(ctx) {

    const data = await getData(ctx.params.category_id[0]);

    return <main>
        <div>
            <section className="md:h-full flex justify-center items-center text-gray-600">
                <div className=" px-[20px] py-[20px] ">
                    <div className="text-center mb-[20px]">
                        <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">{data?.data[0]?.category?.name}</h1>
                    </div>
                    <div className="mx-[20px] grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {data?.data?.length > 0 ?
                            data?.data?.map((item, index) => (
                                <div>
                                    <ShopCard
                                        title={item?.name}
                                        price={item?.price}
                                        id={item?._id}
                                    /></div>
                            )) : ""}
                    </div>
                </div>
            </section>
        </div>
    </main>;
}
