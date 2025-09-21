import React, { useState } from "react";
import "./Total.css";
import data from "./Total.json";

const TotalStat = () => {
  // Main data state, initialized with the full dataset
  const [tableData, setTableData] = useState(data);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = tableData.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination logic now uses the filteredData array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages based on filteredData
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Event handlers
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page when this changes
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on a new search
  };

  // Create an array of page numbers to render
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="items-per-page" className="fs-5">
              Show &nbsp;
              <select
                id="items-per-page"
                onChange={handleItemsPerPageChange}
                value={itemsPerPage}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              &nbsp; entries
            </label>
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="search-input" style={{ marginLeft: "60%" }}>
              Search: &nbsp;
              <input
                id="search-input"
                type="text"
                style={{ border: "1px solid black", height: "100%" }}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="table-container p-5">
        <table className="problem-statement-table">
          <thead>
            <tr className="text-center">
              <th>S.No</th>
              <th>Organization</th>
              <th>Problem Statement title</th>
              <th>Category</th>
              <th>PS NUMBER</th>
              <th>Submitted Idea</th>
              <th>Theme</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.sNo}>
                <td>{item.sNo}</td>
                <td>{item.organization}</td>
                <td>{item.problemStatementTitle}</td>
                <td>{item.category}</td>
                <td>{item.psNumber}</td>
                <td>{item.submittedIdeasCount}</td>
                <td>{item.theme}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="pagination-nav">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <a
                onClick={() => paginate(number)}
                href="#!"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default TotalStat;