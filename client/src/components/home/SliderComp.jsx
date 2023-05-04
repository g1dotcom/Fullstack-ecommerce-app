import React from "react";
import Slider from "react-slick";

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
        <div className="!flex items-center text-white bg-[#c86b5a]">
          <div className="p-10">
            <h1 className="text-6xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <h1 className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              velit. Dolores totam consequuntur saepe nemo corporis dolorum quia
              nam delectus.
            </h1>
            <button className="bg-white text-[#c86b5a]   font-bold shadow-xl shadow-slate-600 px-4 py-2 rounded-md">
              Hemen Başla
            </button>
          </div>
          <img
            className="w-1/3 h-[400px] object-cover "
            src="https://img.freepik.com/free-vector/realistic-rose-smartphone-design-with-three-cameras_23-2148370886.jpg?w=826&t=st=1683210008~exp=1683210608~hmac=d6e3ce78709c39747183ecce2fec0c0c75e4d64c436f5bffe3f2ffa4b286cfd7"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-200">
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
          <img
            className="w-1/3 h-[400px] object-cover"
            src="https://img.freepik.com/free-vector/realistic-smartphone-with-black-back-cover_23-2148385252.jpg?w=826&t=st=1683209570~exp=1683210170~hmac=df86ceea65093fc3d39e5d73f8dfa459fccebb0d8026838de3865b95995fd210"
            alt=""
          />
        </div>
        <div className="!flex items-center text-white bg-gray-400">
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
          <img
            className="w-1/3 h-[400px] object-cover"
            src="https://img.freepik.com/free-vector/realistic-blue-smartphone-design-with-two-cameras_23-2148370887.jpg?t=st=1683210008~exp=1683210608~hmac=934ba224a5bd3fe710d96de32993495c2cd9e1693ddb8aebb4f6abbfde8403ba"
            alt=""
          />
        </div>
        <div className="!flex items-center text-white bg-gray-800">
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
          <img
            className="w-1/3 h-[400px] object-cover"
            src="https://img.freepik.com/free-vector/gradient-phone-screen-light-blue-case_23-2148367407.jpg?t=st=1683210112~exp=1683210712~hmac=ae3f68ccee9b04196f1021a8dbde28d87401bd4688036ef31fb3e8f113e8c644"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
