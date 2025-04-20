import React from 'react'
// import profile from "../assest/photo.jpeg"
// import shoppingImage from "../assest/project1.png"
// import weatherImage from "../assest/project2.png"
// import project3 from "../assest/project3.png"
import { MdMyLocation } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
// import html from "../assest/HTML.png"
// import css from "../assest/CSS.png"
// import express from "../assest/Express.png"
// import java from "../assest/Javascript.svg"
// import tailwaind from "../assest/Tailwind.png"
// import redux from "../assest/Redux.svg"
// import typescript from "../assest/Typescript.svg"
// import vercel from "../assest/Vercel.svg"
// import nextjs from "../assest/NextJsCircle.png"
// import nodejs from "../assest/NodeJs.svg"
// import mongodb from "../assest/MongoDB.svg"
// const profile= "https://res.cloudinary.com/dxyygkfd9/image/upload/v1744994631/WhatsApp_Image_2025-04-18_at_22.11.12_d6d1210a_xzeqo6.jpg"
// //  <FaGithub />
// import React from 'react'
// import profile from "../assest/photo.jpeg"
// import shoppingImage from "../assest/project1.png"
// import weatherImage from "../assest/project2.png"
// import project3 from "../assest/project3.png"
// import { MdMyLocation } from "react-icons/md";
// import { CiMail } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import html from "../assest/HTML.png"
// import css from "../assest/CSS.png"
// import express from "../assest/Express.png"
// import java from "../assest/Javascript.svg"
// import tailwaind from "../assest/Tailwind.png"
// import redux from "../assest/Redux.svg"
// import typescript from "../assest/Typescript.svg"
// import vercel from "../assest/Vercel.svg"
// import nextjs from "../assest/NextJsCircle.png"
// import nodejs from "../assest/NodeJs.svg"
// import mongodb from "../assest/MongoDB.svg"
import { NavLink } from 'react-router-dom';
const profile= "https://res.cloudinary.com/dxyygkfd9/image/upload/v1744994631/WhatsApp_Image_2025-04-18_at_22.11.12_d6d1210a_xzeqo6.jpg"
const project3="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744993257/project3_gwmc0r.png"
const react="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963363/React_t0oheu.png"
const mongodb="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963357/MongoDB_h8vp6b.svg"
const nodejs="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963358/NodeJs_gxf6bv.svg"
const nextjs="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963358/NextJsCircle_bctlyb.png"
const vercel="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963367/Vercel_cklm40.svg"
const typescript="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963365/Typescript_blqdv4.svg"
const redux="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963364/Redux_yshwba.svg"
const tailwaind ="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963364/Tailwind_inzxjc.png"
const java="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963355/Javascript_rpsgvn.svg"
const express="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963350/Express_fjh9gk.png"
const css="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963350/CSS_s66kk8.png"
const html="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744963354/HTML_oxizxq.png"
const shoppingImage="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744985956/shoopingImage_u6dluz.jpg"
const weatherImage="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744985955/weatherImage_vdexcr.jpg"
{/* <button className= " opacity-80  bg-[#007EE3] text-white  px-9 py-4 border-2 flex items-center hover:opacity-100 "> 
      <div className="  flex flex-row gap-4 ">
     
        <div className="">
        <FaGithub className="relative top-1"/>
        </div>
        
        <div className=" text-[18px]"><p>Shooping Cart</p></div>
        
      </div>
      
      </button>  */}

