import React from "react";

const About = () => {
  return (
    <div name='About' className="w-full h-screen bg-gradient-to-b to-slate-900 from-slate-400 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 ">About</p>
        </div>

        <div>
          <p className="text-xl mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            reiciendis totam ex culpa minus voluptates at ullam iure, quisquam
            sed. Architecto, est? Sed consequuntur numquam nam maiores eius
            alias omnis.
          </p>
        </div>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim
          accusamus maxime voluptate reiciendis, sunt nisi dolores unde adipisci
          ullam ipsa vitae voluptas. Tenetur voluptatum maxime omnis, expedita
          dolorum sit?
        </p>
      </div>
    </div>
  );
};

export default About;
