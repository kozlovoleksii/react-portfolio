import "./SectionTitle.css"

const SectionTitle = ({title, subtitle}) => {
  return (
    <>
      <h2 className="inner-title">{title}</h2>
      <span className="inner-second-title">{subtitle}</span>
    </>
  );
};

export default SectionTitle;
