import react from "../assets/img/reactjs-icon.svg";
import bootstrap from "../assets/img/bootstrap 5.svg";
import javascript from "../assets/img/javascript.svg";
import html from "../assets/img/html-5.svg";
import django from "../assets/img/django.svg";
import redux from "../assets/img/redux.svg";
import css from "../assets/img/css3.svg";
import sass from "../assets/img/sass.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Creating web applications❣️<br></br> Maintaining, optimizing, troubleshooting, and improving websites</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image1" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item" id="big">
                                <img src={javascript} alt="Image2" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item" id="big">
                                <img src={django} alt="Image3" />
                                <h5>Django / Python</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="Image4" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image5" />
                                <h5>CSS 3</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image6" />
                                <h5>HTML 5</h5>
                            </div>
                            <div className="item">
                                <img src={sass} alt="Image7" />
                                <h5>Sass / Scss</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image7" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="ImageLeft" />
      <img className="background-image-right" src={colorSharp2} alt="ImageRight" />

    </section>
  )
}