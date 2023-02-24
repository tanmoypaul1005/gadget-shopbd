import ShopCard from '@/(components)/card/ShopCard'
import React from 'react'

function Shop() {
    
    return (
        <div>
            <section className="md:h-full flex justify-center items-center text-gray-600">
                <div className=" px-[20px] py-[20px] ">
                    <div className="text-center mb-[20px]">
                        <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">Category Name</h1>
                    </div>
                    <div className="flex  flex-wrap">
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                    </div>
                </div>
            </section>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    return {
        props: {}
    }
}
export default Shop
