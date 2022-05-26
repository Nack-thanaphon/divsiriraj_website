import Image from "next/image";
import Link from "next/dist/client/link";

export default function Activity() {
  return (
    <>
      <div className="col-12 card my-2 p-2">
        <Link href="./static/single_static">
          <a className="text-decoration-none">
            <div className="row m-0 p-0">
              <div className="col-12 col-sm-3 m-0 p-0 ">
                <img
                  src="https://www.si.mahidol.ac.th/sirirajhospital/dricut/6.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-12 col-sm-9 m-0 p-0 my-auto text-center pt-5 p-sm-0 text-sm-start ">
                <h3>ผศ.นพ.ธารา วงศ์วิริยางกูร</h3>
                <p>รองผู้อำนวยการโรงพยาบาลศิริราช</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="col-12 card my-2 p-2">
        <Link href="./static/single_static">
          <a className="text-decoration-none">
            <div className="row m-0 p-0">
              <div className="col-12 col-sm-3 m-0 p-0 ">
                <img
                  src="https://www.si.mahidol.ac.th/sirirajhospital/dricut/6.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-12 col-sm-9 m-0 p-0 my-auto text-center pt-5 p-sm-0 text-sm-start ">
                <h3>นาง วลัยพร โลหะประภากุล</h3>
                <p className="text-muted">
                  หัวหน้าฝ่ายวิศวกรรมบริการและอาคารสถานที่
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="col-12 card my-2 p-2">
        <Link href="./static/single_static">
          <a className="text-decoration-none">
            <div className="row m-0 p-0">
              <div className="col-12 col-sm-3 m-0 p-0 ">
                <img
                  src="https://www.si.mahidol.ac.th/sirirajhospital/dricut/6.png"
                  alt=""
                  width="100%"
                />
              </div>
              <div className="col-12 col-sm-9 m-0 p-0 my-auto text-center pt-5 p-sm-0 text-sm-start ">
                <h3>นางสาว วิยดา หมั่นหาทรัพย์</h3>
                <p className="text-muted">เจ้าหน้าที่บริหารงานทั่วไป</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
