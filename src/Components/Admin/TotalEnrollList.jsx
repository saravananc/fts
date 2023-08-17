import React, { useEffect, useState } from "react";
import Axios from 'axios';
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;

const TotalEnrollList = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const token = localStorage.getItem("accesstoken");
  
        if (!token) {
          throw new Error("Access token not found in local storage");
        }
  
        const headers = {
          'Authorization': `Bearer ${token}`
        };
  
        const offset = (currentPage - 1) * 10; 
        const apiUrl = `${LOGIN_URL}admin/getallusers?offset=${offset}&limit=10`;
  
        const dashboardResponse = await Axios.get(apiUrl, { headers });
  
        if (dashboardResponse.status !== 200) {
          throw new Error('Network response was not ok');
        }
  
        const responseData = dashboardResponse.data.response;
        setTableData(responseData.items);
        setTotalPages(responseData.totalPages);
      } catch (error) {
        console.error('Error fetching API:', error);
      }
    };
    
    fetchTableData();
  }, [currentPage]); 

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
 
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between mb-3">        
        <div className="mt-4 mb-2 ms-3 md:ms-0 text-lg font-bold">
          Total Registrations
        </div>   
      </div>
      <div className="w-full overflow-x-auto rounded-3xl">
        <table className="w-full border-collapse border border-gray-500">
          <thead className="sticky top-0 bg-indigo-300">
            <tr>
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Name</th>
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Email</th>
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Phone No</th>
              <th className="border border-indigo-200 px-4 py-2 whitespace-nowrap">Message</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((row) => (
                <tr
                  key={row.id}
                  className={row.id % 2 === 0 ? "bg-indigo-100" : "bg-indigo-100"}
                >
                  <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.name}</td>
                  <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.email}</td>
                  <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap text-center">{row.phone_number}</td>
                  <td className="border border-indigo-200 px-4 py-2 whitespace-nowrap">{row.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-3">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-1 px-3 rounded-l"
        >
          Previous
        </button>
        <div className="flex items-center mx-2 text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-1 px-3 rounded-r"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TotalEnrollList;
