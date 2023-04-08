import { useCallback, useEffect, useState } from "react";

import "./index.css";

const Search = (props) => {
  const { placeholder, onValueChange } = props;

  const [value, setValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
    setValue("");
    setSuggestion([]);
  };

  const handleClick = (search) => {
    setValue(search);
    setSuggestion([]);
    setSearchText("");
  };

  const fetchAndPopulateSuggestion = (searchQuery) => {
    fetch(`https://give-me-users-forever.vercel.app/api/users/0/next`)
      .then((res) => res.json())
      .then((searchData) => {
        setSuggestion(
          searchData.users.filter((item) =>
            item.JobTitle.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const getDisplayValue = useCallback(() => {
    if (searchText && searchText.length > 0) {
      return searchText;
    }
    return value;
  }, [searchText, value]);

  useEffect(() => {
    setSuggestion([]);

    if (searchText && searchText.length > 0) {
      fetchAndPopulateSuggestion(searchText);
    }
  }, [searchText]);

  useEffect(() => {
    onValueChange(value);
  }, [value]);

  return (
    <div className="wrapper">
      <input
        className="search_box"
        type="text"
        value={getDisplayValue()}
        onChange={handleChange}
        placeholder={placeholder}
      />

      <div className="suggestions-wrapper">
        {suggestion.map((item) => (
          <div
            onClick={() => handleClick(item.JobTitle)}
            key={item.ID}
            className="suggestion"
          >
            {item.JobTitle}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
