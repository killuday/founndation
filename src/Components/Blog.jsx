import React from "react";

const Blog = () => {
  return (
    <>
      <div className="container mx-auto  p-20">
        <h1 className=" text-[4rem] text-center mt-5  font-bold font-oswald mb-4 text-black uppercase">
          Our Blog
        </h1>
        <p className="text-center text-gray-400 font-raleway text-sm font-medium leading-6 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ab
          possimus fugiat, <br /> autem aliquid, commodi quod voluptatum
          consectetur.
        </p>
        <div className="flex pt-6">
          <div className="basis-1/2 pr-3 ">
            <img
              src="	https://preview.colorlib.com/theme/foundation/images/hero_1_no-text.jpg"
              className="rounded"
              alt=""
            />
            <h3 className="capitalize font-oswald cursor-pointer font text-orange-500 text-3xl pt-6 hover:text-orange-800 transition-colors">
              How to Invest In Investing Company
            </h3>
            <p className="pt-3 text-xs font-raleway tracking-wider">
              <span className="text-gray-500 uppercase ">
                january 18,2023 by
              </span>{" "}
              <span className=" uppercase cursor-pointer hover:text-orange-800 transition-colors text-orange-500">james cooper</span>
            </p>
            <p className="text-gray-400 font-medium font-raleway pt-5 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              et suscipit iste libero neque. Vitae quidem ducimus voluptatibus
              nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa
              quis!
            </p>
            <p className="pt-5">
              <span className="capitalize cursor-pointer  text-orange-500 hover:text-orange-800 text-base font-medium transition-colors font-raleway ">
                get started
              </span>
            </p>
          </div>
          <div className="basis-1/2 pl-3 ">
            <img
              src="https://preview.colorlib.com/theme/foundation/images/hero_2_no-text.jpg"
              className="rounded"
              alt=""
            />
            <h3 className="capitalize cursor-pointer font-oswald font text-orange-500 text-3xl pt-6 hover:text-orange-800 transition-colors">
              How to Invest In Investing Company
            </h3>
            <p className="pt-3 text-xs font-raleway tracking-wider">
              <span className="text-gray-500 uppercase ">
                january 18,2023 by
              </span>{" "}
              <span className=" uppercase cursor-pointer hover:text-orange-800 transition-colors text-orange-500">james cooper</span>
            </p>
            <p className="text-gray-400 font-medium font-raleway pt-5 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              et suscipit iste libero neque. Vitae quidem ducimus voluptatibus
              nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa
              quis!
            </p>
            <p className="pt-5">
              <span className="capitalize cursor-pointer text-orange-500 hover:text-orange-800 text-base font-medium transition-colors font-raleway ">
                read more
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
