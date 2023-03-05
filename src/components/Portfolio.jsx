import React from "react";
import mercuryexpress from "../assets/portfolio/mercuryexpressproject.png";
import firstportfolio from "../assets/portfolio/firstportfolio.png";
import { FaGithub } from "react-icons/fa";
// import { BsGlobe2 } from "react-icons/bs";
import {GrReactjs} from 'react-icons/gr';
import {AiFillHtml5} from 'react-icons/ai';
import {SiJavascript, SiTailwindcss} from 'react-icons/si';



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      source: mercuryexpress,
      shortBio:
        "Foundation code for the Front-end of a Zambian Logistics company. My first code outside of school guidlines. My favorite page is the Blog page.",
        Glink: 'https://github.com/chipwayambokomas/Mercury.co.za',
        child:(
            <div className="flex flex-row">
            <div className="px-2 text-cyan-600 ">
                <GrReactjs size={25}/>
            </div>
            <div className="px-2 text-orange-600 ">
            <AiFillHtml5 size={25}/>
            </div>
            <div className="px-2 text-yellow-400 ">
            <SiJavascript size={25}/>
        </div>
        </div>
            
        )

    },
    {
      id: 2,
      source: firstportfolio,
      shortBio:
        "I was asked to provide a portfolio and realized I did not have one, deveoping a website for my portfolio would be good practice. I got familiar with Tailwind CSS",
        Glink:'https://github.com/chipwayambokomas/MyPortfolio',
        child:(
            <div className="flex flex-row">
            <div className="px-2 text-cyan-600 ">
                <GrReactjs size={25}/>
            </div>
            <div className="px-2 text-orange-600 ">
            <AiFillHtml5 size={25}/>
            </div>
            <div className="px-2 text-yellow-400 ">
            <SiJavascript size={25}/>
        </div>
        <div className="px-2 text-cyan-600 ">
            <SiTailwindcss size={25}/>
        </div>
        </div>
            
        )
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-400 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
         h-full pt-32"
      >
        <div>
          <p className="text-4xl  font-bold inline border-b-4  ">Portfolio</p>

          <p className="py-6">Check out some of my work right here.</p>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, source, shortBio, Glink, child }) => (
            <div key={id} className="shadow-md shadow-slate-700 bg-slate-600 rounded-lg">
              <img
                src={source}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-12 m-3 duration-200 hover:scale-105">
                  <BsGlobe2 size={25} />
                </button> */}

               <a href={Glink}>
                <button className="w-1/2 px-12 m-3 duration-200 hover:scale-105">
                  <FaGithub size={25} />
                </button>
                </a>
              
              </div>
              <div className="mb-3">
                <p className="px-2">{shortBio}</p>
              </div>

              <div className="mb-3">
                {child}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
