// import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  let news = "ประกาศสำนักงาน";
  return (
    <div className="contianer">
      <div className="navbar">
        <nav className=" flex justify-around py-8 mx-auto bg-gradient-to-r from-blue-900 to-blue-600 text-white">
          <div className="flex items-center">
            <Image
              src="https://www.si.mahidol.ac.th/th/division/assets_template/img/Siriraj_Logo.png"
              alt=""
             layout="fill"
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
      </div>
      <main className="h-10 ">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3  my-5 m-4">
          <div className="sm:col-span-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <h5 className=" text-black-400 text-3xl uppercase font-bold">
                  News
                </h5>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="my-3">
                <div className="p-1 sm:p-4 text-start bg-gray-100 shadow-lg">
                  {/* <Image
                    src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                    alt=""
                    layout="fill"
                    width="20px"
                    objectFit="contain"
                  /> */}
                  <h1 className="text-xl py-2 font-bold">กิจกรรมหาวิทยาลัย</h1>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vero, iure!
                  </small>{" "}
                  <br />
                  <small className="text-gray-500">
                    10 day ago | <span>Thanaphon kallaparuek</span>
                  </small>
                </div>
              </div>
              <div className="my-3">
                <div className="p-1 sm:p-4 text-start bg-gray-100 shadow-lg">
                  {/* <Image
                    src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                    alt=""
                    layout="fill"
                    width="20px"
                    objectFit="contain"
                  /> */}
                  <h1 className="text-xl py-2 font-bold">กิจกรรมหาวิทยาลัย</h1>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vero, iure!
                  </small>{" "}
                  <br />
                  <small className="text-gray-500">
                    10 day ago | <span>Thanaphon kallaparuek</span>
                  </small>
                </div>
              </div>
              <div className="my-3">
                <div className="p-1 sm:p-4 text-start bg-gray-100 shadow-lg">
                  {/* <Image
                    src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                    alt=""
                    layout="fill"
                    width="20px"
                    objectFit="contain"
                  /> */}
                  <h1 className="text-xl py-2 font-bold">กิจกรรมหาวิทยาลัย</h1>
                  <small>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vero, iure!
                  </small>{" "}
                  <br />
                  <small className="text-gray-500">
                    10 day ago | <span>Thanaphon kallaparuek</span>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className=" text-black-400 text-3xl uppercase font-bold">
              Event
            </h5>
          </div>
        </div>
      </main>
      {/* <div className="text-center my-4 bg-blue-500 p-6 ">
        <p className="text-white">คณะแพทยศาสตร์ศิริราช มหาวิทยาลัยมหิดล</p>
      </div> */}
    </div>
  );
}
