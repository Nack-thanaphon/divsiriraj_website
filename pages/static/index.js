import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Static_list from "../components/Static_list";
import Link from "next/link";

export default function stactic() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row ">
          <div className="col-12 m-0 py-4">
            <h2>รายงานผลการดำเนินการ</h2>
          </div>
          <div className="col-12 m-0 ">
            <Static_list />
            <Static_list />
            <Static_list />
            <Static_list />
            <Static_list />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
