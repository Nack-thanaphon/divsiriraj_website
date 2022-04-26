import { useRouter } from "next/router";
import Headers from "./components/Header.js";

import Image from "next/image";

export default () => {
  const router = useRouter();
  const r = router.query.id;

  function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
  }

  let constructorObject = {
    speak: function () {
      return "i am a dog";
    },
  };
  let name = router.query.id
  let bingo = DogObject(name, 54);
  let tt = [];

  tt = `สวัสดีเราเป็นหมา ชื่อ ${bingo.name} อายุ ${bingo.age}`;

  return (
    <div>
      <Headers />
      <div className="container-sm">
        <div className="text-center ">
          <h1 className="text-blue-600 text-5xl py-4 my-8 font-bold">{r}</h1>
          <h1>{tt}</h1>
          <div className="p-4">
            <p> {router.query.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
