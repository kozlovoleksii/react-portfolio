import { contactData } from "../../data/ContactData";

const ContactLeft = () => {
  return (
    <div className="contact-left">
      <h2>Let's discuss your project</h2>
      <ul className="contact-list">
        {contactData.map((item) => (
          <li key={item.id}>
            <a href={item.link} target="blank">
              <h3>
                <item.icon /> {item.title}
              </h3>
              <span>{item.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLeft;
