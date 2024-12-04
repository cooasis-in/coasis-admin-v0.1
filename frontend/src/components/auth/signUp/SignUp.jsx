import React, { useContext, useState } from "react";
import AuthLayout from "../AuthLayout";
import ReactCountryFlag from "react-country-flag";
import { getCode } from "country-list";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../GlobalState ";

function SignUp() {
  const {
    email,
    setEmail,
    setEmailOpt,
    comName,
    setComName,
    comFlag,
    setComFlag,
  } = useContext(GlobalContext);

  const [companyName, setCompanyName] = useState(comName);
  const [companyEmail, setCompanyEmail] = useState(email);
  const [country, setCountry] = useState(comFlag);
  const [countryCode, setCountryCode] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Generate 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
  };

  // Handler
  const handleInputChange = (event) => {
    const countryName = event.target.value;
    setCountry(countryName);

    // Get country code from country name
    const code = getCode(countryName);
    setCountryCode(code);
  };

  const validateEmail = (email) => {
    // Dynamically create the regex based on companyName
    const companyDomain = companyName.replace(/\s+/g, "").toLowerCase(); // Remove spaces and convert to lowercase
    const emailRegex = new RegExp(
      `^[\\w-\\.]+@${companyDomain}\\.(com|in)$`,
      "i"
    );
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!companyName.trim())
      newErrors.companyName = "Company name is required.";
    if (!companyEmail.trim()) {
      newErrors.companyEmail = "Company email is required.";
    } else if (!validateEmail(companyEmail)) {
      newErrors.companyEmail = `Email must be in the format: name@${companyName
        .replace(/\s+/g, "")
        .toLowerCase()}.com or name@${companyName
        .replace(/\s+/g, "")
        .toLowerCase()}.in`;
    }

    if (!country.trim()) newErrors.country = "Country is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const otp = generateOTP();
      console.log("Company Name:", companyName);
      console.log("Company Email:", companyEmail);
      console.log("Country:", country);
      console.log("Generated OTP:", otp); // Log the OTP or use it as needed

      setComName(companyName);
      setComFlag(country);
      setEmail(companyEmail);
      setEmailOpt(otp); // Assuming you want to store it in EmailContext
      navigate("/verify-email");
    }
  };

  return (
    <AuthLayout>
      <div className="h-full flex flex-col items-center text-center mt-[3rem]">
        <img
          className="mt-[1.5rem]"
          src="images/businesslogo.svg"
          alt="Business Logo"
        />
        <p className="text-[25px] text-[#FFF5D9] my-[1.5rem]">
          Signup as business
        </p>

        <form className="flex flex-col gap-[0.7rem]" onSubmit={handleSubmit}>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] px-[2rem]"
            placeholder="Company name"
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName}</p>
          )}

          <input
            type="email"
            id="company_email"
            name="company_email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            className="bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] px-[2rem]"
            placeholder="Company email"
          />
          {errors.companyEmail && (
            <p className="text-red-500 text-sm">{errors.companyEmail}</p>
          )}

          <div className="relative">
            <input
              type="text"
              value={country}
              onChange={handleInputChange}
              placeholder="Country name"
              className="bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] border-gray-700 rounded-full py-[0.8rem] px-[2rem]"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
            {countryCode && (
              <ReactCountryFlag
                countryCode={countryCode}
                svg
                className="absolute top-[1.2rem] right-[1.5rem]"
              />
            )}
          </div>

          <button
            className="bg-[#262626] mt-[2rem] w-[300px] text-[14px] text-[#FCFCD8] rounded-full py-[0.8rem] px-[2rem]"
            type="submit"
          >
            Create an account
          </button>
        </form>

        <p className="text-[#FCFCD8] my-[1.5rem]">
          <span className="text-[14px]">Already have an account? </span>
          <span className="text-[#E1FF26] text-[14px] underline cursor-pointer">
            Sign In
          </span>
        </p>

        <p className="text-[14px] p-[0.5rem] text-[#FFF5D9]">
          <span>By creating an account you agree with our </span>
          <span className="underline cursor-pointer">Terms of Service, </span>
          <span className="underline cursor-pointer">Privacy Policy, </span>
          <span>and our default </span>
          <span className="underline cursor-pointer">
            Notification Settings.
          </span>
        </p>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
