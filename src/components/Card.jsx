import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Card = props => {
    const cardStyle = {
        width: "18rem", 
        display:"inline-block", 
        verticalAlign:"top",
        margin: "3px"
    }
    const deleteProduct = _id => {
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(() => props.update())
            .catch(err => console.log)
    }
    return(
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <h5 className="card-title"><Link to={`/products/${props.product._id}`}>{props.product.title}</Link></h5>
                <p className="card-text">{props.product.price}</p>
                <Link to={`/products/update/${props.product._id}`}><button className="btn btn-warning">Edit Product</button></Link>&nbsp;<button className="btn btn-danger" onClick={() => deleteProduct(props.product._id)}>Delete</button>
            </div>
        </div>
    );
}

export default Card;