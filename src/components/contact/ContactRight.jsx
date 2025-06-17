import React from 'react'

const ContactRight = () => {
  return (
    <div className="contact-right">
        <p>
          I'm always open to discussing product <span>design work or partnerships.</span>
        </p>
        <form className="form contact-form">
          <div className="first-row">
            <input placeholder="Name" type="text"/>
          </div>
          <div className="second-row">
            <input placeholder="Email" type="email"/>
            <input placeholder="Subject" type="text"/>
          </div>
          <div className="third-row">
            <textarea placeholder="Message"></textarea>
          </div>
          <button className="contact-btn inner-info-link" type="submit">
            Send Message
        
          </button>
        </form>
      </div>
  )
}

export default ContactRight