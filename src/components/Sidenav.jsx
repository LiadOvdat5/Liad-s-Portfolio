import {useState} from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'; 
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import PropTypes from 'prop-types';

const Sidenav = () => {
  
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  const links = [
    { url: '#main', icon: <AiOutlineHome size={20} />, label: 'Home' },
    { url: '#work', icon: <GrProjects size={20} />, label: 'Work' },
    { url: '#projects', icon: <AiOutlineProject size={20} />, label: 'Projects' },
    { url: '#about', icon: <BsPerson size={20} />, label: 'About' },
    { url: '#contact', icon: <AiOutlineMail size={20} />, label: 'Contact' },
  ];

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      { nav ? (
            <div className='fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20'>
              {links.map((link, index) => (
                  <FullLink key={index} url={link.url} icon={link.icon} label={link.label} handleNav={handleNav} />
              ))}
            </div>

        ) : (
          ''
        ) }
          {
            <div className='md:block hidden fixed top-[25%] z-10'>
              <div className='flex flex-col'>
              {links.map((link, index) => (
                  <CircleLink key={index} url={link.url} icon={link.icon} />
              ))}
              </div>
            </div>

          }


    </div>
  );
};


const CircleLink = ({ url, icon }) => (
  <a
      href={url}
      className='rounded-full shadow-lg bg-gray-100 m-2 p-4 flex items-center cursor-pointer hover:scale-110 ease-in duration-300'
  >
      {icon}
      
  </a>
);

const FullLink = ({ url, icon, label, handleNav }) => (
  <a
      href={url}
      className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
      onClick={handleNav}
  >
      {icon}
      <span className='pl-4'>{label}</span>
      
  </a>
);

CircleLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

FullLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  handleNav: PropTypes.func.isRequired,
};


export default Sidenav;
