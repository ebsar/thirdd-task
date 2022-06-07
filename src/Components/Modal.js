import React, { useState } from "react";
import { CirclePicker } from "react-color";

function Modal({ onClose }) {
  const [ChangeTheme, setChangeTheme] = useState(false);
  const onClicker = () => {
    setChangeTheme((prev) => !prev);
  };
  const [Color, setColor] = useState("#0");
  const [Color1, setColor1] = useState("#ffffff");
  const [Color2, setColor2] = useState("#0");
  const [Color3, setColor3] = useState("#0");
  const [Color4, setColor4] = useState("#0");
  const [colorpopup, setcolorpopup] = useState(false);
  const onClick = () => {
    setcolorpopup((prev) => !prev);
  };
  const [colorpopup1, setcolorpopup1] = useState(false);
  const onClick1 = () => {
    setcolorpopup1((prev) => !prev);
  };
  const [colorpopup2, setcolorpopup2] = useState(false);
  const onClick2 = () => {
    setcolorpopup2((prev) => !prev);
  };
  const [colorpopup3, setcolorpopup3] = useState(false);
  const onClick3 = () => {
    setcolorpopup3((prev) => !prev);
  };
  const [colorpopup4, setcolorpopup4] = useState(false);
  const onClick4 = () => {
    setcolorpopup4((prev) => !prev);
  };
  return (
    <div style={{ backgroundColor: Color1 }} className="backrground-container">
      <div className="Container1">
        <div className="First-Container">
          <p>Theme Color</p>
          <p onClick={onClicker}>Change Theme</p>
        </div>
      {/*   {ChangeTheme && (
          <div
            style={{
              backgroundColor: Color1,
            }}
            className="Modal2-Container"
          >
            <div className="Text-1">
              <div className="text-4-1">
                <p style={{ color: Color }}>Font Color</p>
                <p style={{ color: Color }}>{Color}</p>
              </div>
              <button
                style={{ backgroundColor: Color }}
                className="text-1-btn"
                onClick={onClick}
              ></button>
            </div>
            <div className="Color1">
              {colorpopup && (
                <CirclePicker
                  color={Color}
                  onChangeComplete={(Color) => {
                    setColor(Color.hex);
                  }}
                />
              )}
            </div>
            <div style={{ Color }} className="Text-2">
              <div className="text-4-1">
                <p style={{ color: Color }}>Backrground Color</p>
                <p style={{ color: Color }}>{Color1}</p>
              </div>
              <button
                className="text-2-btn"
                style={{ backgroundColor: Color1 }}
                onClick={onClick1}
              ></button>
            </div>
            <div className="Color1">
              {colorpopup1 && (
                <CirclePicker
                  Color1={Color1}
                  onChangeComplete={(Color1) => {
                    setColor1(Color1.hex);
                  }}
                />
              )}
            </div>
            <div className="Text-3">
              <div className="text-4-1">
                <p style={{ color: Color }}>Button Color</p>
                <p style={{ color: Color }}>{Color2}</p>
              </div>
              <button
                className="text-3-btn"
                style={{ backgroundColor: Color3 }}
                onClick={onClick2}
              ></button>
            </div>
            <div className="Color1">
              {colorpopup2 && (
                <CirclePicker
                  Color2={Color2}
                  onChangeComplete={(Color2) => {
                    setColor2(Color2.hex);
                  }}
                />
              )}
            </div>
            <div className="Text-4">
              <div className="text-4-1">
                <p style={{ color: Color }}>Button Border Color</p>
                <p style={{ color: Color }}>{Color3}</p>
              </div>
              <div className="btn">
                <button className="text-4-btn" onClick={onClick3}></button>
              </div>
            </div>
            <div className="Color1">
              {colorpopup3 && (
                <CirclePicker
                  color3={Color3}
                  onChangeComplete={(Color3) => {
                    setColor3(Color3.hex);
                  }}
                />
              )}
            </div>
            <div className="Text-5">
              <div className="text-4-1">
                <p style={{ color: Color }}>Button Mouse Color</p>
                <p style={{ color: Color }}>{Color4}</p>
              </div>
              <button className="text-5-btn" onClick={onClick4}></button>
            </div>
            <div className="Color1">
              {colorpopup4 && (
                <CirclePicker
                  Color4={Color4}
                  onChangeComplete={(Color4) => {
                    setColor4(Color4.hex);
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div> */}
      <div className="Button-container">
        <button className="Cancel-btn" onClick={onClose}>
          Cancel
        </button>
        <button className="Save-btn">Save</button>
      </div>
    </div>
    </div>
  );
}
export default Modal;
