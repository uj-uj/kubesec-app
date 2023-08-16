import React from 'react';
import '../../assets/css/style.css'
import { Security, CloudCircle, EnhancedEncryption, CloudDone, TouchApp, ShowChart, ScreenLockLandscape, PermDataSetting, VerifiedUser } from '@mui/icons-material';


const UniqueCapabilities = () => {
  return (
    <div>
      <section className="unique-capabilities-section">
        <div className="card-content white-text center-align">
          <h4><b>Our Unique Capabilities (Patented).</b></h4>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <p className="center-align red-text text-lighten-3"><Security fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">Outside-in and Inside-out protection - world's only solution
              available on earth.</h6>
          </div>
          <div className="col s12 l4">
            <p className="center-align pink-text text-lighten-3"><CloudCircle fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">ML based reactive security control and remedial services
              integrating AIops to ITOps.</h6>
          </div>
          <div className="col s12 l4">
            <p className="center-align purple-text text-lighten-3"><EnhancedEncryption fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">System and storage intrusion detection and prevention, with a
              security by design and default tenet.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <p className="center-align deep-purple-text text-lighten-3"><CloudDone fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">Support Kubernetes Platform, Linux Servers and Databases</h6>
          </div>
          <div className="col s12 l4">
            <p className="center-align green-text text-lighten-3"><TouchApp fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">One click with HA Configuration</h6>
          </div>
          <div className="col s12 l4">
            <p className="center-align indigo-text text-lighten-3"><ShowChart fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">Realtime customer Telemetry with data classification</h6>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <p className="center-align blue-text text-lighten-3"><ScreenLockLandscape fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">Information security Surveillance and Data Intrusion, Detection
              and Response</h6>
          </div>
          <div className="col s12 l4">
            <p className="center-align cyan-text text-lighten-3"><PermDataSetting fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">100% SaaS based delivery and billing.</h6>
          </div>
          <div className="col s12 l4">
            <p className="center-align teal-text text-lighten-3"><VerifiedUser fontSize="medium" /></p>
            <h6 className="ani1 center-align white-text">Organic convergence of Information theory, AI, Data centric
              system security, site reliability, security incidence management, SIEM, customer telemetry and
              Information Assurance.</h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UniqueCapabilities;
