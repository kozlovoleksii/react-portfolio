import "./about.css";
import { aboutImg } from "../../assets/images";
import { AiFillSafetyCertificate  } from "react-icons/ai";
import SectionTitle from "../sectionTitle/SectionTitle";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle title="About me" subtitle="About me" />

        <div className="about-wrapper">
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>

          <div className="about-info">
            <div className="description">
              <h3>I'm Oleksii</h3>
              <h4>
                <span>Front-End Developer</span> based in{" "}
                <span>Odesa, Ukraine</span>
              </h4>
              <p>
                I build responsive web applications using React,
                TypeScript and SCSS. With hands-on project experience and a
                background in e-commerce operations and team coordination, I
                bring both technical and business value to every product.
              </p>
            </div>

            <ul className="professional-list">
              <li className="list-item">
                <span className="number">8+</span>
                <span className="text">Personal Projects</span>
              </li>
              <li className="list-item">
                <span className="number">283+</span>
                <span className="text">Completed Katas</span>
              </li>
              <li className="list-item">
                <span className="number">1+</span>
                <span className="text">Year of coding</span>
              </li>
            </ul>

            <a href="https://github.com/kozlovoleksii/certificates" target="_blank" className="inner-info-link inner-info-link--download">
              View Certificates
              <AiFillSafetyCertificate  />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
