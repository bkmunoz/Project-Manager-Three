import React from 'react';
import { Link } from '@reach/router';

const NavBar = props => {
    return(
        <div className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/products" className="nav-link">View All Products</Link>
            </div>
        </div>
    );
}

export default NavBar;