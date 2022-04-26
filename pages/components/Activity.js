import Image from "next/image";
import Link from "next/dist/client/link";

export default function Activity() {
  return (
    <>
   
        <li className="my-1">
          <Link href="">
            <a className=" text-decoration-none">
              <div className="">
                <div className="row m-0">
                  <div className="col-4 m-0 p-0">
                    <img width="100%"
                      src="https://images.unsplash.com/photo-1650831174246-7e7b2e3b77e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    ></img>
                  </div>
                  <div className="col-8">
                    <p>Lorem, ipsum dolor....</p>
                    <small className="text-muted">13-18 มกราคม 2564</small>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </li>
      
    </>
  );
}
