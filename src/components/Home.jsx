import React from "react";
import heroImg from "../assets/heroImage_resized.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    // We do not usually use a name attribute in react but it will be useful when creating the smart scroll

    // via meand midpoint of gradient

    <div
      name="Home"
      className=" h-auto md:h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-400 pt-20 md:pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a B.Bus.Sci Student.
          </h2>
          <p className="text-gray-400 max-w-md py-4">
            Studying at the University of Cape Town, I aspire to be in the frontline of the charge towards the
            exploration and development of cutting edge technology. Motivated by
            nothing but the sheer will to learn, curiosity and the patriotic
            duty to help public and private organisations realize their full
            potential and utilize technology to attain said potential.
          </p>

          <div>
            {/* Adding group to the outer div and group- to the inner button allows them to function in unity */}

            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </button>
          </div>
        </div>

        <div className="pt-10 md:pt-0">
          <img
            src={heroImg}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
