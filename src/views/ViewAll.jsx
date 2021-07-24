import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const ViewAll = props => {
    const [allProducts, setAllProducts] = useState(null);
    const [reloadAPI, setReloadAPI] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    }, [reloadAPI])
    const update = () => {
        setReloadAPI(!reloadAPI);
    }
    return(
        <div className="">
            <h2>All Products</h2>
            <hr />
            {
                allProducts ? 
                allProducts.map((product, i) => {
                    return <Card product={product} update={update}/>
                })
                : ""
            }
        </div>
    );
}

export default ViewAll;