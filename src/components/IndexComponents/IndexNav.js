import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import React from 'react';

const IndexNav = () => {
  return (
    <div className="navbar-fixed">
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top" role="navigation">
        <div className="container-fluid"> {/* Use container-fluid for full width */}
          <div className="d-flex justify-content-between align-items-center w-100">
            <a href="https://neridio.com" className="brand-logo">
              <img
                style={{
                  width: '200px',
                  marginLeft: '10px',
                  marginTop: '8px'
                }}
                src={require('../../assets/img/logo.png')} alt="logo" />
            </a>

            <div>
              <Button
                component={Link}
                to="https://neridio.com"
                variant="contained"
                color="success"
                style={{
                  marginRight: '10px',
                  borderRadius: '10px'
                }}
              >
                ACCESS OUR CORPORATE PORTAL
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                className="btn btn-danger"
                style={{
                  borderRadius: '10px'
                }}
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default IndexNav;
