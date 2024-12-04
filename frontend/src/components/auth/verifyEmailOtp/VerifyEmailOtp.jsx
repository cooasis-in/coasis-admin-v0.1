import React, { useState, useContext } from "react";
import AuthLayout from "../AuthLayout";
import { GlobalContext } from "../../GlobalState ";
import { useNavigate } from "react-router-dom";

function VerifyEmailOtp() {
  const [otp, setOtp] = useState(new Array(6).fill("")); // Initialize OTP state with 6 empty strings
  const { email, emailOpt, setEmailOpt } = useContext(GlobalContext);
  const navigate = useNavigate();

  // Function to handle input change
  const handleChange = (element, index) => {
    const value = element.value;

    if (!/^\d*$/.test(value)) return; // Only allow numeric values

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus on the next input field if available
    if (value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Function to handle key down events
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        // Focus on the previous input field and clear its value
        const prevInput = event.target.previousSibling;
        if (prevInput) {
          prevInput.focus();
          prevInput.value = "";
          setOtp((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index - 1] = "";
            return newOtp;
          });
        }
      }
    }
  };

  // Function to handle OTP verification
  const handleVerify = () => {
    const enteredOtp = otp.join(""); // Join the OTP array into a single string
    // console.log(enteredOtp);
    // console.log(emailOpt);
    if (enteredOtp == emailOpt) {
      navigate("/reset-password");
      // Redirect to the next page or take appropriate action
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // change email handler
  const handleChangeEmail = () => {
    navigate("/");
  };
  // generate new otp
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
  };

  // opt handler
  const handleGenerateOtp = () => {
    const otp = generateOTP();
    console.log(otp);
    setEmailOpt(otp);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-around">
        <img src="images/businesslogo.svg" alt="Business Logo" />

        <p className="text-[25px] my-[1.5rem] text-[#FFF5D9]">Verify Email</p>
        <p className="text-[14px] text-[#5A5A5A] f-HelveticaNeueRoman">
          Enter 6-Digit verification code sent to {email}
        </p>
        <p
          onClick={handleChangeEmail}
          className="mt-[0.6rem] text-[#FFF5D9] f-HelveticaNeueRoman cursor-pointer"
        >
          Change email
        </p>

        <div className="flex flex-col items-center justify-center my-[3.5rem]">
          <div className="flex justify-center items-center space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-gray-400 bg-black text-center border-2 border-gray-600 rounded-full text-2xl focus:outline-none focus:border-gray-400 transition-colors duration-200"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()} // Select the text on focus
                onKeyDown={(e) => handleKeyDown(e, index)} // Handle key down events
              />
            ))}
          </div>
        </div>

        <div>
          <span className="f-HelveticaNeueRoman text-[14px] text-[#C8C8C8]">
            Didn't get the code?{" "}
          </span>
          <span
            onClick={handleGenerateOtp}
            className="f-HelveticaNeueRoman cursor-pointer ml-[3px] text-[14px] text-gray-600"
          >
            Click to resend
          </span>
        </div>

        <button
          className="bg-[#262626] mt-[2.5rem] f-HelveticaNeueRoman w-[300px] text-[14px] text-[#E1FF26] rounded-full py-[1rem] px-[2rem]"
          type="button" // Change to type="button" to prevent form submission
          onClick={handleVerify} // Call handleVerify on click
        >
          Verify account
        </button>
      </div>
    </AuthLayout>
  );
}

export default VerifyEmailOtp;
