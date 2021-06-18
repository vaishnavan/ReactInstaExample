import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="nav_logo">
                        <h2>
                            <Link to="/">Instagram</Link>
                        </h2>
                    </div>
                    <div className="nav_link">
                        <Link to="/instapost">Post</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
