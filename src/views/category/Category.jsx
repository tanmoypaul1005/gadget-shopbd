import CommonCategoryCard from '@/(components)/card/CommonCategoryCard';
import React from 'react';

const Category = () => {
    return (
        <div>
            <section className="md:h-full justify-center items-center text-gray-600">
                <div className="px-[20px] py-[20px] ">
                    <div className="text-center mb-[20px]">
                        <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">Category </h1>
                    </div>
                    <div className="flex justify-start flex-wrap space-x-4">
                        <div className='mb-[20px]'><CommonCategoryCard /></div>
                        <div className='mb-[20px]'><CommonCategoryCard /></div>
                        <div className='mb-[20px]'><CommonCategoryCard /></div>
                        <div className='mb-[20px]'><CommonCategoryCard /></div>
                        <div className='mb-[20px]'><CommonCategoryCard /></div>
                        <div className='mb-[20px]'><CommonCategoryCard /></div>
                        <div className='mb-[20px]'><CommonCategoryCard /></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {}
    }
}

export default Category;