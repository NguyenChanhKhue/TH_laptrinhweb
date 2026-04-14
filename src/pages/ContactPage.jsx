import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <header>
        <h1>Booking Homestay</h1>
        <p>Trang đặt phòng homestay đơn giản</p>
      </header>

      <Navbar/>

      <hr />

      {/* FEATURES */}
      <section id="features">
        <h2>Features</h2>

        <ul>
          <li>
            <h3>Homestay đẹp</h3>
            <p>Không gian sạch sẽ, tiện nghi, thoải mái.</p>
          </li>

          <li>
            <h3>Vị trí thuận tiện</h3>
            <p>Gần trung tâm, dễ dàng di chuyển đến các điểm du lịch.</p>
          </li>

          <li>
            <h3>Giá hợp lý</h3>
            <p>Nhiều mức giá phù hợp cho mọi nhu cầu.</p>
          </li>
        </ul>
      </section>

      <hr />

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>

        <form>
          <div>
            <label>Họ tên:</label>
            <br />
            <input type="text" name="name" required />
          </div>

          <br />

          <div>
            <label>Email:</label>
            <br />
            <input type="email" name="email" required />
          </div>

          <br />

          <div>
            <label>Nội dung:</label>
            <br />
            <textarea name="message" rows="5"></textarea>
          </div>

          <br />

          <button type="submit">Gửi</button>
        </form>
      </section>

      <hr />

      <footer>
        <p>© 2026 Booking Homestay</p>
      </footer>
    </>
  );
}

export default Contact;