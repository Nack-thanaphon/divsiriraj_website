import Link from "next/link";
import Image from "next/dist/client/image";

let News = "มหาวิทยาลัยมหิดล ประกาศรับสมัครงาน";
const Card = () => (
  <Link href="/[id]" as={News}>
    <div className="p-2 sm:p-4 text-start bg-gray-100 shadow-lg news_img">
      <Image
        src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        alt=""
        layout="responsive"
        width={10}
        height={10}
        objectFit="cover"
      />
      <h1 className="text-xl py-1 font-bold text-blue-400">กิจกรรมหาวิทยาลัย</h1>
      <small>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, iure!
      </small>
      <br />
      <small className="text-gray-500">
        10 day ago | <span>Admin</span>
      </small>
    </div>
  </Link>
);

export default Card;

