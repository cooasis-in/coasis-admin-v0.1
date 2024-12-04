import React, { useState } from "react";
import bellLogo from "../../assets/images/bell.svg";
import { FiHome, FiActivity, FiSidebar } from "react-icons/fi";
import { PiChats } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsSidebarOpen, sidebarSelector } from "../../features/sidebarSlice";
import { Sidebar, sidebarClasses } from "react-pro-sidebar";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import navbarLogo from "../../assets/images/navbar-logo.svg";
import navbarLogoText from "../../assets/images/navbar-logo-text.svg";
import {
  IoSettingsOutline,
  IoCalendarClearOutline,
  IoChevronDown,
} from "react-icons/io5";
import cohyveLogoViolet from "../../assets/images/cohyve-logo-violet.svg";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { APP_URL } from "../../config";
// import { LuUsers } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

function DashboardLayout({ children }) {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const { isSidebarOpen } = useSelector(sidebarSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(isSidebarOpen, isSidebarLocked);

  const { pathname } = useLocation();

  const toggleNotificationBox = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const handleSidebarLock = () => {
    // if (isSidebarOpen) {
    //   dispatch(setIsSidebarOpen(false));
    // } else {
    //   dispatch(setIsSidebarOpen(true));
    // }
    setIsSidebarLocked((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (isSidebarLocked) return;
    dispatch(setIsSidebarOpen(true));
  };

  const handleMouseLeave = () => {
    if (isSidebarLocked) return;
    dispatch(setIsSidebarOpen(false));
  };

  const MENU_ITEMS = [
    {
      name: "home",
      url: APP_URL.HOME,
      icon: FiHome,
    },
    {
      name: "messages",
      url: APP_URL.MESSAGES,
      icon: PiChats,
    },
    {
      name: "community",
      url: APP_URL.COMMUNITY,
      icon: FiUsers,
    },
    {
      name: "analytics",
      url: APP_URL.ANALYTICS,
      icon: FiActivity,
    },
    {
      name: "designs",
      url: APP_URL.DESIGNS,
      icon: IoColorPaletteOutline,
    },
    {
      name: "credits",
      url: APP_URL.CREDITS,
      icon: BsWallet2,
    },
    {
      name: "meetings",
      url: APP_URL.MEETINGS,
      icon: IoCalendarClearOutline,
    },
  ];

  const handleGoToWallet = (e) => {
    e.preventDefault();
    navigate(APP_URL.WALLET);
  };

  const handleNavigateToProfile = (e) => {
    e.preventDefault();
    navigate(APP_URL.SETTINGS);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    navigate(APP_URL.SIGNIN);
  };

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-[#050505] text-[#FCFCD8] flex">
        {/**------SIDEBAR--------- */}
        <Sidebar
          collapsed={!isSidebarOpen}
          className="my-sidebar z-0 "
          // className={`${isSidebarOpen ? "w-[10%]" : "w-[5%]"} h-full `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: "#050505",
              overflow: "visible",
            },
          }}
          width="13%"
          collapsedWidth="5%"
          style={{ borderRight: "none" }}
        >
          {/**-------- SIDEBAR LOCK --------- */}
          {isSidebarOpen && (
            <div
              className="absolute -right-11 top-6 z-50"
              onClick={handleSidebarLock}
            >
              <div
                className={`w-11 h-11 relative rounded-full flex justify-center items-center  bg-[#151515] cursor-pointer `}
              >
                <FiSidebar
                  size={20}
                  className={`${
                    isSidebarLocked ? "opacity-100" : "opacity-55"
                  } transition-all duration-300 ease-linear`}
                />
                <FaAngleRight
                  size={8}
                  className={`absolute right-4 ${
                    !isSidebarOpen && "rotate-180"
                  } ${
                    isSidebarLocked ? "opacity-100" : "opacity-55"
                  } transition-all duration-300 ease-linear`}
                />
              </div>
            </div>
          )}
          {/**---------- SIDEBAR LOGO --------- */}
          <div
            className={`w-full h-[13%] flex justify-center items-center gap-x-2 `}
          >
            <img width={29.51} src={navbarLogo} alt="logo" />
            {isSidebarOpen && (
              <>
                <img width={72.48} src={navbarLogoText} alt="logo-text" />
                <p className="text-[10px] border-[#222221] border rounded-full p-2 py-1 bg-gradient-to-r from-[#a15fff]   to-[#ff8e8e]  bg-clip-text text-transparent">
                  Alpha
                </p>
              </>
            )}
          </div>
          <div
            className={`w-full h-[87%] flex flex-col ${
              isSidebarOpen ? "items-start" : "items-center"
            } justify-between `}
          >
            <div
              className={`flex flex-col ${
                isSidebarOpen ? "items-start px-4" : "items-center"
              } gap-y-[1rem] `}
            >
              {MENU_ITEMS.map((ele, index) => {
                return (
                  <Link key={index} to={ele?.url}>
                    {isSidebarOpen ? (
                      <div
                        className={`${
                          (pathname?.includes(ele?.name) ||
                            pathname === ele.url) &&
                          "bg-[#141414] "
                        } flex items-center  rounded-xl hover:bg-[#141414] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out w-40`}
                      >
                        <div
                          key={index}
                          className={`p-[0.8rem] ${
                            (pathname?.includes(ele?.name) ||
                              pathname === ele.url) &&
                            "glow-effect-container"
                          } `}
                        >
                          <ele.icon
                            size={20}
                            className={`transition-all duration-500 ease-in-out ${
                              pathname?.includes(ele?.name) ||
                              pathname === ele.url
                                ? "text-glow glow-effect-icon scale-110"
                                : "text-[#424e50]"
                            }`}
                          />
                        </div>
                        <p
                          className={`first-letter:uppercase ${
                            (!pathname?.includes(ele?.name) ||
                              !pathname === ele.url) &&
                            "opacity-55"
                          }`}
                        >
                          {ele.name}
                        </p>
                        {index === 4 && (
                          <p className="text-[10px] ml-2 border-[#222221] border rounded-full p-2 py-1 bg-gradient-to-r from-[#a15fff]   to-[#ff8e8e]  bg-clip-text text-transparent">
                            Alpha
                          </p>
                        )}
                      </div>
                    ) : (
                      <div
                        className={` ${
                          (pathname?.includes(ele?.name) ||
                            pathname === ele.url) &&
                          " rounded-xl bg-[#141414]"
                        }`}
                      >
                        <div
                          key={index}
                          className={`p-[0.8rem] ${
                            pathname?.includes(ele?.name) ||
                            pathname === ele.url
                              ? "glow-effect-container bg-[#141414]"
                              : ""
                          }   cursor-pointer transition-all duration-500 ease-in-out`}
                        >
                          <ele.icon
                            size={20}
                            className={`transition-all duration-500 ease-in-out ${
                              pathname?.includes(ele?.name) ||
                              pathname === ele.url
                                ? "text-glow glow-effect-icon scale-110"
                                : "text-[#424e50]"
                            }`}
                          />
                        </div>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            <div
              className={`flex items-center mb-[1.5rem] ${
                isSidebarOpen && "pl-4 gap-x-2"
              }`}
            >
              <div className="p-[0.8rem] border border-[#222221] bg-[#141414] rounded-xl cursor-pointer">
                <IoSettingsOutline size={20} className="text-[#424e50]" />
              </div>
              {isSidebarOpen && <p className="opacity-55">Setting</p>}
            </div>
          </div>
        </Sidebar>

        <div className={`flex-1 overflow-hidden h-full`}>
          {/*------- NAVBAR ------- */}

          <nav
            className={`w-full pr-[2rem] ${
              isSidebarOpen ? "pl-[3.5rem]" : " pl-2"
            } h-[13%] flex justify-between items-center z-20`}
            // className={`w-full pr-[2rem] pl-2 h-[13%] flex justify-between items-center`}
          >
            {/* <div className="flex items-center gap-x-4">
              <div
                className="w-11 h-11 relative rounded-full flex justify-center items-center opacity-55 bg-[#151515] cursor-pointer"
                onClick={handleSidebarLock}
              >
                <FiSidebar size={20} />
                <FaAngleRight size={8} className="absolute right-4" />
              </div> */}
            <div>
              <h1 className="f-HelveticaNeueRoman text-[17px] text-[#FCFCD8] leading-[1rem] tracking-tight">
                Dashboard
              </h1>
              <p className="f-HelveticaNeueLight text-[14px] opacity-55">
                Here's an overview of your Cooasis activity
              </p>
            </div>
            {/* </div> */}

            {/* right */}
            <div className="flex gap-x-4">
              <div
                className="flex cursor-pointer items-center gap-x-3  relative p-[1px] rounded-full"
                style={{
                  background:
                    "linear-gradient(98.06deg, rgba(255, 255, 255, 0.2) -11.85%, rgba(165, 165, 165, 0.062) 105.09%)",
                }}
                onClick={handleGoToWallet}
              >
                <div className="flex items-center gap-x-2 px-4 py-[11px] bg-[#050505] rounded-full w-full h-full">
                  <img width={22} src={cohyveLogoViolet} alt="logo" />
                  <span className="text-sm">Wallet</span>
                </div>
              </div>

              {/* bell */}
              <div
                className="relative w-[40px] h-[40px] p-2 rounded-full bg-[#2D303133]/80 cursor-pointer"
                onClick={toggleNotificationBox}
              >
                <img className="w-[25px] h-[25px]" src={bellLogo} alt="bell" />
                <div className="absolute top-0 right-[-2px] w-[16px] h-[15px] flex justify-center items-center rounded-full bg-[#43DCAE]">
                  <span className="text-[12px] font-semibold">2</span>
                </div>

                {/* Notification Box */}
                {isNotificationVisible && (
                  <div className="absolute top-[3rem] right-0 w-[200px] bg-[#FCFCD8] shadow-lg p-[1rem] rounded-lg">
                    <p className="text-[14px] text-[#000]">
                      You have 2 new notifications
                    </p>
                    <ul className="text-[12px] text-[#333]">
                      <li className="py-[0.3rem]">Notification 1</li>
                      <li className="py-[0.3rem]">Notification 2</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* user icon */}
              <div
                className="flex gap-x-3 relative items-center cursor-pointer"
                onClick={toggleMenu}
                // onBlur={() => setIsMenuOpen(false)}
              >
                <div className="bg-[#151515] rounded-full border-[1px] border-[#FFFFFF14] h-[43px] w-[43px] flex justify-center items-center">
                  <span>C</span>
                </div>
                <IoChevronDown
                  className={`text-[#e1ff26] ${
                    isMenuOpen && "rotate-180"
                  } transition-all duration-300 ease-linear`}
                />
                {isMenuOpen && (
                  <div className="absolute w-fit h-fit -bottom-[76px] z-10 right-0 rounded-xl transition-all duration-300 ease-in-out">
                    <button
                      onClick={handleNavigateToProfile}
                      className="flex gap-x-2 w-full items-center border-b border-[#151515] px-4 py-2 bg-[#171717] transition-all duration-300 ease-linear text-[15px]  opacity-55 hover:opacity-100"
                    >
                      <RiUserSettingsLine size={18} /> Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex gap-x-2 w-full border-t border-[#FCFCD8a8] items-center px-4 py-2 bg-[#171717] transition-all duration-300 ease-linear text-[15px]  text-red-400 hover:text-red-600"
                    >
                      <MdOutlineLogout size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="w-full h-[87%] bg-[#0d0e0e] text-[#fcfcd8] overflow-hidden rounded-tl-[33px] border border-[#171818]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
