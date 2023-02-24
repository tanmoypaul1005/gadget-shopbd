"use client"
import CommonProfileDetails from '@/(components)/commonProfileDetails/CommonProfileDetails'
import React from 'react'

function ProductDetails() {
    return (
        <div>
            <CommonProfileDetails />
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    return {
        props: {}
    }
}
export default ProductDetails
