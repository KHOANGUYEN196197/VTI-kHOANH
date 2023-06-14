// import React, { useRef } from "react";

// function HookUserRef() {
//   const inputRef = useRef();

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default HookUserRef;

import React, { useEffect, useRef, useState } from "react";

function HookUserRef() {
  const [inputValue, setInputValue] = useState("sss");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  console.log({
    inputValue: inputValue,
    previousInputValue: previousInputValue.current,
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

export default HookUserRef;
