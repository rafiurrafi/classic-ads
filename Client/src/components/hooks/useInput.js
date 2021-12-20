import { useState } from "react";
const useInput = ({ initialValue = "" }) => {
  const [input, setInput] = useState(initialValue);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return [input, handleInput];
};
export default useInput;
