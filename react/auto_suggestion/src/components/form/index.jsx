import React, { useState } from "react";
import Search from "../search";

const Form = () => {
  const [searchValue, setSearchValue] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobTitle1, setJobTitle1] = useState("");

  const handleForm = () => {
    alert(`${searchValue}, ${jobTitle}, ${jobTitle1}`);
  };

  const onValueChange = (newJobTitle) => {
    setJobTitle(newJobTitle);
  };

  const onValueChangeOne = (newJobTitle) => {
    setJobTitle1(newJobTitle);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <Search placeholder={"Job Title"} onValueChange={onValueChange} />
      <Search placeholder={"Job Title"} onValueChange={onValueChangeOne} />

      <button onClick={handleForm}>SEARCH</button>
    </div>
  );
};

export default Form;
