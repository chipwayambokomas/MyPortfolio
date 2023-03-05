import React from "react";

const About = () => {
  return (
    <div name='About' className="w-full h-full md:h-screen bg-gradient-to-b to-slate-900 from-slate-400 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 ">About</p>
        </div>

        <div>
          <p className="text-xl mt-10">
          I wrote my first code when I was in primary school. I remember it quite vaguely but from what I recall we were told to develop a game using a software called Scratch and we were supposed to get a cat looking avatar to chase a mouse around the computer screen. I found it so interesting, I had always loved games, little did I know that was the beginning of my interest in tech. 
          </p>
        </div>

        <br />
        <p className="text-xl">
        Several years later in high school when I was picking my IGCSE’s subjects, computer science was a no brainer. I ended up developing the practice code using VS.net that the class was to use in our examination, most of us passed with flying colours and when it was time to pick my AS-Level classes…well…
        </p>

        <br />
        <p className="text-xl">
        Not long from then I am now in my second year at the University of Cape Town studying a Bachelor of Business Science degree specializing in Computer Science. I consider myself to be a hardworking, goal driven, relentless and innovative worker and a natural born leader with the ability to implement my own ideas whilst following instructions in order to establish efficient carrying out of tasks given. I hope to one day learn enough to make a significant change in the continent I am from. I meaningful change.
        </p>
      </div>
    </div>
  );
};

export default About;
