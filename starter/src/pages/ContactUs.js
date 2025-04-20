// import React from 'react'
// import { IoMdSend } from "react-icons/io";
// import { MdMyLocation } from "react-icons/md";
// import { CiMail } from "react-icons/ci";
// import { NavLink } from 'react-router-dom';

// const images = "https://res.cloudinary.com/dxyygkfd9/image/upload/v1744997995/Contactus1_hdkqfd.jpg";

// const ContactUs = () => {
//   return (
//     <div className="flex flex-row w-full flex-wrap">
//       <div className="w-full">

//         {/* left side */}
//         <div className="mt-[80px] flex flex-col overflow-hidden px-4 md:px-10 lg:pl-14 lg:pr-28 md:w-1/2 w-full">
//           {/* contact heading */}
//           <div className="w-full">
//             <p className="text-[32px] md:text-[40px] lg:text-[50px] pl-4 md:pl-8">Contact Me</p>
//           </div>

//           <form className="space-y-6 mb-8 pl-4 md:pl-8">
//             <div className="mt-[30px] w-full flex flex-col md:flex-row gap-4 md:gap-8">
//               {/* name */}
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none pr-2 focus:border-b-red-500 w-full"
//                 required
//               />
//               {/* email */}
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none focus:border-b-red-500 w-full"
//                 required
//               />
//             </div>

//             <div className="w-full">
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="Enter your Subject"
//                 className="pt-[20px] pb-[7px] pl-[8px] w-full border-b-2 focus:outline-none focus:border-red-500 focus:transition-colors focus:duration-600 focus:ease-in-out"
//                 required
//               />
//             </div>

//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               cols="40"
//               placeholder="Type your message here..."
//               className="pt-[20px] pl-[8px] w-full border-b-2 focus:outline-none focus:border-b-red-500"
//               required
//             ></textarea>

//             <button className="opacity-80 bg-[#007EE3] text-white px-9 py-4 border-2 flex items-center hover:opacity-100">
//               <div className="flex flex-row gap-4">
//                 <div><IoMdSend className="relative top-1" /></div>
//                 <div className="text-[18px]"><p>Send Message</p></div>
//               </div>
//             </button>
//           </form>
//         </div>

//         {/* footer */}
//         <div className="w-full lg:w-full opacity-80 mt-40 overflow-hidden bg-[#768591] ">
//           <footer className="flex flex-col md:flex-row text-white flex-wrap relative gap-10 text-sm top-[20px] bg-[#768591] pl-6 md:pl-24 pt-16 pb-9 w-full">
//             <div className="flex flex-row flex-wrap sm:gap-[53px] gap-20 w-[400px]">
//               {/* left side footer */}
//               <div className="w-2/3 space-y-6">
//                 <p className="text-lg md:text-xl">ABOUT ME</p>
//                 <div className='sm:w-full'>
//                   <p className="opacity-80 lg:w-[170%]">
//                     I'm a full stack developer passionate about building scalable web applications. I enjoy solving problems, writing clean code, and continuously learning to grow my skills across frontend and backend technologies.
//                   </p>
//                   <p className="mt-4 text-3xl font-niconne">Sameer Yadav</p>
//                 </div>
//               </div>

//               {/* right side footer */}
//               <div className="space-y-6 relative">
//                 <p className="text-lg md:text-xl w-full">NAVIGATION</p>
//                 <ul className="space-y-4 cursor-pointer">
//                   <div className='opacity-80 border-b hover:border-white border-[#768591] w-[33%] hover:text-white hover:opacity-100'>
//                     <li><NavLink to='/'>Home</NavLink></li>
//                   </div>
//                   <div className='opacity-80 border-b hover:border-white border-[#768591] w-[35%] hover:text-white hover:opacity-100'>
//                     <li><NavLink to='/about'>About</NavLink></li>
//                   </div>
//                   <div className='opacity-80 border-b hover:border-white border-[#768591] w-[35%] hover:text-white hover:opacity-100'>
//                     <li><NavLink to='/skills'>Skills</NavLink></li>
//                   </div>
//                 </ul>
//               </div>

