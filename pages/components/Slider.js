import Image from 'next/image';




export default function Slider() {
  return (

    <div id="carouselExampleIndicators" className="carousel slide d-none d-sm-block" data-bs-ride="carousel">

      <div className="carousel-inner " >
        <div className="carousel-item active ">
          <img width="100%" src="https://www.si.mahidol.ac.th/th/division/faci.envi/admin/pr_images/6_1_LGsQFu.jpg" alt=""></img>
        </div>
      </div>

    </div>

  );
} 
