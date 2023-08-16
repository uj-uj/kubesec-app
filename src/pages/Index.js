import React from 'react';
import UniqueCapabilities from '../components/IndexComponents/UniqueCapabilities';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer';
import IndexNav from '../components/IndexComponents/IndexNav';



const IndexPage = () => {
  return (
    <div class="overflow-x-hidden" style={{ backgroundColor: '#316ce6' }}>
      {/* index's nav bar component */}
      <IndexNav />
      <section className="parallax-container section darken-4 center-align" style={{ backgroundColor: '#316ce6' }}>
        <div className="row" style={{ padding: '2px' }}>
          <h2 className="center-align" style={{ textAlign: 'center', color: 'white' }}>
            Introducing the World's first Cyber Security SaaS service delivering
            real time cyber attack mitigation, cognitive data assurance and cyber resilience with an
            information-centric approach.
          </h2>
          <h3 className="center-align white-text hide-on-med-and-down ASI" style={{ textAlign: 'center', color: 'white' }}>AIOps + SecOps + ITOps = KubeSec</h3>
          <h6 style={{ marginLeft: '2px', marginRight: '2px', textAlign: 'center', color: 'white' }} className="center-align white-text text-lighten-4 AIML">
            Our Technologies are powered by several patents and based upon Information Theory, core storage and
            systems engineering and AI/ML.
          </h6>
        </div>
      </section>

      <div style={{ backgroundColor: '#316ce6', textAlign: 'center' }} className='mt-5'>
        <Button
          component={Link}
          to="/login" // Replace with your login route
          variant="contained"
          style={{
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '10px',
            marginTop: '10px'
          }}
        >
          Login
        </Button>
      </div>
      {/* UniqueCapabilities section */}
      <div className='mt-4'>
      <UniqueCapabilities />
     </div>
    
     <div className=' p-5'>
      <div className="section blue darken-3 ">
        <div className="row">
          <div className="col-3 col-lg-3 center-align">
            <img className="img-fluid rounded-circle" style={{ maxWidth: '100%', height: 'auto' }} src={require('../assets/img/services.png')} alt="Services" />
          </div>
          <div className="col-9 col-lg-9 mt-5 text-white">
            <h2>Services</h2>
            <h6 className="text-justify">
              KubeSec service offers 360-degree Cyber Security Automation, Information auditing, Data Activity surveillance,
              Storage Intrusion Threat intelligence and Real time response. This is a revolutionary data governance and security
              platform. KubeSec is a quantum leap towards autonomous storage platforms with cognitive cyber resilience, fully
              software defined. KubeSec also enables software-based HA service, Customer Telemetry, Single point configuration
              and Automatic software patching. All these services can be offered on a FaaS (Features as a Service) model.
            </h6>
          </div>
        </div>
      </div>
      </div>
	



      <section style={{ paddingBottom: '10px', backgroundColor: '#153b56', textAlign: 'center' }}>
        <div className="row">
          {/* ...Product Video content */}
        </div>
      </section>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <center>
            <a href="lognewticket.php" className="waves-effect waves-light btn-small blue darken-3">Log a new ticket</a>
            <a href="checkstatus.php" className="waves-effect waves-light btn-small blue darken-3">Check ticket status</a>
          </center>
        </div>
      </div>

      <Footer />
    
    </div>
  );
}

export default IndexPage;
