import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <footer className="page-footer bg-dark darken-4 text-white">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h5>
            <LocationOnIcon />
            <span> Address </span>
          </h5>
          <p className="justify-text" style={{ paddingRight: '5px', marginTop: '5px' }}>
            Neridio Systems Pvt Ltd., <br />
            630, DHI Innovation Park, Arekere Gate, Bannerghatta Main Rd, Bengaluru, Karnataka 560076<br /><br />
            <i className="material-icons" style={{ verticalAlign: 'bottom' }}>phone</i>&nbsp;&nbsp; +91-8042179002<br />
            <i className="material-icons" style={{ verticalAlign: 'bottom' }}>mail</i>&nbsp;&nbsp;
            <a href="mailto:contactus@neridio.com" style={{ color: 'white' }}>support@neridio.com</a>
          </p>
        </div>
        <div className="col-lg-3 col-sm-12 footer-container" style={{ marginLeft: '300px' }}>
          <h5 className="white-text">Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link className="white-text" to="/">Home</Link>
            </li>
            <li>
              <a className="white-text" href="https://www.neridio.com">About us</a>
            </li>
            <li>
              <a className="btn btn-primary btn-logout" href="CDTLogout.php" style={{ marginBottom: '20px', fontSize: '1.3em' }}>Logout</a>
            </li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        {/* Additional columns */}
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="social-icons">
          <ul>
            {/* Add social media icons */}
          </ul>
        </div>
        <p className="text-center">
          2019 &copy; Copyright Neridio Systems Pvt Ltd. All rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
