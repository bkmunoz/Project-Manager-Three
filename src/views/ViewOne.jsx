import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const OneProduct = props => {
    const [oneProduct, setOneProduct] = useState(null);
    const deleteProduct = _id => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log)
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setOneProduct(res.data))
            .catch(err => console.log("Something went wrong trying to render one product.", err))
    }, [])
    return(
        <div className="container">
            {
                oneProduct ? <> 
                <div className="col-6 text-left" >
                    <h2>{oneProduct.title}</h2>
                    <h3>{oneProduct.price}</h3>
                    <h4>{oneProduct.description}</h4>
                </div>
                </> 
                : ""
            }
            <Link to={"/products"}><button className="btn btn-danger" onClick={() => deleteProduct(props._id)}>Delete</button></Link>
        </div>
    );
}

export default OneProduct;