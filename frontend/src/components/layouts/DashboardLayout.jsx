import { useState } from "react";
import bellLogo from "../../assets/images/bell.svg";
import { FiSidebar } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsSidebarOpen, sidebarSelector } from "../../features/sidebarSlice";
import { Sidebar, sidebarClasses } from "react-pro-sidebar";
import { FaAngleRight } from "react-icons/fa6";
import navbarLogo from "../../assets/images/navbar-logo.svg";
import bigBellIcon from "../../assets/images/bell-big.svg";
import { IoEnterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import profileImg from "../../assets/images/Elmer-pic.png";
import { MENU_ITEMS } from "../../config";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";

function DashboardLayout({ children }) {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const { isSidebarOpen } = useSelector(sidebarSelector);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const toggleNotificationBox = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const handleSidebarLock = () => {
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

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-[#050505] text-[#FCFCD8] flex">
        {/**------SIDEBAR--------- */}
        <Sidebar
          collapsed={!isSidebarOpen}
          className="my-sidebar z-0"
          onMouseEnter={handleMouseEnter}
          ss
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
            {isSidebarOpen ? (
              <>
                <div className="flex">
                  <img width={30} src={navbarLogo} alt="logo" />
                  <span className="font-thin text-sm ml-2 text-nowrap">
                    Cohyve <br /> Admin Panel
                  </span>
                </div>
              </>
            ) : (
              <img width={29.51} src={navbarLogo} alt="logo" />
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
                  <div key={index} onClick={() => handleMenuClick(index)}>
                    <Link to={ele?.url}>
                      {isSidebarOpen ? (
                        <div
                          className={`${
                            (pathname?.includes(ele?.name) ||
                              pathname === ele.url) &&
                            "bg-[#141414] "
                          } flex items-center rounded-xl hover:bg-[#141414] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out w-40`}
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
                          {ele.subMenu && ele.subMenu.length > 0 && (
                            <div
                              className={`transition-all duration-500 ease-in-out ml-5 ${
                                pathname?.includes(ele?.name) ||
                                pathname === ele.url
                                  ? "text-glow glow-effect-icon scale-110"
                                  : "text-[#424e50]"
                              }`}
                            >
                              {openSubMenu === index ? (
                                <MdKeyboardArrowUp />
                              ) : (
                                <MdKeyboardArrowDown />
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          className={`${
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
                            } cursor-pointer transition-all duration-500 ease-in-out`}
                          >
                            <ele.icon
                              size={20}
                              className={`transition-all duration-500 ease-in-out ${
                                pathname?.includes(ele?.name) ||
                                pathname === ele.url
                                  ? "text-[#FCFCD8] glow-effect-icon scale-110"
                                  : "text-[#424e50]"
                              }`}
                            />
                          </div>
                        </div>
                      )}
                    </Link>

                    {/* Show submenu when menu item has submenu */}
                    {ele.subMenu && ele.subMenu.length > 0 && (
                      <div
                        className={`ml-4 mt-2 flex flex-col ${
                          openSubMenu === index ? "block" : "hidden"
                        }`}
                      >
                        {ele.subMenu.map((sub, subIndex) => (
                          <Link key={subIndex} to={sub.url}>
                            <div
                              className={`${
                                pathname?.includes(sub.name) ||
                                pathname === sub.url
                                  ? "bg-[#141414] "
                                  : "opacity-55"
                              } flex items-center rounded-xl cursor-pointer p-[0.8rem] transition-all duration-500 ease-in-out w-40`}
                            >
                              <p className="ml-2">{sub.name}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              className={`flex items-center flex-col mb-[1.5rem] ${
                isSidebarOpen && "pl-4 gap-x-2 flex-col"
              }`}
            >
              <div className="flex text-center items-center justify-between">
                <div className="p-[0.8rem] rounded-xl cursor-pointer">
                  <BiHelpCircle size={20} className="text-[#424e50]" />
                </div>
                {isSidebarOpen && <p className="opacity-55">Help</p>}
              </div>
              <div className="flex items-center justify-between">
                <div className="p-[0.8rem] rounded-xl cursor-pointer ">
                  <GiSettingsKnobs size={20} className="text-[#424e50]" />
                </div>
                {isSidebarOpen && <p className="opacity-55">Setting</p>}
              </div>
            </div>
          </div>
        </Sidebar>

        <div className={`flex-1 overflow-hidden h-full`}>
          {/*------- NAVBAR ------- */}

          <nav
            className={`w-full pr-[2rem] ${
              isSidebarOpen ? "pl-[3.5rem]" : " pl-2"
            } h-[13%] flex justify-between items-center z-20`}
          >
            <div
              className="flex cursor-pointer items-center gap-x-3  relative p-[1px] rounded-2xl"
              style={{
                background:
                  "linear-gradient(98.06deg, rgba(255, 255, 255, 0.2) -11.85%, rgba(165, 165, 165, 0.062) 105.09%)",
              }}
            >
              <div className="flex items-center gap-x-2 px-4 py-[8px] bg-[#050505] rounded-2xl w-full h-full">
                <CiSearch />
                <input
                  type="text"
                  placeholder="Search tasks"
                  className="border-none bg-transparent ml-2"
                />
              </div>
            </div>

            {/* right */}
            <div className="flex gap-x-4">
              <div
                className="flex cursor-pointer items-center gap-x-3  relative p-[1px] rounded-2xl"
                style={{
                  background:
                    "linear-gradient(98.06deg, rgba(255, 255, 255, 0.2) -11.85%, rgba(165, 165, 165, 0.062) 105.09%)",
                }}
              >
                <div className="flex items-center gap-x-2 px-4 py-[8px] bg-[#050505] rounded-2xl w-full h-full">
                  <img width={28} src={profileImg} alt="logo" />
                  <span className="text-sm">Welcome Rupesh</span>
                  <span className="bg-[#1f1f1f] p-1 rounded-md">Manager</span>
                </div>
              </div>
              <div
                className="flex cursor-pointer items-center gap-x-3  relative p-[1px] rounded-2xl"
                style={{
                  background:
                    "linear-gradient(98.06deg, rgba(255, 255, 255, 0.2) -11.85%, rgba(165, 165, 165, 0.062) 105.09%)",
                }}
              >
                <div className="flex items-center gap-x-2 px-4 py-[8px] bg-[#050505] rounded-2xl w-full h-full">
                  <IoEnterOutline />
                  <span className="text-sm">Check in</span>
                </div>
              </div>

              {/* bell */}
              {/*  */}
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
                  <div
                    style={{
                      backdropFilter: "blur(30px)",
                      background: "#1F1F1FA8",
                    }}
                    className={`absolute flex flex-col overflow-hidden w-[427px] h-[500px] cursor-default rounded-[25px] px-[19px] py-6 top-16 z-10 -right-[1.5rem]
                                      transition-all duration-300 ease-linear transform ${
                                        isNotificationVisible
                                          ? "opacity-100 translate-y-0"
                                          : "opacity-0 -translate-y-4 pointer-events-none"
                                      }`}
                  >
                    <header className="h-fit w-full">
                      <h5 className="text-xl">Notifications</h5>
                      <div className="w-full flex justify-between items-center text-sm  rounded-[10px] bg-[#1F1F1F] h-[42px] px-3 my-3">
                        <div className="flex items-center gap-x-[23px]">
                          <div className="flex items-center gap-x-[7px]">
                            <span>All</span>
                            <p className="bg-[#262626] px-[7px] py-[2px] rounded-3xl">
                              {"0"}
                            </p>
                          </div>
                          <div className="flex items-center gap-x-[7px] ">
                            <span className="opacity-50">Unread</span>
                            <p className="bg-[#262626] opacity-50 px-[7px] py-[2px] rounded-3xl">
                              {"0"}
                            </p>
                          </div>
                        </div>
                        <p className="opacity-10 cursor-not-allowed">
                          Mark all as read
                        </p>
                      </div>
                    </header>
                    <div className="flex-1 flex justify-center items-center overflow-y-auto custom-scrollbar scrollbar-sm">
                      <div className="flex flex-col items-center">
                        {/* <LuBell size={48} /> */}
                        <img width={93} src={bigBellIcon} alt="bell-icon" />
                        <p className="text-xl opacity-50 text-center">
                          This is where your notification <br /> will appear
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* user icon */}
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
