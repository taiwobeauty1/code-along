import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import useAxios from "../hooks/useAxios";
import { useProductContext } from "../context/productContext";

function ProductList() {
    // const {data, isLoading, error} = useAxios(
    //     "https://api.escuelajs.co/api/v1/products"
    // );

    const {data, isLoading, error} = useAxios(
        "https://fakestoreapi.com/products"
    );
    const { products, setProducts } = useProductContext();

    useEffect(() => {
        setProducts(data);
    }, [data]);

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

console.log(products);

    return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
        {products?.map((data) => (
        <Product product={data} />
        ))};
        </div>
        );
}

export default ProductList;