//               {/* contact section */}
//               <div className="flex flex-col w-1/3 gap-6 flex-wrap">
//                 <p className="text-lg md:text-xl">CONTACTS</p>
//                 <div className="space-y-4">
//                   <div className="opacity-90 flex flex-row gap-2">
//                     <MdMyLocation className='text-xl' />
//                     <div className='opacity-90 border-b hover:border-white border-[#768591] w-[49%] hover:text-white hover:opacity-100'>
//                       <a href="https://www.google.com/maps/place/New+Delhi" target="_blank">New Delhi, India</a>
//                     </div>
//                   </div>
//                   <div className="opacity-90 flex flex-row gap-2">
//                     <CiMail className='text-xl' />
//                     <a href="mailto:sameer.yadav200304@gmail.com" className='opacity-90 border-b hover:border-white border-[#768591] w-[89%] hover:text-white hover:opacity-100'>sameer.yadav200304@gmail.com</a>
//                   </div>

//                   <div className='mt-6 w-[214px] border-b-2 border-white border-opacity-30 hover:border-opacity-100 hover:cursor-pointer'>
//                     <a href='https://www.linkedin.com/in/sameer-yadav-bba7402a5/' target="_blank" className='text-[16px] '>Connect with me on LinkedIn</a>
//                   </div>
//                 </div>
//               </div>
//               <div>
//               <div className="w-[455px] mb-4 bg-white opacity-30 h-[2px]"></div>
//               <div className='space-x-2'>
//                 <span className="text-xs opacity-70">Made with love by </span>
//                 <span>' Sameer Yadav '</span>
//               </div>
//             </div>
//             </div>
            
//           </footer>
          
//         </div>
//       </div>

//       {/* right side image */}
//       <div className="hidden lg:block h-screen w-1/2 fixed top-0 bg-white z-0 -right-1">
//         <img src={images} className="h-full border-2" alt="Contact visual" />
//       </div>
//     </div>
//   )
// };

