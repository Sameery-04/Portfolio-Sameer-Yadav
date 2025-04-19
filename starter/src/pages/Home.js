
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
// import Navbar from "./components/Navbar"
// import profile from '../assest/photo.jpeg';
// import { IoMdSend } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import { CiMail } from "react-icons/ci";
// import leetcodeImage from '../assest/project1.png';
// import engiImage from '../assest/project2.png';
// import script from "./script"
import { NavLink } from "react-router-dom";
const profile= "https://res.cloudinary.com/dxyygkfd9/image/upload/v1744994631/WhatsApp_Image_2025-04-18_at_22.11.12_d6d1210a_xzeqo6.jpg"
const leetcodeImage="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744993975/Screenshot_2025-04-18_220036_zslzwn.png"
const engiImage="https://res.cloudinary.com/dxyygkfd9/image/upload/v1744985957/engiImage_vkn3rj.jpg"


const Home =()=>{
    return (
        <div className=' flex flex-col overflow-hidden '> 
        <div className='flex lg:flex-row w-full lg:h-screen items-center justify-between lg:ml-16 flex-col'>
            <div className='lg:w-1/2 lg:mt-0 mt-10 w-[90%]'>
                <div className=''>
                    <div className='text-5xl font-medium'>HELLO!</div>
                    <div className='text-5xl font-medium'>NICE TO MEET YOU</div> 
                    <p className='opacity-60 mt-4 lg:w-[580px] w-full md:mb-6'>Currently a third-year undergraduate at Delhi Technological University (DTU), I'm an aspiring Software Engineer passionate about building cool things.<br/>
Welcome to my portfolio showcasing my projects and skills!</p> 
                </div>

            </div>
            {/* <div className='w-1/2'>
                <img src={profile}  alt="Logo" className="w-full h-screen object-contain sm:w-1/2" />
                </div> */}
                <div className='w-1/2 ml-11'>
                <img src={profile}  alt="Logo" className="lg:w-full lg:h-screen h-[400px] w-[400px] object-cover lg:mt-0 mt-12" />
                </div>
        </div> 
         {/* about */}

         <div className='mb-10  mr-16 ml-16 mt-32 lg:mr-16 lg:ml-16'>
         <div className='text-4xl'>ABOUT ME</div>
         <div className="opacity-60 mt-7">I'm a third-year undergraduate student at Delhi Technological University (DTU), passionate about software development and problem-solving. In my first year, I actively explored various domains through participation in multiple college societies, which gave me a broad perspective and helped me identify my true interests. In my second year, I focused on strengthening my problem-solving abilities by consistently practicing data structures and algorithms. Now, in my third year, I'm applying that logical foundation to enhance my full-stack development skills and build real-world applications.  </div>
           <div className='opacity-60 mt-4'>I enjoy working across the tech stack—from crafting responsive frontends to building efficient backends. I've also gained valuable experience in team collaboration and leadership through various responsibilities, which helped me develop strong communication and time management skills. I'm driven by curiosity, growth, and a desire to create impactful tech solutions.</div>
          <div className='mt-12 w-[265px] border-b-2 border-black border-opacity-30 hover:border-opacity-100 hover:cursor-pointer'>
          <a  href='https://www.linkedin.com/in/sameer-yadav-bba7402a5/' target="_blank" className='text-xl'>Connect with me on LinkedIn</a>
          </div>
          
          {/* <div className='w-[250px] h-[2px] opacity-50 bg-black  hover:opacity-100'></div> */}
          <div></div>

         </div>
         
         {/* message */}
         <div className='w-full opacity-90  bg-[#007EE3] bg-opacity-90 relative mt-6'>
         <div  className=' absolute top-[13%] left-[21%]'>
        <img src="https://cdn.prod.website-files.com/5c15cd8c8f69207532f75856/5c15cd8c8f6920262ff7594c_quote-icon-white.svg" className='opacity-90'/>         
          </div>
         <div className='w-1/2 mt-10 mb-10  mx-auto text-[12px] text-white py-6 opacity-90  lg:w-1/2  lg:text-xl'>It’s often tempting to follow the crowd, especially when everyone around us seems to be moving in the same direction. But true growth comes from carving out our own path and making choices that align with our personal journey. The way we prioritize our time, the mistakes we make, and the lessons we learn along the way all contribute to who we become. While social pressures, generational norms, and timing can impact our decisions, the final choice is always ours. In the end, we’re the ones taking the last shot—and that sense of responsibility is what drives our personal development.</div>

         </div>



         {/* leetcode  */}
         <div className='flex flex-col w-full mt-24 px-16 gap-16 lg:flex-row '>
         {/* <div className='w-[60%] border'>
            <img  src={leetcodeImage} className='h-[80%]'/>
         </div> */}
         <img src={leetcodeImage} className='lg:w-3/5 rounded-md w-full h-[420px]'></img>

         <div className='lg:w-2/5 w-full'>
            <div className='text-3xl'>PROBLEM SOLVING</div>
            <div className='opacity-60 mt-5'>I am a dedicated and enthusiastic problem solver with a strong foundation in data structures and algorithms. I've solved over 600+ DSA problems across platforms like LeetCode, Codeforces, and CodeChef, consistently sharpening my analytical and logical thinking. With a current rating of 1810+ on LeetCode, I enjoy diving into challenging problems and optimizing solutions for performance.</div>
         <br/><div className='opacity-60'>These experiences have helped me build a disciplined and structured approach to problem-solving. I'm now looking to apply these skills in real-world software development and contribute meaningfully to impactful engineering projects.</div>
         </div>

         </div>
     

         <div className='flex lg:flex-row w-full mt-44 px-16 gap-16 flex-col-reverse'>
         {/* <div className='w-[60%] border'>
            <img  src={leetcodeImage} className='h-[80%]'/>
         </div> */}

         <div className='lg:w-2/5 w-full'>
            <div className='text-3xl'>TEAM LEADING</div>
            <div className='opacity-60 lg:mt-5 mt-6'>I have strong leadership and team management skills, demonstrated through my role as the Co-Head of Team Engifest under the Cultural Council at Delhi Technological University (DTU). I led a team of 6+ students in organizing Engifest, North India’s biggest cultural festival, which attracts thousands of participants.</div>
         <br/><div className='opacity-60 mt-4'>My responsibilities involved planning, coordination, and ensuring timely execution of tasks across various domains. This experience greatly enhanced my ability to lead under pressure, manage time effectively, and collaborate with diverse teams to deliver large-scale events successfully.</div>
         </div>
         <img src={engiImage} className='lg:w-3/5 rounded-md h-[420px] w-full'></img>


         </div>
     {/* engifest */}
{/*       
        <div className='flex flex-row gap-16 mt-20 mb-20  mr-16 ml-16 '>
         

         <div className='w-[30%]'>
            <div className='text-3xl'>TEAM LEADING</div>
            <div className='opacity-60 mt-10'>Statsig is a faithful replica of the growth infrastructure used inside Facebook that allowed it to grow quickly (i.e Gatekeeper, Deltoid, Quick Experiments, Unidash, Scuba). Our mission is to become all-in-one data platform for all product builders and we have three key pillars of our product that supports it: Feature Flagging, Experimentation and Analytics.</div>
         <div className='opacity-60 mt-4'>Statsig is a faithful replica of the growth infrastructure used inside Facebook that allowed it to grow quickly (i.e Gatekeeper, Deltoid, Quick Experiments, Unidash, Scuba). Our mission is to become all-in-one data platform for all product builders and we have three key pillars of our product that supports it: Feature Flagging, Experimentation and Analytics.</div>
         </div>

         <div className='w-[60%]'>
            <img   src={engiImage} className='h-[60%]'/>
         </div>


       </div> */}


       <div className=" w-full  opacity-80 mt-16 overflow-hidden">
                        <footer className=" flex text-white  flex-col flex-wrap relative gap-6 text-sm top-[20px]  bg-[#768591]  lg:pl-24 pl-16 pt-16 pb-9 pr-10 w-full">
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

export default Home;