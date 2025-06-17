import { softSkills } from "../../data/resumeData";

const SoftSkills = () => {
  return (
    <div className="education">
      <h4 className="label">Soft Skills</h4>
      <ul className="education-list">
        {softSkills.map((item, index) => (
          <li className="item" key={index}>
        
            <p>
              <span>{item.title}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkills;
