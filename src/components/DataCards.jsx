import React, { useEffect, useState } from "react";
import SingleDataCard from "./SingleDataCard";
import Pagination from "./Pagination/Pagination";

const DataCards = () => {
  const [data, setData] = useState([1, 2, 3]);

  const URL = "https://jsonplaceholder.typicode.com/posts";

  const loadAPI = () => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <div className="container">
      <div className="info-design">
        <h5>List of Data</h5>
        {data.map((item, index) => (
          <SingleDataCard key={index} {...item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default DataCards;
