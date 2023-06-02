import { useContext } from "react";
import lampDark from "../.././lamp-dark.png";
import lampLight from "../.././lamp-light.png";
import Context from "../../index";
import { LightContext } from "../../context/LightContext";
function Light() {
  const contetx = useContext(LightContext);
  return (
    <div style={{ textAlign: "center" }}>
      {contetx.toggle ? (
        <img src={lampLight} alt="" />
      ) : (
        <img src={lampDark} alt="" />
      )}
    </div>
  );
}
export default Light;
