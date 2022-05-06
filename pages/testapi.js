import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Activity from "./components/Activity";
import Link from "next/link";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <iframe width="100%" height="450" src="https://datastudio.google.com/embed/reporting/00a8db70-2f45-4506-9791-825216031ec9/page/vMnpC" ></iframe>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
