import { useState } from "react";
import ContactData from "./ContactData";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFeedback(
      "Your form passed frontend validation. This prototype does not send messages yet."
    );

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <p className="text-primary fw-semibold text-uppercase small">
            {ContactData.subtitle}
          </p>
          <h1 className="fw-bold">{ContactData.title}</h1>
          <div className="heading-line mx-auto" />
          <p className="text-secondary mt-3">
            {ContactData.description}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="content-card h-100">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              {ContactData.details.map((detail) => (
                <div
                  className="d-flex align-items-center gap-3 mb-4"
                  key={detail.label}
                >
                  <div className="contact-icon">
                    <i className={`bi ${detail.icon}`} />
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">{detail.label}</h6>

                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={
                          detail.href.startsWith("https://")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          detail.href.startsWith("https://")
                            ? "noreferrer"
                            : undefined
                        }
                        className="text-secondary text-decoration-none text-break"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-secondary mb-0">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="content-card">
              <h4 className="fw-bold mb-4">Send a Message</h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill px-4"
                    >
                      Submit Message
                      <i className="bi bi-send ms-2" />
                    </button>
                  </div>
                </div>
              </form>

              {feedback && (
                <div
                  className="alert alert-info mt-4 mb-0"
                  role="status"
                >
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;