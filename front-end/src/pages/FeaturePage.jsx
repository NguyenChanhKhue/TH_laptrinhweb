import Navbar from "../components/Navbar";

function Feature() {
  return (
    <main className="page feature-page">
      <header className="header">
        <div className="brand">HomeStay Booking</div>
        <Navbar />
      </header>

      <section className="feature-hero">
        <span className="feature-badge">Featured Experience</span>
        <h1>Nhung diem noi bat giup chuyen di de chiu hon</h1>
        <p>
          Tu khong gian dep, vi tri thuan tien den quy trinh dat phong nhanh,
          moi tinh nang deu duoc thiet ke de ban chon phong de dang.
        </p>
      </section>

      <section className="feature-grid-section">
        <div className="section-title">
          <h2>Tinh nang chinh</h2>
          <p>Bo cuc ro rang, thong tin day du va trai nghiem dat phong muot ma.</p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Khong gian an tuong</h3>
            <p>
              Hinh anh lon, sach se va mo ta ngan gon giup ban hinh dung nhanh
              ve phong va tien ich.
            </p>
          </article>

          <article className="feature-card">
            <h3>Vi tri de di chuyen</h3>
            <p>
              Goi y diem den gan trung tam, quan ca phe va khu vui choi de tiet
              kiem thoi gian.
            </p>
          </article>

          <article className="feature-card">
            <h3>Muc gia linh hoat</h3>
            <p>
              Nhieu khoang gia khac nhau, phu hop cho cap doi, nhom ban va gia
              dinh.
            </p>
          </article>

          <article className="feature-card">
            <h3>Dat phong nhanh</h3>
            <p>
              Giao dien don gian, thao tac it buoc va de theo doi thong tin
              truoc khi xac nhan.
            </p>
          </article>
        </div>
      </section>

      <section className="feature-highlight">
        <div>
          <p className="eyebrow">Why users like it</p>
          <h2>Truc quan, gon va tap trung vao trai nghiem dat phong</h2>
        </div>
        <ul className="feature-points">
          <li>The hien thong tin quan trong ngay tu man hinh dau tien.</li>
          <li>Phan tach tinh nang ro rang de nguoi dung de so sanh lua chon.</li>
          <li>Ho tro hien thi dep tren ca desktop va mobile.</li>
        </ul>
      </section>
    </main>
  );
}

export default Feature;
