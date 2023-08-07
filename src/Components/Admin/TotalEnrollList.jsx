import React, { useState } from "react";
import * as XLSX from "xlsx";

const TotalEnrollList = () => {
  // Function to generate random data
  const generateRandomData = () => {
    const names = ["John", "Jane", "Michael", "Emily", "William", "Sophia"];
    const emails = ["john@example.com", "jane@example.com", "michael@example.com"];
    const phones = ["123-456-7890", "987-654-3210", "555-555-5555"];
    const messages = ["Hello", "Hi there", "Greetings"];

    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    return {
      name: getRandomItem(names),
      email: getRandomItem(emails),
      phone: getRandomItem(phones),
      message: getRandomItem(messages),
    };
  };

  // Generate 50 random data points using for loop
  const tableData = Array.from({ length:50 }, (_, index) => generateRandomData());
  const itemsPerPage = 8;
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // State to store the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset pagination to the first page when searching
  };

  // Filter data based on the search term
  const filteredData = tableData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update currentData based on the filteredData and current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Function to handle download button click
  const handleDownload = () => {
    const header = ["Name", "Email", "Phone No", "Message"];
    const data = [header, ...filteredData.map((row) => [row.name, row.email, row.phone, row.message])];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Enroll List");
    XLSX.writeFile(wb, "enroll_list.xlsx");
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between mb-3">
       
      
        <div className="mt-4 mb-2 ms-3 md:ms-0 text-lg font-bold">
        Total Registrations
      </div>
      <div className="mt-4 mb-2 text-lg font-semibold">
      <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 mx-2 rounded-xl mb-3 md:mb-0"
        >
          Download Excel
        </button>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchInputChange}
          className="px-4 py-1 border border-gray-300 focus:outline-none rounded-xl ms-2 md:ms-0"
        />
      </div>
      
      </div>
<div className="w-full overflow-x-auto rounded-3xl">
      <table className="w-full border-collapse border border-gray-500 ">
        <thead className="sticky top-0 bg-indigo-300">
          <tr>
            <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Name</th>
            <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Email</th>
            <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Phone No</th>
            <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Message</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-indigo-100" : "bg-indigo-100"}>
              <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.name}</td>
              <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.email}</td>
              <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.phone}</td>
              <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap">{row.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="flex mt-4 justify-end">
        <div>
          <button
            onClick={handleClickPrev}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TotalEnrollList;
