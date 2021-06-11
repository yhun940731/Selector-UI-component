import React, { useState, useCallback } from "react";
import Selector from "./components/Selector";

const EXAMPLE_LIST = ["App", "SMS Link", "Tracking Link", "Web"];

const App = () => {
  const [selectedList, setSelectedList] = useState([]);

  const handleChangeInput = useCallback((e) => {
    console.log("User Wrote something...", e.target.value);
  }, []);

  const handleSubmitSelector = useCallback((nextSelectedList) => {
    console.log(nextSelectedList);
    setSelectedList(nextSelectedList);
  }, []);

  return (
    <Selector
      list={EXAMPLE_LIST}
      placeholder="밸류 선택"
      selected={selectedList}
      onChange={handleChangeInput}
      onSubmit={handleSubmitSelector}
    />
  );
};

export default App;
