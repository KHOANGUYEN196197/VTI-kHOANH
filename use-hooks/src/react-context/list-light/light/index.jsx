import { useContext } from "react";
import lampDark from "../.././lamp-dark.png";
import lampLight from "../.././lamp-light.png";
import { LightContext } from "../../context/LightContext";
function Light() {
  const context = useContext(LightContext);
  return (
    <div style={{ textAlign: "center" }}>
      {context.toggle ? (
        <img src={lampLight} alt="" />
      ) : (
        <img src={lampDark} alt="" />
      )}
    </div>
  );
}
export default Light;
