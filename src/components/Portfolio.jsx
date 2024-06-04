import React from "react";
import kickOff from "../assests/portfolio/kickOff.jpg";
import faceEmotion from "../assests/portfolio/faceEmotion.jpg";
import spotifyClone from "../assests/portfolio/spotifyClone.jpg";
import voiceChatbot from "../assests/portfolio/voiceChatbot.jpg";
import signLang from "../assests/portfolio/signLang.jpg";
import telecare from "../assests/portfolio/Telecare.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: kickOff,
      code: "https://github.com/AryanKumarRana/KickOff",
    },
    {
      id: 2,
      src: spotifyClone,
      code: "https://github.com/AryanKumarRana/Spotify-Clone",
    },
    {
      id: 3,
      src: voiceChatbot,
      code: "https://github.com/AryanKumarRana/voice-recogniton-chatbot",
    },
    {
      id: 4,
      src: telecare,
      code: "https://github.com/AryanKumarRana/Telecare",
    },
    {
      id: 5,
      src: signLang,
      code: "https://github.com/AryanKumarRana/Sign_Language_Recognition_using_ML",
    },
    {
      id: 6,
      src: faceEmotion,
      code: "https://github.com/AryanKumarRana/Face_Emotion_Recognition_using_ML",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-auto pt-40"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here...</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200
                          hover:scale-105"
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200
                          hover:scale-105"
                >
                  <a href={code} target="_blank">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
