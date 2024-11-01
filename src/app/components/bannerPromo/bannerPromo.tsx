import { Carousel } from "flowbite-react";

export default function BannerPromo() {
  return (
    <div className="w-3/4 mx-auto h-56 sm:h-64 xl:h-80 rounded-lg sm:rounded-xl mt-10">
      <Carousel 
        pauseOnHover
        className="h-full"
      >
        <img 
          src="https://cdn0.fahasa.com/media/magentothem/banner7/NotebookcollectionT1024_Slidebanner_840x320_v2.png" 
          alt="Banner promotion" 
          className="w-full h-full object-cover"
        />
        <img 
          src="https://cdn0.fahasa.com/media/magentothem/banner7/TrangCTT11_1124_Mainbanner_840x320.jpg" 
          alt="Banner promotion" 
          className="w-full h-full object-cover"
        />
        {/* Other carousel items */}
      </Carousel>
    </div>
  );
}
