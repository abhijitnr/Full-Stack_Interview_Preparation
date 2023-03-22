import { useEffect, useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (search) => {
    setValue(search);
  };

  useEffect(() => {
    fetch(`https://give-me-users-forever.vercel.app/api/users/0/next`)
      .then((res) => res.json())
      .then((searchData) => setData(searchData.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={() => handleClick(value)}>Search</button>
      </div>
      <div>
        {data
          .filter((item) => {
            const searchName = value.toLowerCase();
            const jobTitle = item.JobTitle.toLowerCase();

            return (
              searchName &&
              jobTitle.startsWith(searchName) &&
              searchName !== jobTitle
            );
          })
          .map((item) => (
            <div onClick={() => handleClick(item.JobTitle)} key={item.ID}>
              {item.JobTitle}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
