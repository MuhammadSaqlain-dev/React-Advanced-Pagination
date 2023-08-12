import React, { useEffect, useState } from "react";
import SingleDataCard from "./SingleDataCard";
import Pagination from "./Pagination/Pagination";

const DataCards = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  // Pagination
  const Posts_Per_page = 8;
  const totalPages = Math.ceil(data.length / 8);

  const offset = currentPage * 8;
  const currentPageData = data.slice(offset, offset + Posts_Per_page);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="container">
      <div className="info-design">
        <h5>List of Data</h5>
        {currentPageData.map((item, index) => (
          <SingleDataCard key={index} {...item} />
        ))}
      </div>
      <div className="card">
        <Pagination handlePageClick={handlePageClick} pageCount={totalPages} />
      </div>
    </div>
  );
};

export default DataCards;
