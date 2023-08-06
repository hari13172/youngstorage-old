import Alerts from "@/component/alerts";
import Button from "@/component/button";
import SubHead from "@/component/subhead";
import React, { useState } from "react";
import Dropdown from "@/component/dropdown";

const options = [
  { label: ".youngstorage.in", value: "youngstorage.in" },
  { label: ".youngstorage.tech", value: "youngstorage.tech" },
];

function Domains() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="domain-container">
      <SubHead />
      <Alerts />

      <div className="domain">
        <img alt="" src="/Website.png" />
        <span>Reserve your domain</span>
      </div>
      <div className="get">
        <input type="text" placeholder="type your Domain name" />
        <Dropdown
          className="drop"
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <Button value="Get Domain"></Button>
      </div>

      <div className="your">
        <div className="adjust">
          <div className="any">
            <div className="flex">
              <h3>
                your <b>Domain</b>
              </h3>
              <Button value="0/5"></Button>
            </div>
            <div className="adjustment">
              <img alt="" src="/grid2.png" width="25px" height="30px" />
              <img alt="" src="/alignleft.png" width="25px" height="30px" />
            </div>
          </div>
        </div>
        <div className="dot">
          <div className="gap">
            <span>name.youngstorage.in</span>
            <badge className="bad">not mapped</badge>
          </div>
          <div className="min">
            <span>1 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domains;
