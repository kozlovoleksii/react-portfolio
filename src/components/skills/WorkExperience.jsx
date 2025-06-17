import { workExperience } from "../../data/resumeData";

const WorkExperience = () => {
  return (
    <div className="education work-exp">
      <h3 className="work-exp-title">Work &amp; Experience</h3>
      <div className="skills-info">
        {workExperience.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="upper">
              <h3>{item.title}</h3>
              <h5>{item.employmentType}</h5>
              <span>{item.period}</span>
            </div>
            <div className="hr"></div>
            <h4 className="label">
              {item.companyLink ? (
                <a
                  href={item.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.companyName}
                </a>
              ) : (
                item.companyName
              )}
            </h4>
            <p>{item.description}</p>
            {item.description2&& <p className="sub-description">{item.description2}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
