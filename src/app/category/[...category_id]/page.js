import ShopCard from '@/(components)/card/ShopCard'
// import React from 'react'

// function Shop() {

//     return (
//         <div>
//             <section className="md:h-full flex justify-center items-center text-gray-600">
//                 <div className=" px-[20px] py-[20px] ">
//                     <div className="text-center mb-[20px]">
//                         <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">Category Name</h1>
//                     </div>
//                     <div className="flex  flex-wrap">
//                         <ShopCard />
//                         <ShopCard />
//                         <ShopCard />
//                         <ShopCard />
//                         <ShopCard />
//                         <ShopCard />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export const getServerSideProps = async (ctx) => {
//     return {
//         props: {}
//     }
// }
// export default Shop

import React from 'react';
import axios from "axios";
import { BaseUrlSrc } from '@/Utility/Url';

async function getData(id) {
    const res = await axios.post(`${BaseUrlSrc}/product`, { category_id: id });
    return res?.data
}

export default async function page(ctx) {
    const data = await getData(ctx.params.category_id[0]);
     console.log("data", ctx.params.category_id[0])

    return <main>
        <div>
            <section className="md:h-full flex justify-center items-center text-gray-600">
                <div className=" px-[20px] py-[20px] ">
                    <div className="text-center mb-[20px]">
                        <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">{data?.data[0]?.category?.name}</h1>
                    </div>
                    <div className="flex  flex-wrap">
                        {data?.data?.length > 0 ?
                            data?.data?.map((item, index) => (
                                <ShopCard
                                 title={item?.name}
                                 price={item?.price}
                                />
                            )) : ""}
                    </div>
                </div>
            </section>
        </div>
    </main>;
}
