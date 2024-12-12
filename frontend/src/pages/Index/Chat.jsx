import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import elmerPic from "../../assets/images/Elmer-pic.png";
import florencioPic from "../../assets/images/Florencio-pic.png";
import lavernPic from "../../assets/images/Lavern-pic.png";
import titusPic from "../../assets/images/Titus-pic.png";
import geoffreyPic from "../../assets/images/Geoffrey-pic.png";
import alphonzoPic from "../../assets/images/Alphonzo-pic.png";
import UserMessageCard from "../../components/cards/UserMessageCard";
import { GoDotFill } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { LuImage } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineCameraAlt } from "react-icons/md";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const USER_MESSAGE_CARD_DATA = [
  {
    name: "Elmer Laverty",
    image: elmerPic,
    status: "online",
    lastMessage: "HaHa oh man 🔥",
    lastMessageTime: "12m",
    messages: [
      {
        sender: "Elmer Laverty",
        texts: [
          "Hey, how's it going?",
          "Just wanted to check in and see if you've looked at the design.",
          "Let me know if you have any feedback.",
        ],
      },
      {
        sender: "You",
        texts: [
          "Pretty good! Just working on some code.",
          "I had a quick look at the design, and it looks amazing!",
          "I'll give you more detailed feedback by tomorrow.",
        ],
      },
      {
        sender: "Elmer Laverty",
        texts: [
          "Awesome, glad you like it!",
          "Looking forward to your feedback.",
          "HaHa oh man 🔥",
          "Look at this artwork!",
          "It took me a while to complete, but I'm happy with it.",
          "What do you think?",
        ],
      },
      {
        sender: "You",
        texts: [
          "Wow, did you make that?",
          "That's really cool! You have an amazing talent.",
          "Do you plan to create more pieces like this?",
        ],
      },
      {
        sender: "Florencio Dorrance",
        texts: [
          "Thanks! I appreciate it.",
          "Yeah, I’m planning to make it a series.",
          "I’ll keep you posted on the next one!",
        ],
      },
    ],
  },
  {
    name: "Florencio Dorrance",
    image: florencioPic,
    lastMessage: "wohhooo",
    lastMessageTime: "24m",
    status: "last seen 2h ago",
    messages: [
      {
        sender: "Florencio Dorrance",
        texts: [
          "Look at this artwork!",
          "It took me a while to complete, but I'm happy with it.",
          "What do you think?",
        ],
      },
      {
        sender: "You",
        texts: [
          "Wow, did you make that?",
          "That's really cool! You have an amazing talent.",
          "Do you plan to create more pieces like this?",
        ],
      },
      {
        sender: "Florencio Dorrance",
        texts: [
          "Thanks! I appreciate it.",
          "Yeah, I’m planning to make it a series.",
          "I’ll keep you posted on the next one!",
        ],
      },
    ],
  },
  {
    name: "Lavern Laboy",
    image: lavernPic,
    status: "online",
    lastMessage: "HaHa that's terrifying😂",
    lastMessageTime: "1h",
    messages: [
      {
        sender: "Lavern Laboy",
        texts: [
          "Guess what happened today?",
          "I ran into an old friend from high school!",
          "We ended up grabbing lunch together.",
        ],
      },
      {
        sender: "You",
        texts: [
          "What a coincidence!",
          "Did you have a good time catching up?",
          "I bet you had a lot to talk about.",
        ],
      },
      {
        sender: "Lavern Laboy",
        texts: [
          "Yeah, it was great!",
          "We laughed about all the silly stuff we did back then.",
          "HaHa that's terrifying 😂",
        ],
      },
    ],
  },
  {
    name: "Titus Kitamura",
    image: titusPic,
    status: "Last seen 1h ago",
    lastMessage: "omg, this is amazing",
    lastMessageTime: "5h",
    messages: [
      {
        sender: "Titus Kitamura",
        texts: [
          "Look at this new project I started!",
          "I'm trying a different style this time.",
          "Let me know what you think.",
        ],
      },
      {
        sender: "You",
        texts: [
          "Wow, did you make that?",
          "It looks really different, but I love it!",
          "How long did it take you to get this far?",
        ],
      },
      {
        sender: "Titus Kitamura",
        texts: [
          "Just started yesterday.",
          "Thanks for the encouragement!",
          "I’m glad you like the new style.",
        ],
      },
    ],
  },
  {
    name: "Geoffrey Mott",
    image: geoffreyPic,
    status: "Last seen 2d ago",
    lastMessage: "aww 😍",
    lastMessageTime: "2d",
    messages: [
      {
        sender: "Geoffrey Mott",
        texts: [
          "Just adopted a puppy!",
          "He's so playful and keeps following me around.",
          "I already love him so much.",
        ],
      },
      {
        sender: "You",
        texts: [
          "Aww, that’s adorable!",
          "What breed is he?",
          "Can't wait to see some photos!",
        ],
      },
      {
        sender: "Geoffrey Mott",
        texts: [
          "He's a golden retriever.",
          "I'll send you some pics soon!",
          "aww 😍",
        ],
      },
    ],
  },
  {
    name: "Alphonzo Schuessler",
    image: alphonzoPic,
    status: "online",
    lastMessage: "perfect!",
    lastMessageTime: "1m",
    messages: [
      {
        sender: "Alphonzo Schuessler",
        texts: [
          "Is this design okay?",
          "I tried something new with the color scheme.",
          "Let me know if you think it works.",
        ],
      },
      {
        sender: "You",
        texts: [
          "Yes, it looks great!",
          "The colors are very cohesive and pleasing to the eye.",
          "You did a fantastic job.",
        ],
      },
      {
        sender: "Alphonzo Schuessler",
        texts: [
          "Perfect!",
          "I'll go ahead and finalize it.",
          "Thanks for the feedback!",
        ],
      },
    ],
  },
];

