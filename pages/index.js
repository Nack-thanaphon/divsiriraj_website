import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Activity from "./components/Activity";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
                <div className="row m-0 p-0 ">
                  <div className=" col-sm-4">
                    <h3>อุบัติเหตุ</h3>
                    <h1>0</h1>
                  </div>
                  <div className=" col-sm-4">
                    <h3>ข้อร้องเรียน</h3>
                    <h1>2</h1>
                  </div>
                  <div className=" col-sm-4">
                    <h3>งานแก้ปัญหา</h3>
                    <h1>1,000</h1>
                  </div>
                </div>
              </div>
              {/* <Link href="./employee" className="col-sm-8 col-12">
                <div className="row m-0 p-0">
                  <div className="col-sm-4 col-12">
                    <p className="text-primary">จำนวนพนักงาน</p>
                    <h3 className="fw-bold">20</h3>

                  </div>
                  <div className="col-sm-4 col-12">
                    <p className="text-primary">จำนวนหน่วยงาน</p>
                    <h3 className="fw-bold">8</h3>
                  </div>
                  <div className="col-sm-4 col-12">
                    <p className="text-primary">ปัญหาที่พบเจอ</p>
                    <h3 className="fw-bold">0</h3>
                  </div>
                </div>
              </Link> */}
            </div>
          </div>

          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">เกี่ยวกับเรา</h3>
              <p className="text-uppercase fw-bold">about us</p>

              <Link href="./[id].js">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">บุคคลากร</h3>
              <p className="text-uppercase fw-bold">employee</p>

              <Link href="./[id].js">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">แจ้ง-ร้องเรียน</h3>
              <p className="text-uppercase fw-bold">report-complaint</p>

              <Link href="./[id].js">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">ติดต่อ</h3>
              <p className="text-uppercase fw-bold">contract us</p>

              <Link href="./[id].js">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">หน่วยงานภายใน</h3>
              <p className="text-uppercase fw-bold">internal department</p>

              <Link href="./[id].js">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">ข่าวสาร</h3>
              <p className="text-uppercase fw-bold">newsupdate</p>

              <Link href="./[id].js">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">ข้อมูลสถิติ</h3>
              <p className="text-uppercase fw-bold">Data-stactic</p>

              <Link href="./static" className="btn btn-success">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-sm-4 m-0 p-1">
            <div className="card p-2 bg-light shadow-sm">
              <h3 className="text-primary">วาระการประชุม</h3>
              <p className="text-uppercase fw-bold">Agenda</p>
              <Link href="./[id].js" className="btn btn-success">
                <a>อ่านเพิ่มเติม</a>
              </Link>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-12 col-md-8  p-1">
              <div className="card h-100 p-3">
                <h3 className="p-0 my-2">ประกาศรับสมัครงาน</h3>
                <hr />
                <ul className="m-0 p-0">
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                  <li className="list-unstyled mb-3 ">
                    <p className="p-0 m-0 fw-bold">
                      ตำแหน่ง : นักวิชาการทั่วไป
                    </p>
                    <small>สถานะ : ประกาศรับสมัคร</small>
                    <br />
                    <small>ตั้งแต่วันที่ : 15-20 มิถุนายน 2565</small>
                    <br />
                    <a href="">ดาวน์โหลดเอกสาร</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 p-1">
              <div className="card p-3">
                <h3 className="p-0 my-2">กิจกรรมที่กำลังมา</h3>
                <hr />

                <ul className="m-0 p-0">
                  <Activity />
                  <Activity />
                  <Activity />
                  <Activity />
                </ul>
              </div>
              <div className="card p-3 mt-sm-1">
                <h3 className="p-0 my-2">ประมวณภาพกิจกรรม</h3>
                <hr />

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
    </>
  );
}