// export default ContactUs;
import React from 'react'
// import images from "../assest/contactImage.jpg"
import { NavLink } from 'react-router-dom';
import { IoMdSend } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCallback } from 'react';
const images= "https://res.cloudinary.com/dxyygkfd9/image/upload/v1744997995/Contactus1_hdkqfd.jpg";
const ContactUs = () => {
  const [message,setMessage]=useState({
    Name:"",
    Email:"",
    Subject:"",
    Message:""
  })

  const changeHandler = useCallback((e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  }, [message]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email);
  };
  

  const sendEmail = async (e) => {
    e.preventDefault();
    toast.loading("Sending message...");

    if (!validateEmail(message.Email)) {
      toast.dismiss(); 
      toast.error("Please enter a valid email address.");
      return;
    }
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/contact/getcontact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      // const data = await response.json();
      // alert(data.status);
      setMessage({
        Name: "",
        Email: "",
        Subject: "",
        Message: ""
      });
      toast.dismiss(); 
      toast.success("Message sent successfully!")
      
    } catch (err) {
      toast.dismiss(); 
      toast.error("Something went wrong. Please try again.");
      console.error('Error sending email:', err);
    }
  };
  return (
  

    <div className="flex flex-row w-full mt-32">
    <div className="">

      {/* left side */}
      <div  className="mt-[10px] flex flex-col overflow-hidden pl-20 pr-20">
      {/* contact  */}
      <div className="w-full">
      <p className="text-[50px] pl-8">Contact Me</p>
      </div>

      <form onSubmit={sendEmail} className="space-y-6 mb-8 pl-8">
      <div className="mt-[30px] w-full flex flex-col md:flex-row gap-4 md:gap-8">
               {/* name */}
                <input
                type="text"
                id="name"
                name="Name"
                value={message.Name}
                onChange={changeHandler}
                placeholder="Enter your Name"
                className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none pr-2 focus:border-b-red-500 w-full"
                required
              />
              {/* email */}
              <input
                 type="email"
                id="email"
                name="Email"
                value={message.Email}
                onChange={changeHandler}
                placeholder="Enter your Email"
                className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none focus:border-b-red-500 w-full"
                required
              />
            </div>

      
      <div className="w-full">
      {/* <label for="name">Subject:</label> */}
        <input type="text"
        id="subject"
        name="Subject"
        value={message.Subject}
        onChange={changeHandler}
        placeholder="Enter your Subject"
        className="pt-[20px] pb-[7px] pl-[8px] w-full border-b-2 focus:outline-none  focus:border-red-500 focus:transition-colors focus:duration-600 focus:ease-in-out" required/>
      </div>

      {/* <label for="message">Message:</label><br/> */}
      <textarea id="message"
        name="Message" 
        value={message.Message}
        onChange={changeHandler}
        rows="5" 
        cols="40" 
        placeholder="Enter your Message here..."
        className="pt-[20px] pl-[8px] w-full border-b-2 focus:outline-none focus:border-b-red-500 " required></textarea>

      {/* <div className="w-full border-2"> */}
      <button type='submit' className= " opacity-80  bg-[#007EE3] text-white  px-9 py-4 border-2 flex items-center hover:opacity-100 ">
      <div className="  flex flex-row gap-4 ">
        {/* icons */}
        <div className="">
        <IoMdSend className="relative top-1"/>
        </div>
        
        <div className=" text-[18px]"><p>Send Message</p></div>
        
      </div>
      
      </button>
      {/* </div> */}
      </form>
 </div>
      {/* bg-[#40424b] text-slate-100 */}
      
         {/* footer */}
         <div className="lg:w-[104%] w-screen  opacity-80 mt-16 overflow-hidden ">
               <footer className=" flex text-white  flex-col flex-wrap relative gap-10 text-sm top-[20px]  bg-[#768591] lg:pl-24 pl-16 pt-16 pb-9  w-full">
                 <div className=" flex flex-row flex-wrap gap-20 lg:w-[400px] w-[80%]">
         
                    {/* left side footer */}
                   <div className="lg:w-2/3 w-[60%]  space-y-6">
                     <p className="text-xl">ABOUT ME</p>
         
                     <div>
                     <p className=" opacity-80 lg:w-[170%] w-[100%]  ">
                     I'm a full stack developer passionate about building scalable web applications. I enjoy solving problems, writing clean code, and continuously learning to grow my skills across frontend and backend technologies.                             
                     </p>
         
                     <p className=" mt-4 text-3xl font-niconne">Sameer Yadav</p>
                     </div>
                   </div>
         
                   {/* right side footer */}
                   <div  className=" space-y-6">
                            <p className="text-xl lg:w-full">
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
         
                 <div className="flex flex-col w-1/2 relative  gap-6 ">
                   <p className="text-xl">CONTACTS</p>
                   <div className=" space-y-4">
                   <div className="opacity-90 flex flex-row gap-2">
                   {/* icons */}
                   <MdMyLocation className='text-white text-xl' />
                   <div className='opacity-90 border-b hover:border-b  border-[#768591] w-[53%] hover:text-white hover:opacity-100'>
                    <a href="https://www.google.com/maps/place/New+Delhi" target="_blank" className=''>New Delhi, India
          </a>
          </div>
                    </div>
                    <div className="opacity-90 flex flex-row gap-2">
                    {/* icons */}
                    <CiMail className='text-white text-xl' />
                    <a href="mailto:sameer.yadav200304@gmail.com" className='opacity-90 border-b hover:border-b  border-[#768591] w-[87%] hover:text-white hover:opacity-100'>sameer.yadav200304@gmail.com</a>
                    </div>
         
                    <div className=' mt-6 w-[210px] border-b-2 border-white border-opacity-30 hover:border-opacity-100 hover:cursor-pointer'>
                    <a  href='https://www.linkedin.com/in/abhishek-kumar-234b802a4' target="_blank" className='text-[16px]'>Connect with me on LinkedIn</a>
                    </div>
          
                    </div>
         
                    </div>
                    </div>
                    <div>
                    <div className="w-[83%] mb-4 mt-10 bg-white opacity-30 h-[1px]">
         
         </div>
         <div className='space-x-2'>
         <span className="text-xs opacity-70">Made with love by </span>
         <span>' Sameer Yadav '</span>
         
         </div>
         
         
                    </div>
                 
                 
               </footer>
               </div>

               

               



      </div>


      {/* right side */}
      <div className=" hidden lg:block h-screen w-1/2 fixed -right-10 top-0 bg-white z-0">
      <img src={images} className="h-full "></img>
    </div>
  </div>
  )
};

export default ContactUs;
