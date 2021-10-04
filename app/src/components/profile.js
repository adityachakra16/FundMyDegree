import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import dp1 from "../images/dp1.jpg"

const Profile = (props) => {

  return (
    <div className="mb-16">

      <div className="flex flex-row mb-1">
        <div className="w-4/5">
          <span className="text-green-600 font-bold text-3xl text-left">John Doe</span>
        </div>
        <div className="flex w-1/5 align-right float-right">
          <a
              className="flex hover:text-green-600 text-black items-center"
              href={"https://www.linkedin.com/in/aditya-chakra/"}
              target="_blank"
              rel="noreferrer"
            >
            <i className="fab fa-linkedin mx-4" />
          </a>
          <a
                className="flex hover:text-green-600 items-center"
                href={"https://www.linkedin.com/in/aditya-chakra/"}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-firefox-browser mx-4" />
            </a>
            <a
                className="flex hover:text-green-600 items-center"
                href={"https://www.linkedin.com/in/aditya-chakra/"}
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-portrait mx-4"></i>
            </a>
        </div>
      </div>
      <div className="mb-4">
       <span className="border-2 border-gray-600 rounded-full py-0.5 px-0.5 text-xs text-gray-600 ">Verified</span>
      </div>

      <div className="flex-1 text-xl mb-4 text-left">
        I just wanna go to college man. Please fund my degree so I can become an astronaut. Just another test line.
      </div>
      <div className="items-center mb-8">
        <img className="mr-4 h-96 w-144 items-center border-green-100 border-4 rounded-xl object-cover" src={dp1}></img>
      </div>
      <div className="flex flex-row mb-2">
        <div className="flex mr-4 text-sm items-end w-1/12">Year: </div>
        <div className="mr-4 text-xl">2022</div>
      </div>
      <div className="flex flex-row mb-2">
        <div className="flex mr-4 text-sm items-end w-1/12">Degree: </div>
        <div className="mr-4 text-xl">Bachelor's in Psychology</div>
      </div>
      <div className="flex flex-row  mb-8">
        <div className="flex mr-4 text-sm items-end w-1/12">College: </div>
        <div className="flex flex-row text-xl mr-4">Purdue University</div>
        <a 
          href={"https://www.purdue.edu/"} 
          target="_blank"
          rel="noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

      </div>
      <div className="mb-4 font-bold text-green-600 text-lg text-left">
          Why me?
        </div>
      <div className="flex-1 mb-16 text-left">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </div>
      <div className="flex flex-row items-center justify-center">
        <button className="w-48 bg-green-600 text-white rounded-full py-3 px-3 ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 outline-none">Donate</button>
      </div>
    </div>
 
  )
};

export default Profile;