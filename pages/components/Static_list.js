import Image from "next/image";
import Link from "next/dist/client/link";

export default function Activity() {
  return (
    <div className="card my-2 p-2">
      <Link href="./static/single_static">
        <a className="text-decoration-none">
          <div className="col-12 col-sm-12 m-0 p-0 ">
            <h3>Hr Division Management System</h3>
            <p></p>
            <small className="text-muted">
              อัพเดตข้อมูลล่าสุด : 13-18 มกราคม 2564
            </small>
            <br />
            <small className="text-muted">
              ผู้ดูแลข้อมูล <a href="http://">ทีมพัฒนาคุณภาพ</a>
            </small>
          </div>
        </a>
      </Link>
    </div>
  );
}
