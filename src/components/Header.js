import Krishav from "../Assets/Krishav.png";

const Header = () => {
  return (
    <header className="header">
      {/* <nav className="navbar">
        <div className="navbar-items">
          <div className="logo">
            <img src={Krishav} alt="React Logo" />
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#brands">Brands</a>
              </li>
              <li>
                <a href="#product">Products</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid navbar-items">
          <div className="logo">
            <img src={Krishav} alt="React Logo" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-links mb-2 mb-lg-0">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#brands">Brands</a>
              </li>
              <li>
                <a href="#product">Products</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero">
        <h1>Welcome to Krishav Enterprise</h1>
        <p>Your trusted partner for industrial solutions.</p>
      </div>
    </header>
  );
};

export default Header;
