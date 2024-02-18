import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
        <img 
        className="w-full h-screen object-cover"
        src="https://source.unsplash.com/white-clouds-during-daytime-FIKD9t5_5zQ" 
        alt="main" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
          <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I&apos;m Liad Ovdat</h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800"> I&apos;m 

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'a Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'a Coder',
                1000,
                'a Tech Enthusiast',
                2000,
                'an Outside the Box Thinker',
                2000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
            </h2>
            <div className="flex justify-between pt-6 max-w-[200px] w-full">
              <a href="https://www.linkedin.com/in/liad-ovdat-developer1/">
                <FaLinkedin className="cursor-pointer" size={20}/>
              </a>
              <a href="https://github.com/LiadOvdat5?tab=repositories://github.com/your-github-profile">
                <FaGithub className="cursor-pointer" size={20}/>
              </a>
              <a href="https://www.instagram.com/liad_ovdat/">
                <FaInstagram className="cursor-pointer" size={20}/>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Main;
