import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const sliderdata=[
  {
    id:1,
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut quis nostrud exercitation ullamco laboris nisi ut Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  " ,
    img:"https://preview.colorlib.com/theme/foundation/images/person_1.jpg",
    name:"Mellisa Griffin"

  },
  {
    id:2,
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut quis nostrud exercitation ullamco laboris nisi ut Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  " ,
    img:"https://preview.colorlib.com/theme/foundation/images/person_3.jpg",
    name:"Robert Steward"
  },
  {
    id:3,
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utquis nostrud exercitation ullamco laboris nisi ut Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  " ,
    img:"https://preview.colorlib.com/theme/foundation/images/person_4.jpg",
    name:"Ricky Fisher"

  },
  {
    id:4,
    para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut quis nostrud exercitation ullamco laboris nisi utExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  laborum   " ,
    img:"https://preview.colorlib.com/theme/foundation/images/person_2.jpg",
    name:"Ken Davis"

  },

]
const Donate = () => {
  return (
    <>
      <div className="bg-hero relative bg-center p-24 bg-cover bg-no-repeat bg-fixed ">
        <div className="container mx-auto text-center relative z-10">
          <h1 className=" text-white font-oswald text-[2.1rem] mb-4 ">
            Make A Donation Now! You May <br /> Change Lives Forever
          </h1>
          <button className="text-white bg-orange-500 hover:bg-orange-800 transition p-2 w-[28rem] rounded h-14">
            Donate Now
          </button>
        </div>
      </div>
      <section className="p-32">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-orange-500 text-[1.7rem] font-oswald font-bold mb-3">
                  Make Donation
                </h2>
                <p className="leading-relaxed text-gray-400 font-raleway font-semibold text-sm">
                  Blue bottle crucifix post-ironic four dollar toast vegan
                  taxidermy mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-orange-500 text-[1.7rem] font-oswald font-bold mb-3">
                  Medical Health
                </h2>
                <p className="leading-relaxed text-gray-400 font-raleway font-semibold text-sm ">
                  Blue bottle Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-orange-500 text-[1.7rem] font-oswald font-bold mb-3">
                  Food for the Poor
                </h2>
                <p className="leading-relaxed  text-gray-400 font-raleway font-semibold text-sm ">
                  Blue bottle Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 pt-14  mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-orange-500 text-[1.7rem] font-oswald font-bold mb-3">
                  Help & Love
                </h2>
                <p className="leading-relaxed text-gray-400 font-raleway font-semibold text-sm">
                  Blue bottle crucifix post-ironic four dollar toast vegan
                  taxidermy mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-orange-500 text-[1.7rem] font-oswald font-bold mb-3">
                  Give To The Needy
                </h2>
                <p className="leading-relaxed text-gray-400 font-raleway font-semibold text-sm ">
                  Blue bottle Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-orange-500 text-[1.7rem] font-oswald font-bold mb-3">
                  Volunteer
                </h2>
                <p className="leading-relaxed  text-gray-400 font-raleway font-semibold text-sm ">
                  Blue bottle Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col text-center w-full mt-24 mb-8">
        <h1 className=" text-[4rem] font-bold title-font font-oswald mb-4 text-black uppercase">
          Our leadership{" "}
        </h1>
        <p className="lg:w-2/3 mx-auto px-28 leading-relaxed font-raleway font-medium text-gray-400 text-base">
          Whatever cardigan tote bag tumblr . Franzen you probably haven't heard
          of them man bun deep jianbing selfies heirloom prism food truck ugh
          squid celiac humblebrag.
        </p>
      </div>
      <div className="container flex mx-auto mt-14 gap-x-8 px-24 text-center mb-28 ">
        <div className="basis-1/3 border  ">
          <img
            src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg"
            alt=""
            className="rounded-full mt-6 mb-10 mx-auto w-32"
          />
          <p className="uppercase text-gray-400 font-raleway tracking-widest pb-5 text-xs">
            mining expert
          </p>
          <p className="text-gray-500 leading-6 font-raleway pb-5 px-10  text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            repellat. At, soluta. Repellendus vero, consequuntur!
          </p>
          <div className="btns gap-x-1 flex pb-8 text-center justify-center">
            <button className="bg-orange-500 rounded p-2">
              <FaFacebookF className="text-white text-base" />
            </button>
            <button className="bg-orange-500 rounded p-2">
              <BsTwitter className="text-white text-base" />
            </button>
            <button className="bg-orange-500 rounded p-2">
              <BsInstagram className="text-white text-base" />
            </button>
          </div>
        </div>
        <div className="basis-1/3 border ">
          <img
            src="	https://preview.colorlib.com/theme/foundation/images/person_2.jpg"
            alt=""
            className="rounded-full mt-6 mb-10 mx-auto w-32"
          />
          <p className="uppercase text-gray-400 font-raleway tracking-widest pb-5 text-xs">
            PROJECT MANAGER
          </p>
          <p className="text-gray-500 leading-6 font-raleway pb-5 px-10  text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            repellat. At, soluta. Repellendus vero, consequuntur!
          </p>
          <div className="btns gap-x-1 flex pb-8 text-center justify-center">
            <button className="bg-orange-500 rounded p-2">
              <FaFacebookF className="text-white text-base" />
            </button>
            <button className="bg-orange-500 rounded p-2">
              <BsTwitter className="text-white text-base" />
            </button>
            <button className="bg-orange-500 rounded p-2">
              <BsInstagram className="text-white text-base" />
            </button>
          </div>
        </div>
        <div className="basis-1/3 border ">
          <img
            src="https://preview.colorlib.com/theme/foundation/images/person_3.jpg"
            alt=""
            className="rounded-full mt-6 mb-10 mx-auto w-32"
          />
          <p className="uppercase text-gray-400 font-raleway tracking-widest pb-5 text-xs">
            engineer
          </p>
          <p className="text-gray-500 leading-6 font-raleway pb-5 px-10  text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            repellat. At, soluta. Repellendus vero, consequuntur!
          </p>
          <div className="btns gap-x-1 flex pb-8 text-center justify-center">
            <button className="bg-orange-500 rounded p-2">
              <FaFacebookF className="text-white text-base" />
            </button>
            <button className="bg-orange-500 rounded p-2">
              <BsTwitter className="text-white text-base" />
            </button>
            <button className="bg-orange-500 rounded p-2">
              <BsInstagram className="text-white text-base" />
            </button>
          </div>
        </div>
      </div>
      <div className="testimonial bg-hero relative bg-center p-24 bg-cover bg-no-repeat bg-fixed ">
        <div className="flex flex-col text-center w-full mt-0 mb-8">
          <h1 className=" text-[4rem] font-bold  font-oswald mb-4 text-white z-10 uppercase">
            Testimonial{" "}
          </h1>
        </div>
        <Swiper className="mb-24"
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sliderdata && sliderdata.map((item)=>(
          <SwiperSlide className="text-center" key={item.id}>
            <p className="bg-white p-8 tracking-wider font-cursive text-lg font-medium leading-7">
              
            {item.para}
            </p>
            <img src={item.img} className="rounded-full mt-10 w-16 mx-auto " alt="" />
            <p className="uppercase font-oswald text-white  pt-5">{item.name}</p>

          </SwiperSlide>

          ))}
     
          
        </Swiper>
      </div>
    </>
  );
};

export default Donate;
