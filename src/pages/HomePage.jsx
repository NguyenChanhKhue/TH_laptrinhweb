import Navbar from "../components/Navbar";
const homestays = [
  {
    name: "Moc May Homestay",
    location: "Da Lat",
    price: "650.000d / dem",
    image : "https://tse1.mm.bing.net/th/id/OIP._pyCHYjvdFq3lfXdeVR4bwHaFE?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Bien Nho House",
    location: "Vung Tau",
    price: "820.000d / dem",
    image : "https://tse3.mm.bing.net/th/id/OIP.wpmKGOAS6gdlZUHIM7wHWwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Nha Go Retreat",
    location: "Sa Pa",
    price: "1.150.000d / dem",
    image : "https://xiengretreat.com/wp-content/uploads/2025/06/Man-1-28-min-1.jpg"
  },
];
function Home() {
  return (
    <main className="page">
      <header className="header">
        <div className="brand">HomeStay Booking</div>
        <Navbar />
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
              <div className="card-image">
                <img src={item.image} alt="homestay" />
              </div>
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
export default Home;