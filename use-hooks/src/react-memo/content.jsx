import { memo } from "react";

function Content() {
  console.log("render");
  return <div>Hello Word!!!!</div>;
}
export default memo(Content);

// export default memo(Content, (prevProps, nextProps) => {
//   console.log(prevProps, nextProps);
//   return isEqual(prevProps.objProp, nextProps.objProp) && isEqual(prevProps.arrProp, nextProps.arrProp);
// });
