import { useState } from "react";
import Content from "./content";

function ReactMemo() {
  const [count, setCount] = useState({
    count: 0,
    click: 0,
  });
  return (
    <div style={{ padding: 30 }}>
      <Content />
      <h1>{count.count}</h1>
      <button
        onClick={() =>
          setCount({
            count: count.count + 1,
            click: count.click + 1,
          })
        }
      >
        Click Me!!!
      </button>
    </div>
  );
}
export default ReactMemo;
