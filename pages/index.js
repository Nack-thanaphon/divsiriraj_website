import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="container flex justify-around py-8 mx-auto bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="flex items-center">
        <img
          src="https://www.si.mahidol.ac.th/th/division/assets_template/img/Siriraj_Logo.png"
          alt=""
        />
      </div>

      <div className="items-center hidden space-x-8 lg:flex">
        <a href="">หน้าหลัก</a>
        <a href="">เกี่ยวเรา</a>
        <a href="">ข่าวสาร</a>
        <a href="">ติดต่อเรา</a>
        <a href="">ดาวน์โหลด</a>
      </div>

      <div className="flex items-center space-x-2"></div>
    </nav>
  );
}
