import React from 'react'
const Product       = React.lazy(() => import('./product'));
const DetailProduct = React.lazy(() => import('./DetailProduct'));
const Checkout      = React.lazy(() => import('./Checkout'));
export {
    Product,DetailProduct,Checkout
}