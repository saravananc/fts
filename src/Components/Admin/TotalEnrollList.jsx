import React, { useEffect, useState } from "react";
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
const LOGIN_URL = process.env.REACT_APP_LOGIN_URL;

const TotalEnrollList = () => {
  const [tableData, setTableData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);


  

  const handlePageChange = (data) => {
    fetchTableData(data.selected+1);
  };
 
  const fetchTableData = async (data) => {
    try {
      const token = localStorage.getItem("accesstoken");

      if (!token) {
        throw new Error("Access token not found in local storage");
      }

      const headers = {
        'Authorization': `Bearer ${token}`
      };

      
      const apiUrl = `${LOGIN_URL}/admin/getallusers?offset=${data}&limit=10`;

      const dashboardResponse = await Axios.get(apiUrl, { headers });

      if (dashboardResponse.status !== 200) {
        throw new Error('Network response was not ok');
      }

      
      setTableData(dashboardResponse.data.response.paginationOutput.items);
      
      setTotalPage(dashboardResponse.data.response.paginationOutput.totalPages);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };
  useEffect(() => {
    fetchTableData(1);
     // eslint-disable-next-line 
  }, []); 



 
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
      
          <ReactPaginate
            previousLabel={"pre"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={totalPage}
            pageRangeDisplayed={10}
            onPageChange={handlePageChange}
            containerClassName="flex items-center justify-end mt-4"
            pageClassName="mx-1 px-3 py-2 rounded-lg bg-indigo-300 text-indigo-700"
            previousClassName="mx-1 px-3 py-2 rounded-lg bg-indigo-300 text-indigo-700"
            nextClassName="mx-1 px-3 py-2 rounded-lg bg-indigo-300 text-indigo-700"
            activeClassName="bg-indigo-500"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
       
      
    </>
  );
};

export default TotalEnrollList;
