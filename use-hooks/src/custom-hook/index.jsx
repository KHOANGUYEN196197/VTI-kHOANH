import useToggle from "../hooks/useToggle";
import { useWindowSize } from "../hooks/useWindowSize";

function CustomHook() {
  const [isToggled, toggle] = useToggle(false);
  const windowSize = useWindowSize();
  console.log(5555, windowSize);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <p>Toggle is on!</p>}
    </div>
  );
}
export default CustomHook;
