// import Head from "next/head";
import Link from "next/link";

import Card from "./components/Card.js";
import Headers from "./components/Header.js";



export default function index() {
  
  return (
    <>
    <Headers />
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
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="my-3">
                <Card />
               
              </div>
              <div className="my-3">
                <Card />
               
              </div>
              <div className="my-3">
                <Card />
               
              </div>
              <div className="my-3">
                <Card />
               
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
    </>
  );
}
