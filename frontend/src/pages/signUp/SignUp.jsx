import { useState } from "react";
import { useNavigate } from "react-router-dom";

// image
import circleLogo from "../../assets/images/circleLogo.svg";

// layout
import OnbordingLayout from "../../components/layouts/OnbordingLayout";

function SignUp() {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [linkSent, setLinkSent] = useState(false);

  const position = ["Super Admin", "Manager"];
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const validateEmail = (email) => {
    const companyDomain = companyName.replace(/\s+/g, "").toLowerCase();
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        setLinkSent(true);
        window.localStorage.setItem("emailForSignIn", companyEmail);
        console.log("Verification link sent to:", companyEmail);
      } catch (error) {
        console.error("Error sending OTP:", error);
        setErrors({ email: error.message });
      }
    }
  };

  return (
    <OnbordingLayout>
      <div className="h-full flex flex-col items-center text-center mt-[1rem]">
        <img
          className="mt-[2.5rem] w-[3rem] h-[3rem]"
          src={circleLogo}
          alt="Business Logo"
        />
        <p className="text-[25px] text-[#FFF5D9] my-[1.5rem]">
          Create Account
        </p>

        <form className="flex flex-col gap-[0.7rem]" onSubmit={handleSubmit}>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={`bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] rounded-2xl py-[0.8rem] px-[2rem] ${
              errors.companyName ? "border-red-500" : "border-gray-700"
            }`}
            placeholder="Company Name"
            disabled={linkSent}
          />

          <input
            type="email"
            id="company_email"
            name="company_email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            className={`bg-[#000000D4] w-[300px] text-[14px] placeholder-gray-400 text-gray-400 border-[1px] rounded-2xl py-[0.8rem] px-[2rem] ${
              errors.companyEmail ? "border-red-500" : "border-gray-700"
            }`}
            placeholder="Company Email*"
            disabled={linkSent}
          />

          <div className="relative">
            <select className="bg-[#262626] mt-[2rem] w-[300px] text-[14px] text-[#FCFCD8] rounded-2xl py-[0.8rem] px-[2rem]">
              {position.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            className={`bg-[#262626] mt-[2rem] w-[300px] text-[14px] text-[#FCFCD8] rounded-full py-[0.8rem] px-[2rem] ${
              linkSent && "opacity-50 cursor-not-allowed"
            }`}
            type="submit"
            disabled={linkSent}
          >
            Create an account
          </button>
        </form>

        {linkSent && (
          <p className="text-green-500 mt-4">
            Verification link has been sent to your email. Please verify it.
          </p>
        )}
        <p className="text-[#FCFCD8] my-[1rem]">
          <span className="text-[14px]">Already have an account? </span>
          <span
            onClick={handleSignIn}
            className="text-[#E1FF26] text-[14px] underline cursor-pointer"
          >
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
    </OnbordingLayout>
  );
}

export default SignUp;
