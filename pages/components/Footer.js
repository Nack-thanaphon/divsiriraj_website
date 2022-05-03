const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              หน้าหลัก
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              ติดต่อเรา
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              เกี่ยวกับเรา
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              คำถามที่พบบ่อย
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              ดาวน์โหลด
            </a>
          </li>
        </ul>
        <p className="text-center text-muted sm-row">© 2022 Division | <span className="text-primary">Siriraj Mahidol University</span> , IT Support</p>
      </footer>
    </div>
  );
};

export default Footer;