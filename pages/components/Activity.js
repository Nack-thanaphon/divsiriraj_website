import Image from "next/image";
import Link from "next/dist/client/link";

export default function Activity() {
  return (
    <>


      <li className="list-group my-1">
        <Link href="">
          <a className="text-decoration-none">
            <div className="m-0 p-0">
              <div className="row m-0 p-0 d-flex justify-content-between">
                <div className="col-4 m-0 p-0">
                  <img width="100%"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
