import { useState } from "react";
import { IconHide, IconShow } from "../icons";

export default function SecondStep() {
  const [showPass, setShowPass] = useState(false);
  const [inputPass, setInputPass] = useState("");
  const [passwordStrengthText, setPasswordStrengthText] = useState("");
  const checkPasswordStrength = (value) => {
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    var mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );

    if (strongRegex.test(value)) {
      setPasswordStrengthText("Strong password");
    } else if (mediumRegex.test(value)) {
      setPasswordStrengthText("Could be stronger");
    } else {
      setPasswordStrengthText("Too weak");
    }
    setInputPass(value);
  };

  return (
    <div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="font-bold mb-1 text-gray-700 block"
        >
          Set up password
        </label>
        <div className="text-gray-600 mt-2 mb-4">
          Please create a secure password including the following criteria
          below.
          <ul className="list-disc text-sm ml-4 mt-2">
            <li>lowercase letters</li>
            <li>numbers</li>
            <li>capital letters</li>
            <li>special characters</li>
          </ul>
        </div>

        <div className="relative">
          <input
            className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Your strong password..."
            type={showPass ? "text" : "password"}
            onChange={(e) => checkPasswordStrength(e.target.value)}
            value={inputPass}
          />

          <div
            className="absolute right-0 bottom-0 top-0 px-3 py-3 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <IconShow /> : <IconHide />}
          </div>
        </div>

        <div className="flex items-center mt-4 h-3">
          <div className="w-2/3 flex justify-between h-2">
            <div
              className={`h-2 rounded-full mr-1 w-1/3 bg-gray-300 ${
                passwordStrengthText == "Too weak" ||
                passwordStrengthText == "Could be stronger" ||
                passwordStrengthText == "Strong password"
                  ? "bg-red-400"
                  : ""
              }`}
            ></div>
            <div
              className={`h-2 rounded-full mr-1 w-1/3 bg-gray-300 ${
                passwordStrengthText == "Could be stronger" ||
                passwordStrengthText == "Strong password"
                  ? "bg-orange-400"
                  : ""
              }`}
            ></div>
            <div
              className={`h-2 rounded-full w-1/3 bg-gray-300 ${
                passwordStrengthText == "Strong password" ? "bg-green-400" : ""
              }`}
            ></div>
          </div>
          <div className="text-gray-500 font-medium text-sm ml-3 leading-none">
            {passwordStrengthText}
          </div>
        </div>

        <p className="mt-5 text-gray-600">
          Inspired from dribbble shot: Exploration for a password strength meter
          by{" "}
          <a
            href="https://dribbble.com/OvertonGraphics"
            className="text-blue-500"
          >
            Josh Overton
          </a>
          .
        </p>
      </div>
    </div>
  );
}
