import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                linkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/saul-chipwayambokoma-11525b1b5/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/chipwayambokomas',
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:chipwayambokomas@outlook.com',

            // mailto: opens up the users mail
            
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Saul Chipwayambokoma CV.pdf',
            style: 'rounded-br-md',
            download: true,
            
        },
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0  fixed">
      <ul>
        {/* When you add hover then change the css of something else thenit changes the whole thing which is really cool. Tailwind makes things so much easier! */}

        {links.map(({id, child, href, download}) => (
             <li className="flex justify-between items-center w-40 h-14 px-4 bg-zinc-500 hover:rounded-md duration-300 hover:ml-[-10px] ml-[-100px]" key={id} >
          <a
            href={href}
            className="flex justify-between items-center w-full text-white"
            download={download}
            // Allows you to open a new tab
            target='_blank' 
rel='noreferrer'
          >
            {child}
          </a>
        </li>
        ))}

       
      </ul>
    </div>
  );
};

export default SocialLinks;
