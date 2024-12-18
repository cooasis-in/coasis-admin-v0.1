import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Loader from "../loader/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";
// image
import circleLogo from "../../assets/images/circleLogo.svg";
import OnbordingLayout from "../../components/layouts/OnbordingLayout";

function SignIn() {
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);
  const [emailError, setEmailError] = useState(false); // Email validation state
  const [passwordError, setPasswordError] = useState(false); // Password validation state
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false); // Reset error state on change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false); // Reset error state on change
  };

  const validateInputs = () => {
    let isValid = true;

    // Check if email is valid
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      isValid = false;
    }

    // Check if password is not empty
    if (!password) {
      setPasswordError(true);
      isValid = false;
    }

    return isValid;
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return; // Stop execution if inputs are invalid
    }

    setButtonLoader(true);
    setIsLoading(true);
    try {
      const response = await axios.post("https://business.coasis.in/login", {
        email,
        password,
      });

      // Handle the successful login
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error
      const errorMessage =
        error.response?.data?.message ||
        "Invalid email or password. Please try again.";
      setError(errorMessage);
      setIsLoading(false);
      setButtonLoader(false);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        navigate("/verify-mobile");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate]);

  return (
    <>
      {!isLoading ? (
        <OnbordingLayout>
          <div className="h-full flex flex-col items-center text-center mt-[3rem]">
            <img
              className="mt-[2.5rem] w-[3rem] h-[3rem]"
              src={circleLogo}
              alt="Business Logo"
            />
            <div className="my-1.5rem">
              <p className="text-[25px] text-[#FFF5D9] py-2">Login</p>
              <p className="text-[14px] text-[#5A5A5A] f-HelveticaNeueRoman pb-5">
                Please fill details to login to your account
              </p>
            </div>

            <form
              className="flex flex-col gap-[0.7rem]"
              onSubmit={handleSignin}
            >
              <input
                type="text"
                id="company_name"
                name="company_name"
                value={email}
                onChange={handleEmailChange}
                className={`bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] ${
                  emailError ? "border-red-500" : "border-gray-700"
                } rounded-2xl py-[0.8rem] px-[2rem]`}
                placeholder="Your Cohyve email"
              />

              <div className="relative flex items-center justify-center">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  className={`bg-[#000000D4] w-[300px] text-[15px] placeholder-gray-400 text-gray-400 border-[1px] ${
                    passwordError ? "border-red-500" : "border-gray-700"
                  } rounded-2xl py-[0.8rem] px-[2rem]`}
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

              {buttonLoader ? (
                <button className="bg-[#262626] flex justify-center items-center mt-[2rem] w-[300px] text-[14px] text-[#FCFCD8] rounded-2xl py-[0.8rem] px-[2rem]">
                  <ButtonLoader />
                </button>
              ) : (
                <>
                  <div
                    className="w-[1px] h-[60%] absolute right-0 top-1/2 -translate-y-1/2 transition-all"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(252, 252, 216, 0) 0%, #fcfcd8 50%, rgba(252, 252, 216, 0) 100%)",
                    }}
                  ></div>
                  <button
                    className="bg-[#262626] mt-[2rem] w-[300px] text-[14px] text-[#FCFCD8] rounded-2xl py-[0.8rem] px-[2rem]"
                    type="submit"
                  >
                    Login
                  </button>
                </>
              )}
            </form>
            {error && (
              <div className="text-red-500 mt-[0.5rem] w-[300px]">{error}</div>
            )}
            <p className="text-[#FCFCD8] my-[1.5rem]">
              <span className="text-[14px]">Don't have an account? </span>
              <span
                onClick={handleSignUp}
                className="text-[#E1FF26] text-[14px] underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>

            <p className="text-[14px] p-[0.5rem] text-[#FFF5D9]">
              <span>By creating an account you agree with our </span>
              <span className="underline cursor-pointer">
                Terms of Service,{" "}
              </span>
              <span className="underline cursor-pointer">Privacy Policy, </span>
              <span>and our default </span>
              <span className="underline cursor-pointer">
                Notification Settings.
              </span>
            </p>
          </div>
        </OnbordingLayout>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default SignIn;
