const Header = () => {
  return (
    <header className="container p-3 bg-primary text-white">
      <div className="row ">
        <div className="col-12 col-sm-4">
          <a href="#" className=" text-white text-decoration-none">
            <h4 className="fw-bold">DivisionSiriraj</h4>
            <small>ฝ่ายวิศวกรรมบริการและอาคารสถานที่</small>
          </a>
        </div>

        <ul className="nav col-12 col-sm-8 d-none  col-sm-8 d-flex  justify-content-end ">
          <li>
            <a href="#" className="nav-link px-2 text-white">
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              ข่าวและบทความ
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              ดาวน์โหลด
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              หน่วยงานภายใน
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              ติดต่อเรา
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
