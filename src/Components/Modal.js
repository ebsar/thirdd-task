import React, { useState } from "react";
import { MaterialPicker } from "react-color";

function Modal({ onClose }) {
 
  const [Color, setColor] = useState("#44444");
  const [Color1, setColor1] = useState("#ffffff");
  const [Color2, setColor2] = useState("#2072ef");
  const [Color3, setColor3] = useState("#2072ef");
  const [Color4, setColor4] = useState("#0053D1");
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
      <div className="First-Container">
        <h3 style={{ color: Color} }className="textss">Theme Color</h3>
        <h3 style={{ color: Color2 }}>Change Theme</h3>
      </div>
      <div
        style={{
          backgroundColor: Color1,
        }}
        className="Modal2-Container"
      >
        <div className="Text-1">
          <div className="text-4-1">
            <p style={{ color: Color }}>Font Color</p>
            <p className="color-f" style={{ color: Color }}>
              {Color}
            </p>
          </div>
          <button
            style={{
              border: "1px solid",
              borderColor: Color3,
              borderRadius: "5px",
              backgroundColor: Color,
              width: "70px",
              height: "30px",
            }}
            className="text-1-btn"
            onClick={onClick}
          ></button>
        </div>
        <div className="Color1">
          {colorpopup && (
            <MaterialPicker
            className="ColorPicker"
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
            <p className="color-f" style={{ color: Color }}>
              {Color1}
            </p>
          </div>
          <button
            className="text-2-btn"
            style={{
              border: "1px solid",
              borderColor: Color3,
              borderRadius: "5px",
              backgroundColor: Color1,
              width: "70px",
              height: "30px",
            }}
            onClick={onClick1}
          ></button>
        </div>
        <div className="Color1">
          {colorpopup1 && (
            <MaterialPicker
              color1={Color1}
              onChangeComplete={(Color1) => {
                setColor1(Color1.hex);
              }}
            />
          )}
        </div>
        <div className="Text-3">
          <div className="text-4-1">
            <p style={{ color: Color }}>Button Color</p>
            <p className="color-f" style={{ color: Color }}>
              {Color2}
            </p>
          </div>
          <button
            className="text-3-btn"
            style={{
              border: "1px solid",
              borderColor: Color3,
              borderRadius: "5px",
              backgroundColor: Color2,
              width: "70px",
              height: "30px",
            }}
            onClick={onClick2}
          ></button>
        </div>
        <div className="Color1">
          {colorpopup2 && (
            <MaterialPicker
              color2={Color2}
              onChangeComplete={(Color2) => {
                setColor2(Color2.hex);
              }}
            />
          )}
        </div>
        <div style={{ Color }} className="Text-4">
          <div className="text-4-1">
            <p style={{ color: Color }}>Button Border Color</p>
            <p className="color-f" style={{ color: Color }}>
              {Color3}
            </p>
          </div>
          <button
            className="text-4-btn"
            style={{
              border: "1px solid",
              borderColor: Color3,
              borderRadius: "5px",
              backgroundColor: Color3,
              width: "70px",
              height: "30px",
            }}
            onClick={onClick3}
          ></button>
        </div>
        <div className="Color1">
          {colorpopup3 && (
            <MaterialPicker
              color3={Color3}
              onChangeComplete={(Color3) => {
                setColor3(Color3.hex);
              }}
            />
          )}
        </div>
        <div className="Text-5">
          <div className="text-4-1">
            <p style={{ color: Color }}>Button Mouseover Color</p>
            <p className="color-f" style={{ color: Color }}>
              {Color4}
            </p>
          </div>
          <button
            className="text-5-btn"
            style={{
              border: "1px solid",
              borderColor: Color3,
              borderRadius: "5px",
              backgroundColor: Color4,
              width: "70px",
              height: "30px",
            }}
            onClick={onClick4}
          ></button>
        </div>
        <div className="Color1">
          {colorpopup4 && (
            <MaterialPicker
              color4={Color4}
              onChangeComplete={(Color4) => {
                setColor4(Color4.hex);
              }}
            />
          )}
        </div>
      </div>
      
      <div className="Button-container">
        <button
          className="Cancel-btn"
          onClick={onClose}
          style={{
            border: "1px solid lightgrey",
            borderRadius: "5px",
          }}
        >
          <small>Cancel</small>
        </button>
        <button
          className="Save-btn"
          style={{
            border: "1px solid",
            borderColor: Color3,
            borderRadius: "5px",
            backgroundColor: Color2,
          }}
        >
          <small style={{ color: "white" }}>Save</small>
        </button>
       
      </div>
    </div>
  );
}
export default Modal;
