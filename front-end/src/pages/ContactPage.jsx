import Navbar from "../components/Navbar";

function Contact() {
  return (
    <main className="page contact-page">
      <header className="header">
        <div className="brand">HomeStay Booking</div>
        <Navbar />
      </header>

      <section className="contact-shell">
        <div className="contact-intro">
          <span className="feature-badge">Contact Us</span>
          <h1>Can ho tro ban tim homestay phu hop</h1>
          <p>
            Gui thong tin cho chung toi neu ban can tu van ve dia diem, gia
            phong hoac lich dat cho chuyen di sap toi.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-card">
              <h3>Email</h3>
              <p>booking@homestay.vn</p>
            </div>
            <div className="contact-info-card">
              <h3>Phone</h3>
              <p>0123 213 213</p>
            </div>
            <div className="contact-info-card">
              <h3>Support hours</h3>
              <p>08:00 - 22:00 moi ngay</p>
            </div>
          </div>
        </div>

        <section className="contact-form-card">
          <h2>De lai loi nhan</h2>
          <form className="contact-form">
            <label htmlFor="name">Ho ten</label>
            <input id="name" type="text" name="name" placeholder="Nhap ho ten" required />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="ban@email.com"
              required
            />

            <label htmlFor="message">Noi dung</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Ban muon tim homestay o dau, tam gia nao?"
            ></textarea>

            <button type="submit">Gui thong tin</button>
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contact;
