// import React from "react";
// import styles from "./header.module.css";
// // import Login from '../../components/login/Login';

// import Logo from "../../img/logo.png";

// const Header = () => {
//   return (
//     <>
//       <header className="tonav">
//         <div className="header__container">
//           <div className="celebal__logo mr-auto">
//             <img src={Logo} alt="" />
//           </div>
//         </div>
//       </header>
//       {/* <Login></Login> */}
//     </>
//   );
// };

// export default Header;





import React from "react";
import Logo from "../../img/adityabirlalogo.png";

const Header = () => {
  return (
    <header className="w-full h-14 bg-[var(--bg-header)] px-6 flex items-center justify-between shadow-[var(--header-shadow)] sticky top-0 z-50">
      <div className="flex items-center gap-3">

        <img
          src={Logo}
          alt="Aditya Birla Logo"
          className="h-10 w-auto object-contain"
        />

        <h1 className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl text-[var(--text-color)] font-semibold tracking-tight">
          Prakriti: UltraTech's Unified OT Data Foundation
        </h1>

      </div>
    </header>
  );
};

export default Header;