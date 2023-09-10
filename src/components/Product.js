import ReactCardSlider from "react-card-slider-component";
import Slide1 from "../Assets/Slide1.jpg";
import Slide2 from "../Assets/Slide2.jpg";
import Slide3 from "../Assets/Slide3.jpg";
import Slide4 from "../Assets/Slide4.jpg";
import Slide5 from "../Assets/Slide5.jpg";
import Slide6 from "../Assets/Slide6.jpg";
import Slide7 from "../Assets/Slide7.jpg";
import Slide8 from "../Assets/Slide8.jpg";
import Slide9 from "../Assets/Slide9.jpg";
import Slide10 from "../Assets/Slide10.jpg";

function Product() {
  const sliderClick = () => {};
  const slides = [
    {
      image: Slide1,
      title: "Hybrid Light Audio Indoor Fixed Turret",
      clickEvent: sliderClick,
    },
    {
      image: Slide2,
      title: "Vari-focal Starlight Dome",
      clickEvent: sliderClick,
    },
    {
      image: Slide3,
      title: "Ezykam Smart CCTV Security",
      clickEvent: sliderClick,
    },
    {
      image: Slide4,
      title: "EOL: Mobile Dual-sensor Network Dome",
      clickEvent: sliderClick,
    },
    {
      image: Slide5,
      title: "DS-2E1AC0T-IRP, ECO Security Camera",
      clickEvent: sliderClick,
    },
    {
      image: Slide6,
      title: "Indoor/Outdoor Speed Dome",
      clickEvent: sliderClick,
    },
    {
      image: Slide7,
      title: "Wireless Home and Office Ultra HD 1080P IP CCTV Security Camera",
      clickEvent: sliderClick,
    },
    {
      image: Slide8,
      title: "EZVIZ C8C Outdoor Wireless Pan/Tilt Cameraa",
      clickEvent: sliderClick,
    },
    {
      image: Slide9,
      title: "IMPACT Dome CCTV Cameraa",
      clickEvent: sliderClick,
    },
    {
      image: Slide10,
      title: "HK Vision Complete Survelliance",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div className="Product">
      <section id="product" className="product">
        <h2>Most Recommended Products</h2>
        <ReactCardSlider slides={slides} />
      </section>
    </div>
  );
}
export default Product;
