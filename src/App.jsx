import { useState } from "react";

import "./App.css";

const homestays = [
  {
    name: "Moc May Homestay",
    location: "Da Lat",
    price: "650.000d / dem",
  },
  {
    name: "Bien Nho House",
    location: "Vung Tau",
    price: "820.000d / dem",
  },
  {
    name: "Nha Go Retreat",
    location: "Sa Pa",
    price: "1.150.000d / dem",
  },
];

function App() {
  return (
    <main className="page">
      <header className="header">
        <div className="brand">HomeStay Booking</div>
        <nav className="nav">
          <a href="home">Home page</a>
          <a href="feature">HomeStay</a>
          <a href="contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <p>Đặt phòng nhanh và đơn giản</p>
          <h1>Tìm HomeStay lý tưởng cho kỳ nghỉ của bạn</h1>
        </div>
      </section>

      <section className="section" id="feature">
        <div className="section-title">
          <h2>HomeStay noi bat</h2>
          <p>Lựa chọn nổi bật cho chuyến đi sắp tới của bạn</p>
        </div>

        <div className="card-list">
          {homestays.map((item) => (
            <article className="card" key={item.name}>
              <div className="card-image"></div>
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              <strong>{item.price}</strong>
              <button>Booking now</button>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <h2>Sẵn sàng cho chuyến đi tiếp theo</h2>
        <p>PhoneNumber : 0123213213 | Email: khue@gmail.com</p>
      </footer>
    </main>
  );
}

export default App;
