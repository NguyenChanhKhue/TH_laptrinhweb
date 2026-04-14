import './App.css'

const homestays = [
  {
    name: 'Moc May Homestay',
    location: 'Da Lat',
    price: '650.000d / dem',
  },
  {
    name: 'Bien Nho House',
    location: 'Vung Tau',
    price: '820.000d / dem',
  },
  {
    name: 'Nha Go Retreat',
    location: 'Sa Pa',
    price: '1.150.000d / dem',
  },
]

function App() {
  return (
    <main className="page">
      <header className="header">
        <div className="brand">HomeStay Booking</div>
        <nav className="nav">
          <a href="#hero">Trang chu</a>
          <a href="#featured">Homestay</a>
          <a href="#contact">Lien he</a>
        </nav>
      </header>

      <section className="hero" id="hero">
        <div className="hero-content">
          <p className="eyebrow">Dat phong nhanh va don gian</p>
          <h1>Tim homestay ly tuong cho ky nghi cua ban</h1>
          <p className="hero-text">
            Kham pha nhung khong gian am cung, gia hop ly va de dang dat phong
            chi trong vai buoc.
          </p>

          <form className="search-box">
            <input type="text" placeholder="Dia diem" />
            <input type="date" />
            <input type="number" min="1" placeholder="So khach" />
            <button type="button">Tim phong</button>
          </form>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="section-title">
          <h2>Homestay noi bat</h2>
          <p>Mot so lua chon duoc yeu thich cho chuyen di sap toi cua ban.</p>
        </div>

        <div className="card-list">
          {homestays.map((item) => (
            <article className="card" key={item.name}>
              <div className="card-image"></div>
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              <strong>{item.price}</strong>
              <button type="button">Dat ngay</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-title">
          <h2>Dat phong chi trong 3 buoc</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Chon dia diem</h3>
            <p>Nhap noi ban muon den va thoi gian luu tru.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Xem thong tin</h3>
            <p>So sanh gia, tien ich va hinh anh cua homestay.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Dat phong</h3>
            <p>Hoan tat thong tin va xac nhan phong nhanh gon.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <h2>San sang cho chuyen di tiep theo?</h2>
        <p>Hotline: 0123 456 789 | Email: booking@homestay.vn</p>
      </footer>
    </main>
  )
}

export default App
