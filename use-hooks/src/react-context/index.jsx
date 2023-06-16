import { useContext } from "react";
import { LightContext, LightProvider } from "./context/LightContext";
import ListLight from "./list-light";

//Context
// ComponentA => ComponentB => ComponentC

// 1. Create context
// 2. Provider
// 3. Consumer

function ReactContext() {
  const context = useContext(LightContext);
  console.log(11111, context);
  return (
    <div style={{ padding: "20px 30px" }}>
      <button onClick={context.handleToggle}>Toggle</button>
      <ListLight />
    </div>
  );
}
export default ReactContext;
