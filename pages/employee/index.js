import Header from "../components/Header";
import Footer from "../components/Footer";

import Employee_card from "../components/Employee_card";


export default function Employee() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row ">
          <div className="col-12 m-0 py-4">
            <h2>รายชื่อบุคคลากร</h2>
          </div>
          <div className="col-12 m-0 ">
            <Employee_card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
