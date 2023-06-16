// import { useState } from "react";
// import Content from "./Content";

// function HookUseEffect() {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };
//   return (
//     <div style={{ padding: 80 }}>
//       <button onClick={handleToggle}>toggle</button>
//       {toggle && <Content />}
//     </div>
//   );
// }

// export default HookUseEffect;



import React, { useEffect, useState } from "react";

function Content() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerHeight);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <p>Window Height: {windowHeight}</p>;
}

export default Content;