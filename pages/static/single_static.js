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


                        <iframe width="100%" height="2000" src="https://datastudio.google.com/embed/reporting/f0dee039-2d7e-44fd-8ef2-a340ebfdd378/page/xI6sC" ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}



