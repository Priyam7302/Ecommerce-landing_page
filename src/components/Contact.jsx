export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll contact you soon.");
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        Have a question or feedback? We'd love to hear from you.
      </p>

      <form className="contact-form glass" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
}
