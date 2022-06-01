import React, { useRef } from "react";

const RefTest = () => {
  const inputEl = useRef(null);
  const paragraphEl = useRef(null);

  console.log("Wyrenderowany");

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button
        onClick={() => {
          paragraphEl.current.innerText = inputEl.current.value;
          inputEl.current.value = "";
        }}
      >
        {" "}
        Klik{" "}
      </button>
      <p ref={paragraphEl}>Tu value</p>
    </div>
  );
};

export default RefTest;
