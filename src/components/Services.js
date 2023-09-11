import React from "react";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <p>
        At Krishav Enterprise, we offer a comprehensive range of services to
        cater to your security and electrical needs:
      </p>
      <br />

      <div className="MasterCard">
        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Security Systems Installation
            </h5>
            <p className="card-text">
              Protect your home or business with state-of-the-art security
              systems, including CCTV cameras, alarm systems, access control,
              and more.
            </p>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Electrical Repairs
            </h5>
            <p className="card-text">
              Our team of certified electricians is equipped to handle all types
              of electrical repairs, ensuring your safety and peace of mind.
            </p>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Electrical Installation
            </h5>
            <p className="card-text">
              Whether you need new electrical installations for your home or
              office, we have the expertise to get the job done efficiently and
              safely.
            </p>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Emergency Services
            </h5>
            <p className="card-text">
              We understand that electrical emergencies can happen at any time.
              That's why we offer 24/7 emergency electrical services to get your
              systems up and running promptly.
            </p>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Maintenance and Upgrades
            </h5>
            <p className="card-text">
              Keep your systems running smoothly with our maintenance services,
              and enhance their performance with our upgrade solutions.{" "}
            </p>
          </div>
        </div>

        <div className="card slide-card">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "24px", fontWeight: "bold" }}
            >
              Home Automation Solutions
            </h5>
            <p className="card-text">
              magine having complete control over your home's lighting, climate,
              security, and entertainment systems with a single touch or voice
              command.
            </p>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Services;
