import SectionTitle from "../sectionTitle/SectionTitle";
import SoftSkills from "./SoftSkills";
import Education from "./Education";
import Skills from "./Skills";
import "./Skils.css";
import WorkExperience from "./WorkExperience";

const SkillsInfo = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />
        <div className="inner-content">
          <div className="skills-description">
            <h3>Education &amp; Skills</h3>
            <p>
              Master’s Degree in Audit and Control from Kyiv National Economic
              University, Kryvyi Rih Institute. Self-taught frontend developer
              through real projects and hands-on practice. Confident with React,
              TypeScript, SCSS, REST APIs, and Git. Strong background in
              e-commerce and team coordination.
            </p>
          </div>

          <div className="skills-info education-all">
            <Education />
            <Skills />
            <SoftSkills />
          </div>
          <WorkExperience />
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
