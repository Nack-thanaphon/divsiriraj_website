import { useRouter } from "next/router";
import Headers from "./components/Header.js";
import Image from "next/image";


export default () => {
  const router = useRouter();
  const r = router.query.id;

  return (
    <div>
      <Headers />
      <div className="container-sm">
        <div className="text-center ">
          <h1 className="text-blue-600 text-5xl py-4 my-8 font-bold">{r}</h1>
          <div className="m-8">
            <Image
              src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
              alt=""
              className="w-85"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="p-4">
            <p> {router.query.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
