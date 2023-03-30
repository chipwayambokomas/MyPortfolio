import React from "react";
import mercuryexpress from "../assets/portfolio/mercuryexpressproject.png";
import firstportfolio from "../assets/portfolio/firstportfolio.png";
import taskmanager from '../assets/portfolio/taskmanager.png'
import storeapi from '../assets/portfolio/storeapi.png'
import jobapi from "../assets/portfolio/jobsapi.png";
import jwt from '../assets/portfolio/jwt.png'
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import {GrReactjs} from 'react-icons/gr';
import {AiFillHtml5} from 'react-icons/ai';
import {SiJavascript, SiTailwindcss, SiExpress, SiMongodb} from 'react-icons/si';



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      source: mercuryexpress,
      shortBio:
        "Foundation code for the Front-end of a Zambian Logistics company. My first code outside of school guidlines. My favorite page is the Blog page.",
        Glink: 'https://github.com/chipwayambokomas/Mercury.co.za',
      Warning: 'Notice: Only GitHub-Link acctive at this moment',
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
        "I was asked to provide a portfolio and realized I did not have one, developing a website for my portfolio would be good practice. I got familiar with Tailwind CSS.",
        Glink:'https://github.com/chipwayambokomas/MyPortfolio',
        Wlink: 'https://saulchipwayambokoma.netlify.app/',
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
      {
      id: 3,
      source: taskmanager,
      shortBio:
        "This was my first attempt at a nodejs/expressjs project. It's a task manager that receives data from an API I created.",
        Glink:'https://github.com/chipwayambokomas/Task-Manager',
          Warning: 'Notice: Only GitHub-Link acctive at this moment',
        child:(
            <div className="flex flex-row">
            <div className="px-2 text-orange-600 ">
            <AiFillHtml5 size={25}/>
            </div>
            <div className="px-2 text-yellow-400 ">
            <SiJavascript size={25}/>
        </div>
       
        <div className="px-2 text-lime-700 ">
            <FaNodeJs size={25}/>
        </div>
        <div className="px-2 text-white ">
            <SiExpress size={25}/>
        </div>
        <div className="px-2 text-lime-700 ">
            <SiMongodb size={25}/>
        </div>
        </div>
            
        )
    },
      
      {
      id: 4,
      source: storeapi,
      shortBio:
        "This is a storeAPI that allows sorting, numeric and categorical filtering as well as name searching. It also allows dynamic page functionality i.e page 1, page 2.",
        Glink:'https://github.com/chipwayambokomas/StoreAPI',
         Warning: 'Notice: Only GitHub-Link acctive at this moment',
        child:(
            <div className="flex flex-row">
  
            <div className="px-2 text-yellow-400 ">
            <SiJavascript size={25}/>
        </div>
       
        <div className="px-2 text-lime-700 ">
            <FaNodeJs size={25}/>
        </div>
        <div className="px-2 text-white ">
            <SiExpress size={25}/>
        </div>
        <div className="px-2 text-lime-700 ">
            <SiMongodb size={25}/>
        </div>
        </div>
            
        )
    },
      
      {
      id: 5,
      source: jwt,
      shortBio:
        "In this project I learnt how to create JWT tokens to provide restricted access to specific routes and data.",
        Glink:'https://github.com/chipwayambokomas/jsonWebTokens',
          Warning: 'Notice: Only GitHub-Link acctive at this moment',
        child:(
            <div className="flex flex-row">
            <div className="px-2 text-orange-600 ">
            <AiFillHtml5 size={25}/>
            </div>
            <div className="px-2 text-yellow-400 ">
            <SiJavascript size={25}/>
        </div>
       
        <div className="px-2 text-lime-700 ">
            <FaNodeJs size={25}/>
        </div>
        <div className="px-2 text-white ">
            <SiExpress size={25}/>
        </div>
        <div className="px-2 text-lime-700 ">
            <SiMongodb size={25}/>
        </div>
        </div>
            
        )
    },
       {
      id: 6,
      source: jobapi,
      shortBio:
        "In this project I created an API for a Job tracker, it allows a user to login or register and once done the server will pass a jsonWebToken to the user allowing the user to create, delete, edit and display jobs only for said user.",
        Glink:'https://github.com/chipwayambokomas/StoreAPI',
        Wlink: 'https://chipwayambokomas-job-api-v0.herokuapp.com/',
        child:(
            <div className="flex flex-row">
  
            <div className="px-2 text-yellow-400 ">
            <SiJavascript size={25}/>
        </div>
       
        <div className="px-2 text-lime-700 ">
            <FaNodeJs size={25}/>
        </div>
        <div className="px-2 text-white ">
            <SiExpress size={25}/>
        </div>
        <div className="px-2 text-lime-700 ">
            <SiMongodb size={25}/>
        </div>
        </div>
            
        )
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-400 w-full text-white md:h-auto"
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
          {portfolios.map(({ id, source, shortBio, Glink, child, Wlink, Warning }) => (
            <div key={id} className="shadow-md shadow-slate-700 bg-slate-600 rounded-lg">
              <img
                src={source}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                 <a href={Wlink}>
                <button className="w-1/2 px-12 m-3 duration-200 hover:scale-105">
                  <BsGlobe2 size={25} />
                </button>
                </a>

               <a href={Glink}>
                <button className="w-1/2 px-12 m-3 duration-200 hover:scale-105">
                  <FaGithub size={25} />
                </button>
                </a>
              
              </div>
              <div className="mb-3">
                <p className="px-2 text-yellow-400 font-extrabold text-sm">{Warning}</p>
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
