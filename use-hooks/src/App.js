import CustomHook from "./custom-hook";
import HookUseCallBack from "./hook-use-callback";
import HookUseEffect from "./hook-use-effect";
import ImperativeHandle from "./hook-use-imperativeHandle";
import HookUseLayoutEffect from "./hook-use-layoutEffect";
import HookUseMemo from "./hook-use-memo";
import HookUseReducer from "./hook-use-reducer";
import HookUserRef from "./hook-use-ref";
import HookUseState from "./hook-use-state";
import ReactContext from "./react-context";
import { LightProvider } from "./react-context/context/LightContext";
import ReactMemo from "./react-memo";

function App() {
  return (
    <LightProvider>
      <div className="App">
        {/* <HookUseState /> */}
        {/* <HookUseEffect /> */}
        {/* <HookUseLayoutEffect /> */}
        {/* <HookUserRef /> */}
        {/* <ReactMemo /> */}
        {/* <HookUseCallBack /> */}
        {/* <HookUseMemo /> */}
        {/* <ImperativeHandle /> */}
        {/* <CustomHook /> */}
        <HookUseReducer />
        {/* <ReactContext /> */}
      </div>
    </LightProvider>
  );
}

export default App;
