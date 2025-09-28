import "./Services.css";
import { services } from "../../data/services";
import ServicesItem from "./ServicesItem";
import SectionTitle from "../sectionTitle/SectionTitle";

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <SectionTitle title="Services" subtitle="Services" />
          <div className="services-wrapper">
          <h3 className="services-description">What I provide</h3>
          <ul className="services-list">
            <ServicesItem services={services}/>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
