import "./Home.css";
import { FaChevronCircleRight, FaChevronCircleDown } from "react-icons/fa";
import { mainImg } from "../../assets/images";
import { folowLinks } from "../../data/footerData";
import { moveInVariants } from "../../utils/animation";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {folowLinks.map((link, index) => (
            <motion.a
              href={link.href}
              key={link.id}
              target="_blank"
              custom={index}
              variants={moveInVariants("left", 0.3, 100, true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <link.icon />
            </motion.a>
          ))}
        </div>

        <div className="home-info">
          <motion.h1
            custom={0}
            variants={moveInVariants("left", 0.6, 100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Hi, I am Oleksii
          </motion.h1>
          <motion.h3
            custom={1}
            variants={moveInVariants("left", 0.6, 100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            custom={2}
            variants={moveInVariants("left", 0.6, 100, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            I build responsive web applications using React, TypeScript and
            SCSS. Experienced in e-commerce, UI development, and teamwork under
            pressure.
          </motion.p>
          <motion.a
            href="#contact"
            className="home-info-link inner-info-link"
            custom={3}
            variants={moveInVariants("bottom", 0.6, 40, true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Contact me
            <FaChevronCircleRight />
          </motion.a>
        </div>

        <motion.div
          className="home-img"
          variants={moveInVariants("right", 0.6, 100, true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={mainImg} alt="man" />
        </motion.div>
      </div>

      <a href="#about" className="scroll-down">
        Scroll down
        <FaChevronCircleDown />
      </a>
    </section>
  );
};

export default Home;
