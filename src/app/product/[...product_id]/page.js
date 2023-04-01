import ShopCard from '@/(components)/card/ShopCard'
import React from 'react';
import axios from "axios";
import { BaseUrlSrc } from '@/Utility/Url';
import CommonProfileDetails from '@/(components)/commonProfileDetails/CommonProfileDetails';

async function getData(id) {
    const res = await axios.get(`${BaseUrlSrc}/product/${id}`);
    return res?.data
}

export default async function page(ctx) {

    const data = await getData(ctx.params.product_id[0]);

    console.log("data", data)

    return <main>
        <div>
            <section className="md:h-full flex justify-center items-center text-gray-600">
                <CommonProfileDetails
                    title={data?.data?.product?.name}
                    brand={data?.data?.product?.brand}
                    price={data?.data?.product?.price}
                    description={data?.data?.product?.description}
                    offerPrice={data?.data?.product?.offerprice}
                    offer={data?.data?.product?.offer}
                    product_id={data?.data?.product?._id}
                />
            </section>
        </div>
    </main>;
}

