// import React, { useState } from "react";
// import "./navbar.css";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "../../assets/logo.png";
// const Menu = () => (
//   <>
//     <p>
//       <Link to="#home">Home</Link>
//     </p>
//     <p>
//       <Link to="#wgpt3">What is GPT?</Link>
//     </p>
//     <p>
//       <Link to="#possibility">Open AI</Link>
//     </p>
//     <p>
//       <Link to="#features">Case Studies</Link>
//     </p>
//     <p>
//       <Link to="#blog">Library</Link>
//     </p>
//   </>
// );

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

  
  
//   return (
//     <div className="gpt3__navbar">
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo">
//           <img src={logo} alt="logo" />
//         </div>
//         <div className="gpt3__navbar-links_container">
//           <Menu />
//         </div>
//       </div>
//       <div className="gpt3__navbar-sign">
//         <p>Sign In</p>
//         <button type="button">Sign Up</button>
//       </div>
//       <div className="gpt3__navbar-menu">
//         {toggleMenu ? (
//           <RiCloseLine
//             color="#fff"
//             size={27}
//             onClick={() => setToggleMenu(false)}
//           />
//         ) : (
//           <RiMenu3Line
//             color="#fff"
//             size={27}
//             onClick={() => setToggleMenu(true)}
//           />
//         )}
//         {toggleMenu && (
//           <div className="gpt3__navbar-menu_container scale-up-center">
//             <div className="gpt3__navbar-menu_container-links">
//               <Menu />
//               </div>
//               <div className="gpt3__navbar-menu_container-links-sign">
//                 <p>Sign In</p>
//                 <button type="button">Sign Up</button>
//               </div>
//             </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.scss';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <li><Link spy={true} activeClass='active' to="home">Home</Link></li>
          <li><Link spy={true} activeClass='active' to="wgpt3">What is GPT3?</Link></li>
          <li><Link spy={true} activeClass='active' to="features">Case Studies</Link></li>
          <li><Link  spy={true} activeClass='active' to="possibility">Open AI</Link></li>
          <li><Link spy={true} activeClass='active' to="blog">Library</Link></li>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><Link spy={true} activeClass='active' to="#home">Home</Link></p>
            <p><Link spy={true} activeClass='active' to="#wgpt3">What is GPT3?</Link></p>
            <p><Link spy={true} activeClass='active' to="/possibility">Open AI</Link></p>
            <p><Link spy={true} activeClass='active' to="#features">Case Studies</Link></p>
            <p><Link spy={true} activeClass='active' to="#blog">Library</Link></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
