import Alerts from "@/component/alerts";
import SubHead from "@/component/subhead";
import { useState } from "react";

export default function Network() {
  const [add, SetAdd] = useState(false);

  return (
    <>
      <div className="net">
        <Net setAdd={SetAdd} />
        {add && <Popup setAdd={SetAdd} />}
      </div>
    </>
  );
}

const Net = (props) => {
  const handleClick = () => {
    props.setAdd(true);
  };
  return (
    <div className="network-container">
      <div className="network">
        <SubHead />
        <Alerts />

        <div className="device">
          <div className="man">
            <div className="crumbs">
              <button className="button" onClick={() => handleClick()}>
                add device
              </button>
              <button className="button1">0 / 1</button>
            </div>

            <div className="ions">
              <img alt="" src="/grid2.png" />
              <img alt="" src="/alignleft.png" />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

const Popup = (props) => {
  return (
    <div className="pop-container">
      <div className="pop">
        <span>add new device to the network</span>
        <img alt="" src="/Close.png" onClick={() => props.setAdd(false)} />
      </div>

      <div className="whole">
        <div className="box">
          <div className="label">
            <label>device name</label>
            <input type="text" placeholder="Test Device" />
          </div>
        </div>
        <div className="box">
          <div className="label">
            <label>device type</label>
            <input type="text" placeholder="Desktop | Mobile | tab" />
          </div>
        </div>
        <div className="button">
          <button className="button3" onClick={() => props.setAdd(false)}>
            cancel
          </button>
          <button className="button4">add device</button>
        </div>
      </div>
    </div>
  );
};
