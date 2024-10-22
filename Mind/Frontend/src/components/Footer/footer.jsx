
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub,AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const sociallinks = [
  {
    path: "" ,
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-8'/>,
  },

  {
    path: "" ,
    icon: <AiFillGithub className='group-hover:text-white w-4 h-8'/>,
  },

  {
    path: "" ,
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-8'/>,
  },

  {
    path: "" ,
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-8 '/>,
  },

];

const quicklinks01 = [

  {
    path: "/home" ,
   display: "Home",
  },

  {
    path: "/" ,
   display: "About Us",
  },

  {
    path: "/services" ,
   display: "Services",
  },

  {
    path: "/" ,
   display: "Blog",
  },

];

const quicklinks02 = [

  {
    path: "/find-a-doctor" ,
   display: "Find a Doctor",
  },

  {
    path: "/" ,
   display: "Request an Appointment",
  },

  {
    path: "/services" ,
   display: "Find a Location",
  },

  {
    path: "/" ,
   display: "Get An Opinion",
  },

];

const quicklinks03 = [

  {
    path: "/" ,
   display: "Donate",
  },

  {
    path: "/contact" ,
   display: "Contact Us",
  },

];



const Footer = () => {
  const year= new Date().getFullYear()
  return(
  <footer className='pb-16 pt-10'>
  <div className="container">
    <div className='flex justify-between flex-col  md:flex-row flex-wrap gap-[30px]'>
<div>
  <img src={logo} alt="" />
  <p>Copyright © {year} developed by DevSena - All Rights Reserved </p>
  <div className="flex item-center gap-3   mt-4">
    {sociallinks.map((link,index)=> <Link to= {link.path} key={index} className='w-9 h-9  border border-solid border-[#181A1E] rounded-full flex item-center justify-center group hover:bg-primaryColor hover:border-none'>
      {link.icon}</Link>)}
  </div>
</div>

  <div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 mt-8 text-headingColor '>Quick Links  </h2>
  <ul>
    {quicklinks01.map((item,index)=>(<li key={index} className='mb-4'><Link to= {item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
      {item.display}</Link></li>))}
  </ul>
</div>
<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6 mt-8  text-headingColor'>I Want To : </h2>
  <ul>
    {quicklinks02.map((item,index)=>(<li key={index} className='mb-4'><Link to= {item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>))}
  </ul>
</div>
<div>
  <h2 className='text-[20px] leading-[30px] font-[700] mb-6  mt-8   text-headingColor'>Support </h2>
  <ul>
    {quicklinks03.map((item,index)=>(<li key={index} className='mb-4'><Link to= {item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>))}
  </ul>
</div>
</div>
    </div>

  
    </footer>
    );
}

export default Footer
