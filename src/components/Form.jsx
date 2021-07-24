import React from 'react';

const Form = props => {
    const {handleSubmit, onChangeHandle, myForm, errors} = props;
    return(
        <div className="container">
            <form onSubmit={props.handleSubmit} className=" text-left">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" onChange={onChangeHandle} value={myForm.title}/>
                    {
                        errors.title ? 
                        <span className="text-danger">{errors.title.message}</span> 
                        : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" className="form-control" onChange={onChangeHandle} value={myForm.price}/>
                    {
                        errors.price ? 
                        <span className="text-danger">{errors.price.message}</span> 
                        : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" className="form-control" onChange={onChangeHandle} value={myForm.description}/>
                    {
                        errors.description ? 
                        <span className="text-danger">{errors.description.message}</span> 
                        : ""
                    }
                </div>
                <input type="Submit" value="Submit" className="btn btn-info"/>
            </form>
        </div>
    );
}

export default Form;