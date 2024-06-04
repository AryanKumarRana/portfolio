import React from "react";
import HeroImg from "../assests/HeroImg.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-auto w-full bg-gradient-to-b from-black
      via-black to-gray-800 pt-40"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center 
      justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold
          text-white"
          >
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-xs">
            Greetings! I am Aryan, a passionate and ambitious
            third-year B.Tech student with a keen interest in the dynamic world
            of full-stack web development. As a fresher, I bring a fresh
            perspective and an insatiable curiosity to the ever-evolving field
            of technology. Driven by the desire to create seamless and engaging
            digital experiences, I have immersed myself in the intricacies of
            full-stack development. My journey into web development has not only
            equipped me with the technical skills required for the job but has
            also instilled in me a problem-solving mindset and a commitment to
            delivering high-quality solutions.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 
            flex items-center rounded-md bg-gradient-to-r 
            from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight
                  size={25}
                  className="ml-1
                "
                />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImg}
            alt="my pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
