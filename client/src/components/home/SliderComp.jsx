import React from "react";
import Slider from "react-slick";

//images
import Img1 from "./images/5.png";
import Img2 from "./images/33.jpg";
import Img3 from "./images/1.png";
import Img4 from "./images/44.jpg";

const SliderComp = () => {
  //slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        <div className="!flex items-center bg-[#aeb9e5] text-white">
          <div className="p-10">
            <h1 className="text-6xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <h1 className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              velit. Dolores totam consequuntur saepe nemo corporis dolorum quia
              nam delectus.
            </h1>
            <button className="bg-white text-[#aeb9e5]   font-bold shadow-xl shadow-slate-600 px-4 py-2 rounded-md">
              Hemen Başla
            </button>
          </div>
          <img className="w-1/4 h-[400px]  " src={Img1} alt="" />
        </div>
        <div className="!flex items-center bg-[#cad6ec]">
          <div className="p-10">
            <h1 className="text-6xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <h1 className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              velit. Dolores totam consequuntur saepe nemo corporis dolorum quia
              nam delectus.
            </h1>
            <button className="bg-[#212121] text-white font-bold shadow-xl shadow-slate-700 px-4 py-2 rounded-md">
              Hemen Başla
            </button>
          </div>
          <img className="w-1/4 h-[400px] object-cover" src={Img2} alt="" />
        </div>
        <div className="!flex items-center text-white bg-[#d4bcc8]">
          <div className="p-10 ">
            <h1 className="text-6xl font-bold  ">
              Lorem ipsum dolor sit amet.
            </h1>
            <h1 className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              velit. Dolores totam consequuntur saepe nemo corporis dolorum quia
              nam delectus.
            </h1>
            <button className="bg-white text-black font-bold shadow-xl shadow-slate-700 px-4 py-2 rounded-md">
              Hemen Başla
            </button>
          </div>
          <img className="w-1/4 h-[400px] object-cover" src={Img3} alt="" />
        </div>
        <div className="!flex items-center text-white bg-[#763fa4]">
          <div className="p-10 ">
            <h1 className="text-6xl font-bold  ">
              Lorem ipsum dolor sit amet.
            </h1>
            <h1 className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              velit. Dolores totam consequuntur saepe nemo corporis dolorum quia
              nam delectus.
            </h1>
            <button className="bg-white text-black font-bold shadow-xl shadow-slate-400 px-4 py-2 rounded-md">
              Hemen Başla
            </button>
          </div>
          <img className="w-1/4 h-[400px] object-cover" src={Img4} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
