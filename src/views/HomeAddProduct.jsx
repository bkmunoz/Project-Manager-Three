import Form from '../components/Form';
import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Home = props => {
    const [myForm, setMyForm] = useState({
        title: "",
        price: "",
        description: ""
    })
    const [errors, setErrors] = useState({});
    const onChangeHandle = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", myForm)
            .then(res => {
                if(res.data.err) {
                    console.log("There was an issue submitting this form!");
                    setErrors(res.data.err.errors)
                } else {
                    console.log("Form submitted successfully!");
                    navigate("/products");
                }
            })
            .catch(err => console.log("Something went wrong with the POST request!", err))
    }
    return(
        <div>
            <h2>Product Manager</h2>
            <hr/>
            <Form handleSubmit={handleSubmit} onChangeHandle={onChangeHandle} myForm={myForm} errors={errors}/>
        </div>
    );
}

export default Home;