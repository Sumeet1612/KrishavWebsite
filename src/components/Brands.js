import Logo1 from "../Assets/Logos/1.png";
import Logo2 from "../Assets/Logos/2.png";
import Logo3 from "../Assets/Logos/3.gif";
import Logo4 from "../Assets/Logos/4.png";
import Logo5 from "../Assets/Logos/5.webp";
import Logo6 from "../Assets/Logos/6.svg";
import Logo7 from "../Assets/Logos/7.svg";
import Logo8 from "../Assets/Logos/8.png";
import Logo9 from "../Assets/Logos/9.png";
import Logo10 from "../Assets/Logos/10.png";

function Brands() {
  return (
    <div className="Brands">
      <section id="brands" className="brands">
        <h2>Brands We Deal In</h2>
        <div className="BrandLogos">
          <div className="Blogo">
            <img src={Logo1} alt="Brand Logo 1" />
          </div>
          <div className="Blogo">
            <img src={Logo2} alt="Brand Logo 2" />
          </div>
          <div className="Blogo">
            <img src={Logo3} alt="Brand Logo 3" />
          </div>
          <div className="Blogo">
            <img src={Logo4} style={{backgroundColor:"black", padding:"5px 5px"}} alt="Brand Logo 4" />
          </div>
          <div className="Blogo">
            <img src={Logo5} style={{backgroundColor:"black"}} alt="Brand Logo 5" />
          </div>
          <div className="Blogo">
            <img src={Logo6} alt="Brand Logo 6" />
          </div>
          <div className="Blogo">
            <img src={Logo7} alt="Brand Logo 7" />
          </div>
          <div className="Blogo">
            <img src={Logo8} alt="Brand Logo 8" />
          </div>
          <div className="Blogo">
            <img src={Logo9} alt="Brand Logo 9" />
          </div>
          <div className="Blogo">
            <img src={Logo10} alt="Brand Logo 10" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Brands;
