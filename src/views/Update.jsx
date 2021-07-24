import Form from '../components/Form';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateProduct = props => {
    const [myForm, setMyForm] = useState({})
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setMyForm(res.data))
            .catch(err => console.log(err))
    }, [])
    const onChangeHandle = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props._id}`, myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There was an issue submitting this form!");
                    setErrors(res.data.err.errors)
                } else {
                    console.log("Form submitted successfully!");
                    navigate(`/products/${props._id}`);
                }
            })
            .catch(err => console.log("Something went wrong with the POST request!", err))
    }
    return(
        <div className="container">
            <h2>Update Product</h2>
            <hr/>
            <Form handleSubmit={handleSubmit} onChangeHandle={onChangeHandle} myForm={myForm} errors={errors}/>
        </div>
    );
}

export default UpdateProduct;