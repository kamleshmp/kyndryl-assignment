import React, { useEffect, useState } from 'react';
const CustomSearch = (value, delay = 1000) => {
  const [searchValue, setSearchValue] = useState(value);
  useEffect(() => {
    const timer = setInterval(() => {
      setSearchValue(value);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);
  return searchValue;
};

export default CustomSearch;
