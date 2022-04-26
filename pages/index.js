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
              <div className="col-4">
                <h3 className="text-primary">ข้อมูลสถิติ</h3>
                <small>ข้อมูลประจำปี 2565</small>
              </div>
              <div className="col-8">
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
              <h1>ข่าวสาร</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius?
              </small>
              <Link href="./[id].js" className="btn btn-success">
                Readmore
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h1>ข้อมูลสถิติ</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius?
              </small>
              <Link href="./[id].js" className="btn btn-success">
                Readmore
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h1>ดาวน์โหลด</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius?
              </small>
              <Link href="./[id].js" className="btn btn-success">
                Readmore
              </Link>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-12 col-md-8 p-1">
              <div className="card p-3 shadow-sm">
                <h3 className="p-0 my-3 ">ค้นหาเอกสาร</h3>
                <div className="form-group">
                  <input type="text" className="form-control" />
                  <br />
                  <div className="row m-0">
                    <div className="col-8 p-1 ">
                      <div className="btn btn-success w-100">
                        ค้นหาข้อมูลภายใน
                      </div>
                    </div>
                    <div className="col-4 p-1 ">
                      <div className="btn btn-outline-primary w-100">
                        ติดต่อเอดมิน
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 p-1">
              <div className="card p-3">
                <h3 className="p-0 my-2">กิจกรรม</h3>
                <ul>
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
