import React, { useState } from "react";
import AuthLayout from "../AuthLayout";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoCheckmark } from "react-icons/io5";
import { GlobalContext } from "../../GlobalState ";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const passwordRules = [
  "At least 6 characters needed",
  "At least 1 special character needed",
  "At least 1 number needed",
];

const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/;
const numberRegex = /\d/;

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState([]);
  const { email } = useContext(GlobalContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    const newErrors = [];

    if (password.length < 6) {
      newErrors.push("Password must be at least 6 characters.");
    }
    if (!specialCharactersRegex.test(password)) {
      newErrors.push("Password must contain at least 1 special character.");
    }
    if (!numberRegex.test(password)) {
      newErrors.push("Password must contain at least 1 number.");
    }

    setErrors(newErrors);
  };

  const handleSignup = () => {
    if (errors.length === 0) {
      console.log("Password:", password);
      // Continue with signup process
    } else {
      console.log("Password validation failed:", errors);
    }
  };

  // change email handler
  const handleChangeEmail = () => {
    navigate("/");
  };

  return (
    <AuthLayout>
      <div className="f-HelveticaNeueRoman">
        <div className="flex justify-center">
          <img src="images/businesslogo.svg" alt="Business Logo" />
        </div>

        <p className="text-[25px] mt-10 text-[#FFF5D9]">Choose a password</p>

        <div className="mt-[1rem]">
          <span className="text-[14px] text-[#5A5A5A] mr-[10px]">{email}</span>
          <span
            onClick={handleChangeEmail}
            className="text-[#FFF5D9] font-light cursor-pointer"
          >
            Change email
          </span>
        </div>

        {/* Password Field */}
        <div className="relative w-full max-w-sm mx-auto mt-[3rem]">
          <input
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder="Choose password"
            className="bg-[#000000D4] text-[15px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-4 px-8 block w-full p-2.5"
          />
          <div
            className="absolute inset-y-0 right-[13px] flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <AiOutlineEye className="h-6 w-6 text-[#FFF5D9]" />
            ) : (
              <AiOutlineEyeInvisible className="h-6 w-6 text-[#FFF5D9]" />
            )}
          </div>
        </div>

        {/* Display Errors */}
        {errors.length > 0 && (
          <div className="text-red-500 text-sm mt-2">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Password Rules */}
        <div className="text-[#FFF5D9] flex gap-[10px] flex-wrap mt-[1.5rem]">
          {passwordRules.map((rule, index) => (
            <div className="flex items-center" key={index}>
              <p className="p-[2px] bg-gray-700 rounded-full mr-[6px]">
                <IoCheckmark className="text-[#E1FF26] text-[14px]" />
              </p>
              <span className="text-[14px] f-HelveticaNeueLight">{rule}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="bg-[#262626] mt-[3rem] text-[15px] placeholder-gray-400 text-[#E1FF26] rounded-full py-4 px-8 block w-full p-2.5"
          type="button"
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </AuthLayout>
  );
}

export default ResetPassword;
