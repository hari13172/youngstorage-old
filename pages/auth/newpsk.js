import React from "react";

const newpsk = () => {
  return (
    <div className="password-container">
      <div className="psk-container-left">
        <div className="header-logo">
          <img alt="" src="/logo.png" />
          <h1>New Password</h1>
          <h3>update your password and enjoy your service</h3>
        </div>
        <div className="psk">
          <div className="psk-comp">
            <label>Password</label>
            <div className="icons">
              <input type="text" placeholder="Newpassword" />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10"
                    stroke="#F1F3F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 10H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10Z"
                    stroke="#F1F3F6"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="14.5"
                    y="15.5"
                    width="0.01"
                    height="0.01"
                    stroke="#F1F3F6"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="psk-comp">
            <label>Confirm Password</label>
            <div className="icons">
              <input type="text" placeholder="Confirm password" />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 10V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V10"
                    stroke="#F1F3F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 10H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10Z"
                    stroke="#F1F3F6"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="14.5"
                    y="15.5"
                    width="0.01"
                    height="0.01"
                    stroke="#F1F3F6"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button className="btn">Submit</button>
        </div>
      </div>
      <div className="psk-container-right">
        <div className="psk-right">
          <img alt="" src="/back2.png" />
        </div>
      </div>
    </div>
  );
};

export default newpsk;