function Chat() {
  const [selectedChat, setSelectedChat] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [selectedChat, USER_MESSAGE_CARD_DATA[selectedChat]?.messages]);

  return (
    <DashboardLayout>
      <div className="text-[#fcfcd8] bg-[#0b0b0b] w-full h-full rounded-tl-[38px] flex">
        {/**------------ SELECT CHAT SECTION ----------------------- */}
        <section className="p-4 pt-5 bg-[#050505] basis-[30%] flex flex-col">
          {/**----- header ----- */}
          <header className="flex items-center h-fit">
            <div className="relative inline-block ">
              <select
                onChange={(e) => console.log(e.target.value)}
                className="bg-[#050505] pl-2 pr-10 rounded-full appearance-none w-full text-xl cursor-pointer focus:border-none"
              >
                <option value="Messages">Messages</option>
                <option value="Archive">Archive</option>
              </select>
              <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none ">
                <RiArrowDownSLine size={20} />
              </span>
            </div>
            <p className="bg-[#FCFCD817] text-[#fcfcd8] text-xs px-2 py-0.5 rounded-full">
              12
            </p>
          </header>
          {/**------ search ------ */}
          <div className="w-full h-fit py-3 mt-4 mb-1">
            <input
              onChange={(e) => console.log("Searched Term", e.target.value)}
              type="text"
              className="bg-[#0e0e0e] w-full text-sm placeholder-[#373737] rounded-xl py-2.5 px-4"
              placeholder="Search messages"
            />
          </div>
          {/**------ user message cards ------- */}
          <div className="flex-1 overflow-y-auto custom-scrollbar scrollbar-sm pr-2">
            {USER_MESSAGE_CARD_DATA.map((ele, ind) => (
              <UserMessageCard
                name={ele.name}
                image={ele.image}
                lastMessage={ele.lastMessage}
                lastMessageTime={ele.lastMessageTime}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
                ind={ind}
              />
            ))}
          </div>
        </section>

        {/**------------ VERTICAL DIVIDER ------------------- */}
        <div className="border-l-2 border-[#FCFCD817] h-full opacity-40"></div>

        {/** ------------- CHAT SECTION ---------------- */}
        <section className="p-4 pt-5 h-full bg-[#050505] flex-1 flex flex-col">
          {selectedChat !== null ? (
            <>
              {/**--------- Chat Header ---------- */}
              <header className="flex justify-between items-center h-fit ">
                <div className="flex items-center gap-x-3">
                  <div className="h-10 w-10 rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={USER_MESSAGE_CARD_DATA[selectedChat].image}
                      alt={USER_MESSAGE_CARD_DATA[selectedChat].name}
                    />
                  </div>
                  <div>
                    <h6 className="text-xl">
                      {USER_MESSAGE_CARD_DATA[selectedChat].name}
                    </h6>
                    <p
                      className={`text-xs ${
                        USER_MESSAGE_CARD_DATA[selectedChat].status !==
                          "Online" && "opacity-55"
                      } flex items-center gap-x-1`}
                    >
                      {USER_MESSAGE_CARD_DATA[selectedChat].status ===
                        "online" && (
                        <GoDotFill
                          size={12}
                          className="text-[#68d391] -mb-0.5"
                        />
                      )}
                      {USER_MESSAGE_CARD_DATA[selectedChat].status}
                    </p>
                  </div>
                </div>

                <button className="flex items-center gap-x-2 text-base px-4 py-2 bg-[#121212] text-[#fcfcd8] rounded-lg">
                  <BsFillTelephoneFill size={16} />
                  Call
                </button>
              </header>

              {/* Messages Section */}
              <div
                ref={messagesEndRef}
                className=" flex-1  my-3 flex flex-col flex-grow  overflow-y-auto custom-scrollbar scrollbar-sm px-2"
              >
                <div className="flex flex-col flex-grow gap-y-3 justify-end">
                  {USER_MESSAGE_CARD_DATA[selectedChat].messages.map(
                    (ele, ind) => (
                      <div
                        className={`flex gap-x-2 w-full ${
                          ele.sender === "You" && "flex-row-reverse"
                        }`}
                      >
                        <div className="h-10 w-10 rounded-xl overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={USER_MESSAGE_CARD_DATA[selectedChat].image}
                            alt={USER_MESSAGE_CARD_DATA[selectedChat].name}
                          />
                        </div>
                        <div
                          className={`flex flex-col gap-y-1 w-[50%] ${
                            ele.sender === "You" && "items-end"
                          }`}
                        >
                          {ele.texts.map((msg) => (
                            <p
                              className={`text-sm px-2 py-1.5 w-fit rounded-xl text-[#fcfcd8] ${
                                ele.sender === "You"
                                  ? "bg-[#121212]"
                                  : "bg-[#FCFCD817]"
                              } `}
                            >
                              {msg}
                            </p>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              {/* Input Section */}
              <footer className="w-full relative flex items-center">
                <input
                  onChange={(e) => console.log("Message", e.target.value)}
                  type="text"
                  className="bg-[#0e0e0e] w-full text-lg placeholder-[#373737] border border-[#242422] rounded-xl py-3 pl-14 pr-32"
                  placeholder="Message"
                />
                <MdOutlineCameraAlt
                  size={20}
                  className="absolute left-5 cursor-pointer"
                />
                <div className="absolute right-4 flex items-center gap-x-4">
                  <IoMicOutline size={20} className="cursor-pointer" />
                  <LuImage size={20} className="cursor-pointer" />
                  <FiPlusCircle size={20} className="cursor-pointer" />
                </div>
              </footer>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-full">
              Select a chat to start messaging
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Chat;
