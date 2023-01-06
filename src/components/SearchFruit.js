import React, { useState } from "react";

const list = ["Banana", "Apple", "Orange", "Pineapple", "Watermelon", "Mango"];

const SearchFruit = () => {
  const [searchVal, setSearchVal] = useState("");
  const [filterList, setFilterList] = useState(list);

  const handleChange = (e) => {
    setSearchVal(e.target.value);

    const filtered = list.filter((value) =>
      value.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilterList(filtered);
  };

  return (
    <div>
      <label>
        Search <input type="text" value={searchVal} onChange={handleChange} />
      </label>
      {filterList &&
        filterList.map((val, key) => {
          return <p key={key}>{val}</p>;
        })}
    </div>
  );
};
export default SearchFruit;
