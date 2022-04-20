// import Head from "next/head";
// import Link from "next/link";

import Card from "./components/Card";

export default function Home() {
  return (
    <div className="contianer">
      <nav className=" flex justify-around py-8 mx-auto bg-gradient-to-r from-teal-900 to-blue-600 text-white">
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:grid-cols-6 bg-gray mx-auto p-4">
        <div className="bg-gradient-to-r from-green-500 to-blue-400">1</div>
        <div className="bg-gradient-to-r from-green-500 to-blue-400">1</div>
        <div className="bg-gradient-to-r from-green-500 to-blue-400">1</div>
        <div className="bg-gradient-to-r from-green-500 to-blue-400">1</div>
        <div className="bg-gradient-to-r from-green-500 to-blue-400">1</div>
        <div className="bg-gradient-to-r from-green-500 to-blue-400">1</div>
        <div className="bg-gradient-to-r from-green-500 to-blue-400">1</div>

        <Card />
      </div>
      <footer className="text-center my-4 bg-blue-500 p-6 fix-bottom">
        <p className="text-white">คณะแพทยศาสตร์ศิริราช มหาวิทยาลัยมหิดล</p>
      </footer>
    </div>
  );
}
