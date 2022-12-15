import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC onClick={() => console.log("clicked")} color="red">
    Jossan // Passed as children prop
  </ChildAsFC>
};

export default Parent;