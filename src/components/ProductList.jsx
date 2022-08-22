import React, { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";
import useAxios from "../hooks/useAxios";

function ProductList() {
    const {data, isLoading, error} = useAxios(
        "https://api.escuelajs.co/api/v1/products"
    );

//     useEffect(() => {
//         const getProducts = async () => {
//         const results = await axios.get( 
//             "https://api.escuelajs.co/api/v1/products"
//         );
//         console.log(results);
//         setProducts(results.data);

//     };

//     getProducts();
//   }, []);
if (isLoading) return <Spinner />;

if (error) return <p>{error}</p>;

    return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
        {data.map((data) => (
        <Product product={data} />
        ))};
        </div>
        );
}

export default ProductList;