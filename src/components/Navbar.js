import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    const [activeTab, setActiveTab] = React.useState('Home');
    const [isVisible, setIsVisible] = useState(true);

    const handleLogout = () => {
        window.location.reload();
        setIsVisible(false);
        // You can also add your logout logic here (like clearing session, redirecting, etc.)
        console.log('User logged out');
    };
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} to="/Home">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item highlie" style={activeTab === 'Home' ? { fontSize: '1.5rem', fontFamily: 'inherit' } : {}}>
                                <Link className="nav-link active" onClick={() => setActiveTab('Home')} aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item highlie" style={activeTab === 'About Us' ? { fontSize: '1.5rem', fontFamily: 'inherit' } : {}}>
                                <Link className="nav-link active" onClick={() => setActiveTab('About Us')} to="/AboutUs">About Us</Link>
                            </li>
                            <li className="nav-item highlie" style={activeTab === 'Contact Us' ? { fontSize: '1.5rem', fontFamily: 'inherit' } : {}}>
                                <Link className="nav-link active" onClick={() => setActiveTab('Contact Us')} to="/ContactMe">Contact Us</Link>
                            </li>
                        </ul>
                        <div>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onClick={props.toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark-Mode</label>
                        </div>
                        <div>
                            {isVisible && (
                                <span onClick={handleLogout} style={{ cursor: 'pointer', color: 'blue' }}><Link className='mx-2 logout' to="/">Logout</Link></span>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

/*Navbar.propTypes = {
    title: PropTypes.string.isRequired
}; 

// This default prop if In case, we haven't assigned the value for the prop then we can set the default value so that it returns it when no other value is passed by user
Navbar.defaultProps = {
    title: 'Here only'
};*/