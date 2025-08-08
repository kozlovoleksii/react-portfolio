import { useForm, ValidationError } from "@formspree/react";
import Modal from "../modal/Modal";
import { useEffect, useRef, useState } from "react";

const ContactRight = () => {
  const [state, handleSubmit] = useForm("mdkdpypn");
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
      setOpen(true);
    }
  }, [state.succeeded]);

  return (
    <div className="contact-right">
      <p>
        I'm always open to discussing product{" "}
        <span>design work or partnerships.</span>
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="form contact-form">
        <div className="first-row">
          <input
            name="name"
            placeholder="Name"
            type="text"
            required
            minLength={2}
          />
        </div>

        <div className="second-row">
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
            title="Введіть коректну email-адресу"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input name="subject" placeholder="Subject" type="text" />
        </div>

        <div className="third-row">
          <textarea
            name="message"
            placeholder="Message"
            required
            minLength={10}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          className="contact-btn inner-info-link"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <Modal isOpen={open} onClose={() => setOpen(false)} autoCloseMs={2500}>
        <p>✅ Дякуємо! Ваше повідомлення надіслано.</p>
      </Modal>
    </div>
  );
};

export default ContactRight;
