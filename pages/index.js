import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Activity from "./components/Activity";
import Link from "next/link";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <Slider />
          </div>
          <div className="bg-light col-12 my-2">
            <div className="row py-4">
              <div className="col-sm-4 col-12 pb-5">
                <h2 className="text-primary">ข้อมูลสถิติ</h2>
                <p>ฝ่ายวิศวกรรมบริการและอาคารสถานที่</p>
                <small>ข้อมูลประจำปี 2565</small>
              </div>
              <div className="col-sm-8 col-12">
                <div className="row">
                  <div className="col-sm-4 col-12">
                    <p className="text-primary">จำนวนพนักงาน</p>
                    <h1 className="fw-bold">20</h1>
                  </div>
                  <div className="col-sm-4 col-12">
                    <p className="text-primary">จำนวนหน่วยงาน</p>
                    <h1 className="fw-bold">8</h1>
                  </div>
                  <div className="col-sm-4 col-12">
                    <p className="text-primary">ปัญหาที่พบเจอ</p>
                    <h1 className="fw-bold">0</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h1 className="text-primary">ข่าวสาร</h1>
              <p className="text-uppercase fw-bold">newsupdate</p>

              <Link href="./[id].js">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h1 className="text-primary">ข้อมูลสถิติ</h1>
              <p className="text-uppercase fw-bold">Data-stactic</p>

              <Link href="./Testapi" className="btn btn-success">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h1 className="text-primary">วาระการประชุม</h1>
              <p className="text-uppercase fw-bold">Agenda</p>
              <Link href="./[id].js" className="btn btn-success">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-12 col-md-8  p-1">
              <div className="card h-100 p-3">
                <h3 className="p-0 my-2">ประมวณภาพกิจกรรม</h3>
                <ul className="m-0 p-0">
                  <Activity />
                  <Activity />
                  <Activity />
                  <Activity />
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 p-1">
              <div className="card p-3">
                <h3 className="p-0 my-2">กิจกรรมที่กำลังมา</h3>
                <ul className="m-0 p-0">
                  <Activity />
                  <Activity />
                  <Activity />
                  <Activity />
                </ul>
              </div>
              <div className="card p-3 mt-sm-1">
                <h3 className="p-0 my-2">ประกาศรับสมัครงาน</h3>
                <ul className="m-0 p-0">
                  <Activity />
                  <Activity />
                  <Activity />
                  <Activity />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
