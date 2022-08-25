import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
    return (

        <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="h-72 overflow-hidden">
    <a href="#">
        <img className="p-8 rounded-t-lg" 
        src={product.image} alt="product image" />
    </a>
    </div>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5 dark:text-gray-200">
            {product.description.substring(0, 150)}
        </div>
        <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <Link to={`/products/${product.id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
            </Link>
        </div>
    </div>
</div>

    );
}

export default Product;