function AboutMe() {
  return (
    <div className="overflow-hidden lg:mt-[150px] mt-[40px]">
<div className="mx-auto flex flex-row gap-6 lg:mt-[20px] justify-center items-center flex-wrap lg:flex-nowrap">
  {/* left side */}
  <div className="lg:w-1/2 space-y-6 w-full">
    <div className="lg:text-4xl text-2xl  px-7">
      <span>
      I'M A FULL STACK DEVELOPER.<br></br>
      PASSIONATE ABOUT BUILDING SCALABLE WEB APPLICATIONS.
      </span>
    </div>

    <div className="flex flex-row gap-6 text-sm leading-relaxed opacity-65">
      {/* first paragraph */}
      <div className="lg:w-2/3 px-7 py-4 lg:text-[15px] w-full text-[10px]">
      I'm a passionate full stack developer working with modern technologies to build real-world, user-friendly applications. My tech stack includes JavaScript, React, Redux, Tailwind CSS, Node.js, Express, MongoDB, and Next.js. I enjoy turning ideas into fully functional products and solving real-world problems with clean, scalable code. 
<br/> <br/>
Whether it's frontend design or backend architecture, I love the challenge of creating seamless user experiences and efficient systems. I'm constantly learning and exploring new tools to stay updated and improve my development workflow. Building cool and impactful projects is what drives me every day as a developer.
      </div>

    </div>
  </div>

  {/* right side */}
  <div className="w-[300px] flex justify-center lg:mt-0 mt-14">
    <img src={profile} className="h-[400px] w-[400px] object-cover" alt="Contact" />
  </div>
</div>

{/* <div className=" mb-20 flex justify-center items-center text-4xl mt-32">
  <p>My Project,s</p>
</div>

 <button className= "  ml-10 mb-5 opacity-80  bg-[#007EE3] text-white  px-9 py-4 border-2 flex items-center hover:opacity-100 "> 
      <div className="  flex flex-row gap-4 ">
     
        <div className="">
        <FaGithub className="relative top-1 text-[40px]"/>
        </div>
        
        <div className=" text-[30px]"><p>Shooping Cart</p></div>
        
      </div>
      
      </button> 

<div className="relative w-full h-[600px] bg-cover " style={{ backgroundImage:` url(${shoopingImage})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
  {/* <section ref={ref}> */}
  {/* <div className={`absolute bg-white top-[70px] left-[80px] w-[620px] px-16 py-24 rounded-md scale-95 hover:scale-110
    transform transition-all duration-1000 ease-in-out`}>
    <p className="font-semibold text-3xl">
      DESIGNERS DON'T WALK ALONE.<br />
      BEHIND HARD WORK, THERE'S ALWAYS A FANTASTIC TEAM BEHIND ME.
    </p>
    <p className="text-[14px] mt-[19px] opacity-45">
    I had the pleasure of experience building some amazing products and features with many talented people. From big tech to startup, from navigating across different orgs to wearing many different hats, I enjoy collaborating with people to solve tough problems out there in the world.
    </p>
  </div> */}
{/* // </section> */}

{/* // </div> */}


{/* <section class=""> */}
{/* <button className= "  ml-10 mb-5  mt-10 opacity-80  bg-[#007EE3] text-white  px-9 py-4 border-2 flex items-center hover:opacity-100 "> 
      <div className="  flex flex-row gap-4 ">
     
        <div className="">
        <FaGithub className="relative top-1 text-[40px]"/>
        </div>
        
        <div className=" text-[30px]"><p>Weather App</p></div>
        
      </div>
      
      </button> 
<div className="relative w-full h-[600px] bg-cover bg-fit object-fit" style={{ backgroundImage: `url(${weatherImage})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="absolute bg-white top-[70px] right-[80px] w-[620px] px-16 py-24 rounded-md scale-95 hover:scale-110
    transform transition-all duration-1000 ease-in-out">
   <p className="font-semibold text-3xl">
   DESIGNERS DON'T WALK ALONE.  
   BEHIND HARD WORK, THERE'S ALWAYS A FANTASTIC TEAM BEHIND ME.
   </p>

   <p className="text-[14px] mt-[19px] opacity-45">
   I had the pleasure of experience building some amazing products and features with many talented people. From big tech to startup, from navigating across different orgs to wearing many different hats, I enjoy collaborating with people to solve tough problems out there in the world.
   </p>
</div>
</div> */}
{/* // </section> */}
{/* // reach out to linkin */}
{/* <section class=""> */}

<div>
    <div className="bg-[#e7e7e7] mt-32" id="projects">
  <h2 className="lg:text-[90px] text-[50px] text-center text-[#007EE3] pt-8 font-bold">Projects</h2>

  <div className="max-w-[1200px] mx-auto py-12 flex flex-col gap-[120px]">
    
    {/* Project Card */}
    <div
      className="relative w-[90%] h-[550px] mx-auto bg-cover bg-center shadow-[0_0_40px_#1f1f1f] rounded-md overflow-hidden group lg:-left-[80px]"
      style={{ backgroundImage: `url(${shoppingImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1f1f1f9a] z-10"></div>
      {/* Gradient reveal on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#343d68] via-[#343d68be] to-[#343d687c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

      {/* Project Number */}
      {/* <div className="absolute right-[-40px] top-[-45px] text-white text-[200px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        01
      </div> */}

      {/* Project Content */}
      <div className="absolute bottom-[20%] left-[10%] z-30 text-white flex flex-col gap-4 w-[80%] group-hover:scale-105 transition-transform duration-500">
        
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2">
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={html} alt="HTML" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={css} alt="CSS" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={java} alt="JavaScript" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={tailwaind} alt="Tailwind CSS" />
          {/* <img className="w-10" src={nextjs} alt="Next.js" /> */}
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={express} alt="Express.js" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={nodejs} alt="Node.js" />
          {/* <img className="w-10" src={mongodb} alt="MongoDB" /> */}
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={redux} alt="Redux" />
          {/* <img className="w-10" src={vercel} alt="Vercel" /> */}
        </div>

        {/* Title & Description */}
        <h2 className="lg:text-[50px] text-[30px] font-bold leading-[3rem]">Shopping Cart</h2>
        <p className="w-[70%] italic lg:text-[16px] text-[12px]">
        A shopping cart app where users can select items, add them to the cart, and checkout.      
        </p>

        {/* Buttons & Icons */}
        <div className="flex items-center gap-4 mt-2">
        <button className=" flex flex-row gap-2 bg-[#007EE3] text-white py-2 px-6 lg:text-[24px] text-[15px] font-medium border-2 border-transparent relative z-10 overflow-hidden transition-all duration-500 hover:text-black hover:border-bluish before:content-[''] before:absolute before:inset-0 before:bg-white before:z-[-1] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-500 rounded-md">
            <FaGithub className='lg:text-[30px] text-[21px]'/>
            <a href='https://github.com/Sameery-04/Shopping-cart'>Link</a>
            
          </button>
          {/* <a href="#" aria-label="GitHub Link">
            <i className="fa-brands fa-github text-white text-[35px] hover:text-[#e84949] transition-colors"></i>
          </a>
          <a href="#" aria-label="Live Link">
            <i className="fa-solid fa-link text-white text-[35px] hover:text-[#e84949] transition-colors"></i>
          </a> */}
        </div>
      </div>
    </div>
    {/* End Project Card */}
    
    
  </div>
  
  <div className="max-w-[1200px] mx-auto py-12 flex flex-col gap-[120px]">
    
    {/* Project Card */}
    <div
      className="relative w-[90%] h-[550px] mx-auto bg-cover bg-center shadow-[0_0_40px_#1f1f1f] rounded-md overflow-hidden group lg:-right-[80px]"
      style={{ backgroundImage: `url(${weatherImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1f1f1f9a] z-10"></div>
      {/* Gradient reveal on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#343d68] via-[#343d68be] to-[#343d687c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
      {/* bg-[#007EE3] */}
      {/* Project Number */}
      {/* <div className="absolute right-[-40px] top-[-45px] text-white text-[200px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        01
      </div> */}

      {/* Project Content */}
      <div className="absolute bottom-[20%] left-[10%] z-30 text-white flex flex-col gap-4 w-[80%] group-hover:scale-105 transition-transform duration-500">
        
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2">
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={html} alt="HTML" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={css} alt="CSS" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={java} alt="JavaScript" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={tailwaind} alt="Tailwind CSS" />
          {/* <img className="w-10" src={nextjs} alt="Next.js" /> */}
          {/* <img className="w-10" src={express} alt="Express.js" /> */}
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={nodejs} alt="Node.js" />
          {/* <img className="w-10" src={mongodb} alt="MongoDB" /> */}
          {/* <img className="w-10" src={redux} alt="Redux" /> */}
          {/* <img className="w-10" src={vercel} alt="Vercel" /> */}
        </div>

        {/* Title & Description */}
        <h2 className="lg:text-[50px] text-[30px] font-bold leading-[3rem]">Weather App</h2>
        <p className="w-[70%] italic lg:text-[16px] text-[12px]">
        A weather app that shows current conditions based on the user's location and allows searching.   
        </p>

        {/* Buttons & Icons */}
        <div className="flex items-center gap-4 mt-2">
        <button className=" flex flex-row gap-2 bg-[#007EE3] text-white py-2 px-6 lg:text-[24px] text-[15px] font-medium border-2 border-transparent relative z-10 overflow-hidden transition-all duration-500 hover:text-black rounded-md hover:border-bluish before:content-[''] before:absolute before:inset-0 before:bg-white before:z-[-1] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-500">
            <FaGithub className='lg:text-[30px] text-[21px]'/>
            <a href='https://github.com/Sameery-04/Weather-'>Link</a>
            
          </button>
          {/* <a href="#" aria-label="GitHub Link">
            <i className="fa-brands fa-github text-white text-[35px] hover:text-[#e84949] transition-colors"></i>
          </a>
          <a href="#" aria-label="Live Link">
            <i className="fa-solid fa-link text-white text-[35px] hover:text-[#e84949] transition-colors"></i>
          </a> */}
        </div>
      </div>
    </div>
    {/* End Project Card */}
    
    
  </div>


  <div className="max-w-[1200px] mx-auto py-12 flex flex-col gap-[120px]">
    
    {/* Project Card */}
    <div
      className="relative w-[90%] h-[550px] mx-auto bg-cover bg-center shadow-[0_0_40px_#1f1f1f] rounded-md overflow-hidden group lg:-left-[80px]"
      style={{ backgroundImage: `url(${project3})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1f1f1f9a] z-10"></div>
      {/* Gradient reveal on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#343d68] via-[#343d68be] to-[#343d687c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

      {/* Project Number */}
      {/* <div className="absolute right-[-40px] top-[-45px] text-white text-[200px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        01
      </div> */}

      {/* Project Content */}
      <div className="absolute bottom-[20%] left-[10%] z-30 text-white flex flex-col gap-4 w-[80%] group-hover:scale-105 transition-transform duration-500">
        
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2">
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={html} alt="HTML" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={css} alt="CSS" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={java} alt="JavaScript" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={tailwaind} alt="Tailwind CSS" />
          {/* <img className="w-10" src={nextjs} alt="Next.js" /> */}
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={express} alt="Express.js" />
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={nodejs} alt="Node.js" />
          {/* <img className="w-10" src={mongodb} alt="MongoDB" /> */}
          <img className="lg:w-10 lg:h-10 w-7 h-7" src={redux} alt="Redux" />
          {/* <img className="w-10" src={vercel} alt="Vercel" /> */}
        </div>

        {/* Title & Description */}
        <h2 className="lg:text-[50px] text-[30px] font-bold leading-[3rem]">KnapSack Game</h2>
        <p className="w-[70%] italic lg:text-[16px] text-[12px]">
        A knapsack game with food items where users select optimal choices within a money limit.   
        </p>

        {/* Buttons & Icons */}
        <div className="flex items-center gap-4 mt-2">
        <button className=" flex flex-row gap-2 bg-[#007EE3] text-white py-2 px-6 lg:text-[24px] text-[15px] font-medium border-2 border-transparent relative z-10 overflow-hidden transition-all duration-500 hover:text-black hover:border-bluish before:content-[''] before:absolute before:inset-0 before:bg-white before:z-[-1] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-500 rounded-md">
            <FaGithub className='lg:text-[30px] text-[21px]'/>
            <a href='https://github.com/Sameery-04/Games-of-Knapsack'>Link</a>
            
          </button>
          {/* <a href="#" aria-label="GitHub Link">
            <i className="fa-brands fa-github text-white text-[35px] hover:text-[#e84949] transition-colors"></i>
          </a>
          <a href="#" aria-label="Live Link">
            <i className="fa-solid fa-link text-white text-[35px] hover:text-[#e84949] transition-colors"></i>
          </a> */}
        </div>
      </div>
    </div>
    {/* End Project Card */}
    
    
  </div>
</div>
</div>



<div className="mt-[75px] flex flex-col justify-center items-center">
    <div className="w-[37%] space-y-5">
     <p className="text-center lg:text-3xl text-2xl font-semibold">REACH OUT!</p>
     <p className="lg:text-[15px] text-[9px]">Do you have questions about design or just simply want to reach out to me?
     {/* <p className="text-center">I'd love to chat through email or any social media channels. Hit me up!</p> */}
     </p>
    
    </div>
    <a href="https://www.linkedin.com/in/sameer-yadav-bba7402a5/" target="_blank" className="border-2 mx-auto flex justify-center items-center mt-8 rounded-md px-6 py-4 bg-[#007EE3] bg-opacity-90 text-white hover:bg-opacity-100 lg:text-[17px] text-[10px]"
>
  Connect to LinkedIn
</a>

</div>




{/* // </section> */}
{/* <script src="script.js"></script> */}
 {/* footer */}
  {/* footer */}
 
  <div className=" w-full  opacity-80 mt-16 overflow-hidden">
                        <footer className=" flex text-white  flex-col flex-wrap relative gap-10 text-sm top-[20px]  bg-[#768591]  lg:pl-24 pl-16 pt-16 pb-9 pr-10 w-full">
                          <div className=" flex flex-row flex-wrap lg:flex-nowrap gap-20 lg:gap-[160px] lg:w-[400px] w-[80%]">
                  
                             {/* left side footer */}
                            <div className=" space-y-6">
                            <div className="w-[150%]">
                              <span className="text-xl">ABOUT ME</span>
                              </div>
                              <div>
                              <p className=" opacity-80 w-full  lg:w-[420px]">
                              I'm a full stack developer passionate about building scalable web applications. I enjoy solving problems, writing clean code, and continuously learning to grow my skills across frontend and backend technologies.                              </p>
                  
                              <p className=" mt-4 text-3xl font-niconne">Sameer Yadav</p>
                              </div>
                            </div>
                  
                            {/* right side footer */}
                            <div  className="space-y-6">
                            <p className="text-xl w-full">
                             NAVIGATION
                            </p>
                  
                           <ul className=" space-y-4 cursor-pointer">
                           <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[33%] hover:text-white hover:opacity-100'>
                           
                           <li className=''>
                           <NavLink to='/'>
                           Home
                           </NavLink>
                           </li>
                          
                           
                            </div>
                            <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[35%] hover:text-white hover:opacity-100'><li><li className=''>
                           <NavLink to='/about'>
                          About
                           </NavLink>
                           </li></li></div>
                            <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[35%] hover:text-white hover:opacity-100'><li><li className=''>
                           <NavLink to='/skills'>
                           Skills
                           </NavLink>
                           </li> </li></div>

                            <div className='opacity-80 border-b hover:border-b hover:border-white border-[#768591] w-[43%] hover:text-white hover:opacity-100'><li><li className=''>
                           <NavLink to='/contact'>
                          Contact
                           </NavLink>
                           </li></li></div>
                           </ul>
                            </div>
                  
                          {/* </div> */}
                  
                          <div className="flex flex-col w-1/3 relative  gap-6 ">
                            <p className="text-xl">CONTACTS</p>
                            <div className=" space-y-4">
                            <div className="opacity-90 flex flex-row gap-2">
                            {/* icons */}
                            <MdMyLocation className='text-xl' />
                            <div className='opacity-90 border-b hover:border-b  border-[#768591] md:w-[80%] hover:text-white hover:opacity-100'>
                             <a href="https://www.google.com/maps/place/DTU+Main+Gate/@28.7127227,77.0200554,13z/data=!4m6!3m5!1s0x390d019747be0b05:0xe46514432984139f!8m2!3d28.7455816!4d77.1170874!16s%2Fg%2F11krrql2tv?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D" target="_blank" className='sm:w-full'>New Delhi, India
                   </a>
                   </div>
                             </div>
                             <div className="opacity-90 flex flex-row  gap-2">
                             {/* icons */}
                             <CiMail className='text-xl' />
                             <a href="mailto:sameer.yadav200304@gmail.com" className='opacity-90 border-b hover:border-b  border-[#768591] w-[77%] hover:text-white hover:opacity-100'>sameer.yadav200304@gmail.com</a>
                             </div>
                  
                             <div className=' mt-6 w-[210px] border-b-2 border-white border-opacity-30 hover:border-opacity-100 hover:cursor-pointer'>
                             <a  href='https://www.linkedin.com/in/sameer-yadav-bba7402a5/' target="_blank" className='text-[16px]'>Connect with me on LinkedIn</a>
                             </div>
                   
                             </div>
                  
                             </div>
                             </div>
                             <div>
                             <div className="w-[93%] mb-4 mt-10 bg-white opacity-30 h-[1px]">
                  
                  </div>
                  <div className='space-x-2'>
                  <span className="text-xs opacity-70">Made with love by </span>
                  <span>' Sameer Yadav '</span>
                  
                  </div>
                  
                  
                             </div>
                          
                          
                        </footer>
                        </div>

</div>
   
  )
}

export default AboutMe
